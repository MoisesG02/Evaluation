
$(document).ready(
function api()  {

    

    fetch('https://dog.ceo/api/breeds/list/all')
    // Exito
    .then(response => response.json())  
    .then(json => {
        const doglist = json.message;
        
        Object.keys(doglist).forEach(function(key) {

            fetch(`https://dog.ceo/api/breed/${key}/images/random`)
            // Exito
            .then(response => response.json())
            .then(json => console.log(json.message))

            console.log('Key : ' + key + ', Value : ' + doglist[key])
            if(doglist[key] == ""){

                let container = `<div class="container"> ${key} </div>`

                $(container).appendTo( $("#principal_container"));;

            }
            else{

                for(let i =0;i<doglist[key].length;i++){

                 let container = `<div class="container"> ${doglist[key][i]} </div>`
 
                 $(container).appendTo( $("#principal_container"));;
 
 
                }
               
            }

          })

       
    }
        
        )    
    .catch(err => console.log('Solicitud fallida', err)); 


}
    
);

 