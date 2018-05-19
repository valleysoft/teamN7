var clear = false, divInfo = null, divs = null, useCapture = false;
window.onload = function () {
  divInfo = document.getElementById("divInfo");
  divs = document.getElementsByTagName('div'); 
  chCapture = document.getElementById("chCapture");
  chCapture.onclick = function () { 
    RemoveListeners();
    AddListeners(); 
  }
  Clear();
  AddListeners();
}

function RemoveListeners() { 
  for (var i = 0; i < divs.length; i++) { 
    var d = divs[i]; 
    if (d.id != "divInfo") { 
      d.removeEventListener("click", OnDivClick, true);
      d.removeEventListener("click", OnDivClick, false);
    }
  }
}

function AddListeners() { 
  for (var i = 0; i < divs.length; i++) { 
    var d = divs[i];
    if (d.id != "divInfo") { 
      d.addEventListener("click", OnDivClick, false); 
      if (chCapture.checked) 
        d.addEventListener("click", OnDivClick, true);
      d.onmousemove = function () { clear = true; }; 
    }
  }
} 

function OnDivClick(e) {
  if (clear) {
    Clear(); clear = false;
  }
  if (e.eventPhase == 2)
    e.currentTarget.style.backgroundColor = 'red';
  var level = e.eventPhase == 0 ? "none" : e.eventPhase == 1 ? "capturing" : e.eventPhase == 2 ? "target" : e.eventPhase == 3 ? "bubbling" : "error";
  divInfo.innerHTML += e.currentTarget.id + "; eventPhase: " + level + "<br/>";
}

function Clear() { 
  for (var i = 0; i < divs.length; i++) { 
    if (divs[i].id != "divInfo")
      divs[i].style.backgroundColor = (i & 1) ? "#f6eedb" : "#cceeff";
  } 
  divInfo.innerHTML = ''; 
}