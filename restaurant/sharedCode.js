function postMyPage(url, data, myCallback) {
    console.log("started AJAX call for " + url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {

            var responseText = xhttp.responseText;
            myCallback(responseText);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(data);

}

function submitForm() {

    //do the validation
    //if fails - invoke error message display logic and exit by retruning false

    //if everything is good continue to submit to back end
    // if(!validateForm(form)){
    //     displayErrorsInForm()
    // }
    // else{
    //     postFormtoBackEnd();
    // }


    var data = {};
    data.name = document.forms.addContact.fullname.value;
    data.email = document.forms.addContact.email.value;
    data.phone = document.forms.addContact.phone.value;
    data.id = document.forms.addContact.id.value;

    if (data.id == "") {
        postMyPage('/addContact', JSON.stringify(data), displayContactList);
    } else {

        postMyPage('/updateContact', JSON.stringify(data), displayContactList);
    }

}