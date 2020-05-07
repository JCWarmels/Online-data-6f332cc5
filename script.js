var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var person = response.person;
        var output = "<li>" + person.name + "</li>" + "<li>" + person.score + "</li>" + "<li>" + person.start_date + "</li>" + "<li>Friends:</li> <ul>";
        for (i = 0; i < person.friends.length; i++) {
            output += "<li>" + person.friends[i] + "</li>";
        }
        output += "</ul><li>Qualified; " + person.qualified + "</li>";
        document.getElementById("friends").innerHTML = output;
    }
};
xhttp.open("GET", "person.json", true);
xhttp.send();
