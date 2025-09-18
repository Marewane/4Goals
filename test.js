let users = ["marwane","ahmed","mohammed"];


let usersList = users.map((user)=>`<p>Hello ${user}</p>`).join('');

console.log(usersList)