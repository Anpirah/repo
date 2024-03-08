function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
          if (!response.ok) {
              throw new Error('No se pudo establecer conexión');
          } else {
              return response.json();
          }
      })
      .then(data => {
          const users = data;
          console.log(users);
          showUsers(users);
      })
      .catch(error => {
          console.log('Error: Nada funciona');
      });
}

const generateRandomAge = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function showUsers(users) {
  users.forEach(user => {
      const liUser = document.createElement("li");
      const imgUser = document.createElement("img");
      imgUser.src = `./assets/img/${user.id}.jpeg`;

      const { name, username, phone, email, company, address } = user;
      const userInfo = document.createElement("div");
      userInfo.classList.add('container');

      userInfo.innerHTML =
          `<div id="tarjeta">
          <h3>Nombre: ${name}</h3>
          <p> <b>Edad: </b> ${generateRandomAge(20, 69)} </p>
          <p> <b>Username: </b> ${username} </p>
          <p> <b>Teléfono: </b> ${phone}</p>
          <p> <b>Email: </b> ${email}</p>
      </div>
      <div id="infoExtra">
          <p> <b>Compañía:</b> ${company.name} </p>
          <p> <b>Dirección:</b> ${address.street}, ${address.suite}, ${address.city}.</p>
      </div>`;

      liUser.appendChild(userInfo);
      userInfo.appendChild(imgUser);
      document.getElementById('listaUsuarios').appendChild(liUser);
  })
}

fetchUsers();