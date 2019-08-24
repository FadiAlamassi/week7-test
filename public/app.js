fetch("/cities")
  .then(res => res.json())
  .then(cities => {
    const table = document.getElementById("cities-table");
    cities.forEach(c => {
      const row = document.createElement("tr");
      const name = document.createElement("td");
      name.textContent = c.name;
      row.appendChild(name);
      const city = document.createElement("td");
      city.textContent = c.city;
      const deleteCity = document.createElement("td");
      row.appendChild(city);
      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("onclick","deleteCity(this)");
      deleteBtn.setAttribute("id",c.id);
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'X';
      deleteCity.appendChild(deleteBtn);
      row.appendChild(deleteCity);
      table.appendChild(row);
    });
  })


  const deleteCity = (city)=>{
    var data = {cityID: city.id};
    fetch('/deleteCity',{
      method: 'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })
    // .then(() => alert('City Deleted Successfully'))
    .then(() => location.reload())
    .catch(error => console.error('Error:', error));
  }
