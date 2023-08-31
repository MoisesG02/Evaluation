$(document).ready(function api() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => {
      const doglist = json.message;
     
      Object.entries(doglist).forEach(function ([key, value]) {
          fetch(`https://dog.ceo/api/breed/${key}/images/random`)
          .then(response => response.json())
          .then(json => {

              const dogsImg = json.message;
  
              const info_of_Doggie = value.length > 0 ? value[0] : ''; 

              // console.log(dogsImg)

              let container = `
              <div class="cards">
                  <div class="card">
                      <div class="card-logo">
                          <img class="dog-image" src="${dogsImg}">
                      </div>
                      <div class="card-text">${key}  ${info_of_Doggie}</div>
                  </div>
              </div>
              `;

              $(container).appendTo($("#principal_container"));
          })
          .catch(err => console.log('Error al obtener la imagen', err));
      });
  })
  .catch(err => console.log('Solicitud fallida', err));
});
