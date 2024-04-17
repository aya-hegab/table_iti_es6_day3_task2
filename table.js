var table = document.createElement("table");
document.querySelector("body").appendChild(table);

var header = document.createElement("tr");
table.appendChild(header);

var idHead = document.createElement("th");
idHead.innerHTML = "ID";
header.appendChild(idHead);

var nameHead = document.createElement("th");
nameHead.innerHTML = "NAME";
header.appendChild(nameHead);

var usernameHead = document.createElement("th");
usernameHead.innerHTML = "USERNAME";
header.appendChild(usernameHead);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    var students = response.json();
    return students;
  })
  .then((response) => {
    for (var i = 0; i < response.length; i++) {
      var newRow = document.createElement("tr");
      table.appendChild(newRow);
      var idCel = document.createElement("td");
      idCel.innerHTML = response[i].id;
      newRow.appendChild(idCel);

      var nameCel = document.createElement("td");
      nameCel.innerHTML = response[i].name;
      newRow.appendChild(nameCel);

      var usernameCel = document.createElement("td");
      usernameCel.innerHTML = response[i].username;
      newRow.appendChild(usernameCel);
    }
  });
