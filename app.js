document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var users = xmlDoc.getElementsByTagName("user");
            var tableBody = document.getElementById("tableBody");
            for (var i = 0; i < users.length; i++) {
                var id = users[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
                var name = users[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var lastname = users[i].getElementsByTagName("lastname")[0].childNodes[0].nodeValue;
                var row = tableBody.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = id;
                cell2.innerHTML = name;
                cell3.innerHTML = lastname;
            }
        }
    };
    xhttp.open("GET", "users.xml", true);
    xhttp.send();
});
