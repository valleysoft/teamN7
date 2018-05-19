var opts = [], opt;
var count = 0;
var previousStoredValue=[];

document.getElementById('demoForm').onsubmit = function(e) {
    // reference to select list using this keyword and form elements collection
    // no callback function used this time
    var finalArray=[];
    var selectedOpts = getSelectedOptions( this.elements['demoSel'] );
	//alert(selectedOpts);
	var selectedString = "";
	
	for(var i=0; i<selectedOpts.length;i++){
		if(i==(selectedOpts.length-1)){
			selectedString += '\"'+selectedOpts[i].value+'\"';
		}else{
			selectedString += '\"'+selectedOpts[i].value+'\",';
		}
    } 
	alert("hi-"+selectedString);
	
	
	
	if(count > 0){
		//alert the differences
		//in the new selection for each value see if that value is there in the previous selection or not
		var addedString ="Added-";
		for(var n=0; n<selectedOpts.length; n++){
			var exists = existsAlready(selectedOpts[n],previousStoredValue );
			
			if(!exists){
				addedString += (selectedOpts[n].value + ',');
			}
		}
		
		var removedString = "Removed-";
		for(var n=0; n<previousStoredValue.length; n++){
			var exists = existsAlready(previousStoredValue[n],selectedOpts );
			
			if(!exists){
				removedString += (previousStoredValue[n].value + ',');
			}
		}
		alert(addedString + removedString);
	}
	previousStoredValue = selectedOpts ;
	opts=[];
	
    document.getElementById('display').innerHTML = selectedString;
	
    count++;
    return false; // don't return online form
};

function existsAlready(newValue, existingList){
	for(var i=0; i<existingList.length;i++){
		if(existingList[i].value == newValue.value) {
			return true;
		}
	}
	return false;
}

// arguments: reference to select list, callback function (optional)
function getSelectedOptions(sel,fn) {
    //opts = [];
    
    // loop through options in select list
    for (var i=0, len=sel.options.length; i<len; i++) {
        opt = sel.options[i];
        // check if selected
        if ( opt.selected ) {
            // console.log("selected opt value :"+opt.value);
            // add to array of option elements to return from this function
            opts.push(opt);
			alert(opt.value);
            
//            invoke optional callback function if provided
            if (fn) {
                fn(opt);
            }
        }
    }
    
    // return array containing references to selected option elements
    return opts;
}

// example callback function (selected options passed one by one)
function callback(opt) {
    // display in textarea for this example
    var display = document.getElementById('display');
    
    display.innerHTML += '"'+opt.value +'"'+ ',';
    // console.log("the selected values are: "+ opt.value);

    // can access properties of opt,
    //alert( opt.value )
    // alert( opt.text )
   
}

/**
// anonymous function onchange for select list with id demoSel
document.getElementById('demoSel').onchange = function(e) {
    // get reference to display textarea
    var display = document.getElementById('display');
    display.innerHTML = ''; // reset
    
    // callback fn handles selected options
    getSelectedOptions(this, callback);
    
    // remove ', ' at end of string
    var str = display.innerHTML.slice(0, -1);
    display.innerHTML = str;
};


var unique = function(origArr) {
    var newArr = [],
        origLen = origArr.length,
        found, x, y;

    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] === newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(origArr[x]);
        }
    }
    console.log("newArr :"+newArr.toString());
    return newArr;
}
**/




