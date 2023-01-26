const getUsers = () => {
    const url = `https://reqres.in/api/users?delay=3`;
  
    let fechaVieja = localStorage.getItem("date");
    if (
      Object.is(fechaVieja, null) ||
      new Date().getTime() - fechaVieja > 60_000
    ) {
      fetch(url)
        .then((response) => response.json())
        .then((users) => {
          localStorage.setItem("date", new Date().getTime());
          localStorage.setItem("users", JSON.stringify(users.data));
          showData(users.data);
        })
        .catch((error) => console.log(error));
    } else {
      showData(JSON.parse(localStorage.getItem("users")));
    }
  };
  
  showData = (users) => {
    let readUsers = "";
    for (let user of users) {
      readUsers += `<tr>
                  <th>${user.id}</th>
                  <td>${user.first_name}</td>
                  <td>${user.last_name}</td>
                  <td>${user.email}</td>
                  <td><img src="${user.avatar}" class="image-user"></td>
                  </tr>`;
    }
    document.getElementById("leerUsuarios").innerHTML = readUsers;
  };
  