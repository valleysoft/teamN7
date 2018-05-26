"use strict"

window.onload = function() {
    loadPage("/contactsList");
};

function deleteContact(id) {
    var data = {};
    data.id = id;

    postData('/deleteContact', data);
}

function editContact(id) {
    var url = "/getContact?id=" + id;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var textData = xhr.responseText;
            console.log(textData);
            var jsonObj = JSON.parse(textData);
            showEditContact(jsonObj);
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}



function submitForm() {
    var data = {};
    data.firstName = document.forms.addContact.first.value;
    data.lastName = document.forms.addContact.last.value;
    data.email = document.forms.addContact.email.value;
    data.work = document.forms.addContact.work.value;
    data.phone = document.forms.addContact.phone.value;
    data.id = document.forms.addContact.id.value;

    console.log("new contact is=" + JSON.stringify(data));

    if (data.id != "") {
        postData('/updateContact', data);
    } else {

        postData('/addContact', data);
    }
}

function showNewContactForm() {
    loadPage("newContact.html");
}

function showEditContact(data) {
    var url = "newContact.html";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var textData = xhr.responseText;
            console.log(textData);
            window.document.getElementById('mainContent').innerHTML = textData;

            document.forms.addContact.first.value = data.firstName;
            document.forms.addContact.last.value = data.lastName;
            document.forms.addContact.email.value = data.email;
            document.forms.addContact.phone.value = data.phone;
            document.forms.addContact.work.value = data.work;
            document.forms.addContact.id.value = data.id;
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}

function loadPage(url) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var textData = xhr.responseText;
            console.log(textData);
            //alert(textData);
            if (url == "/contactsList") {
                //textData = prepareMenuHtml(textData);
                var jsonObj = JSON.parse(textData);
                dust.render('contactsHtml', jsonObj, function(err, out) {
                    console.log(err);
                    console.log(out);
                    document.getElementById('mainContent').innerHTML = out;
                });
                return;

            }
            window.document.getElementById('mainContent').innerHTML = textData;
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}

function postData(url, data) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var textData = xhr.responseText;
            console.log(textData);
            //alert(textData);
            if ((url == "/addContact") || (url == "/deleteContact") || (url == "/updateContact")) {
                //textData = prepareMenuHtml(textData);
                var jsonObj = JSON.parse(textData);
                dust.render('contactsHtml', jsonObj, function(err, out) {
                    console.log(err);
                    console.log(out);
                    document.getElementById('mainContent').innerHTML = out;
                });
                return;

            }
            window.document.getElementById('mainContent').innerHTML = textData;
        }
    }

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
}
