
let postsData = {
    post1: { /* entrada de post*/
        postId: 1,/*id del post*/
        userId: 2, /*id del usuario que publicó el post*/
        title: "Post 1", /*título del post*/
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
        creationDate: "14/04/2021", /*fecha de creación del post*/
        creationTime: "19:00", /*hora de creación del post*/
        coverUrl: "https://picsum.photos/id/237/768/384",  /* portada del post*/
    }
} 

///cada que genere un replay se debe guardadr ahi en la replies y en cada post
let replies = {
    reply1: { /*entrada de comentario*/
        userId: 1, /*id del usuario que comenta*/
        post: 1, /*id del post en el que se comenta*/
        content: "Excelente post!", /*contenido del comentario */
        creationDate: "14/04/2021", /*fecha de creación del comentario */
        creationTime: "19:00", /*hora de creación del comentario */
    }
}


let users = {
    user1: { /*Entrada de usuario */
        userId: 1, /*id del usuario */
        name: "Israel Salinas Martínez", /*Nombre del usuario */
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1623888000&v=beta&t=tNSS_vfQm_GWXfBquADFDLyNnozk3UK_hsS10IvQMlQ" /*Avatar del usuario */
    },
    user2: {
        userId: 2,
        name: "Gabriela Padilla",
        avatar: "https://media-exp1.licdn.com/dms/image/C5603AQFxZihNUVo-ng/profile-displayphoto-shrink_200_200/0/1517501855544?e=1623888000&v=beta&t=SaHOe6Q1nQkH-ZQYGZy8P1OimoTNq-ZAIwZFE0uleO8"
    }
}

/// Objeto que guardará los post nuevos
///Funcion Obtener datos del post ---método POST
let newPosts = {}

$("input, textarea").change(event => {
    //console.log(event.target)

    let property = event.target.name
    let valueProperty = event.target.value

    newPosts[property] = valueProperty //es newposts en property se le asigna el valor de value property
    console.log(newPosts)
})






const post = (newPosts)=> {
    
        let { imageUrl, title, mainText } = newPosts
            $('#cardpost').append(`
                <div class="row no-gutters">
                <div class="col-md-4 images">
                <img class="w-100" id="imageUrl" src="${imageUrl}">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title" id="title">${title}</h5>
                    <p class="card-text" id="mainText" >${mainText}</p>
                    <p class="card-text" id="text" ><small class="text-muted">Creado el <span class="text-dark">14/04/2021</span></small></p>
                </div>
                </div>
            </div>
                        `)
        }
    


const saveData = newPosts => {
    $.ajax({
        method: "POST",
        url: "https://mentor-list-8f155-default-rtdb.firebaseio.com/.json",
        data: newPosts,
        success : response => {
            console.log(response)
        },
        error : error => {
            console.log(error)
        }
    })
}
$("#save-posts").click(()=>{
    post(newPosts)
    //saveData(newPost)//
})
/*

///Funcion Obtener la img ---método POST

const setImgSrc = src => {
    $(".images img").fadeTo("slow", 0, () => {
        $(".images img").attr("src", src)
        setTimeout(function () {
            $(".images img").fadeTo("slow", 1)
        }, 300)
    })
}

///Funcion Obtener datos del post ---método POST
const postsData =()=>{
    let posts = {}
    $(".card-body h5,p").each(function () { ///preguntar h5,p

        let nameProperty = this.id;
        let valueProperty = this.value

        posts[nameProperty] = valueProperty
    })

    saveData (posts)
}

/////---método POST
const saveData = mentorData => {
    $.ajax({
        method: "POST",
        url: "https://mentor-list-8f155-default-rtdb.firebaseio.com/.json",
        data: JSON.stringify(mentorData),
        success : response => {
            console.log(response)
        },
        error : error => {
            console.log(error)
        }
    })
}

$("#btn-posts").click(postsData)


*/





// const printMentors = mentorsCollection => {
//     console.log(mentorsCollection)
//     $(".mentors-wrapper").empty()
//     for (mentor in mentorsCollection) {
//         let { name, email, phone } = mentorsCollection[mentor]
//         let mentorCard = `
//             <div class="col-6">
//                 <div class="card mb-3">
//                     <div class="card-body">
//                         <div class="card-text">Nombre: ${name}</div>
//                         <div class="card-text">Email: ${email}</div>
//                         <div class="card-text">Phone: ${phone}</div>
//                         <div class="d-flex justify-content-between">
//                             <div class="btn btn-secondary">Eliminar</div>
//                             <div class="btn btn-primary">Editar</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `
//         $(".mentors-wrapper").append(mentorCard)
//     }
// }



// function modal (imagen, titulo, contenido) {

//     this.imagen = imagen;
//     this.titulo = titulo; 
//     this.contenido = contenido; 
//   }

//   var modalArray = [];

//   function obtenerimagen() {  

//      = document.getElementById("imagen").value;
//      var obtenerN = $("#imagen").
//     return obtenerN;

//   }
//   function obtenertitulo() { 

//     var obtenerP = document.getElementById("titulo").value;
//     obtenerP = parseInt(obtenerP);

//     return obtenerP;
//   }

//   function obtenercontenido() { 

//     var obtenerI = document.getElementById("contenido").value;

//     return obtenerI;
//   }

//   function obtenerCategory() { 

//     var obtenerC = document.getElementById("category").value;

//     return obtenerC;
//   }

//   function obtenerDescripcion() { 

//     var obtenerD = document.getElementById("descripcion").value;

//     return obtenerD;
//   }

//   function crearBeer() {

//     var beersC = new Beers(obtenerNombre(), obtenerPrecio(), obtenerImagen(), obtenerCategory(), obtenerDescripcion(), 0);
//     BeersArray.push(beersC);
//   mostrarListado();
//   }
//   function mostrarListado(){
//     var lista='';
//     for(var i=0; i<BeersArray.length; i++){
//       lista+= 'nombre: ' + BeersArray[i].nombre +
//         ' descripcion: ' + BeersArray[i].descripcion + 
//         ' precio: ' + BeersArray[i].precio + 
//         ' imagen: ' + BeersArray[i].imagen +
//         ' categoria: ' + BeersArray[i].categoria + "\n";
//     }
//     console.log(lista)
//   }
