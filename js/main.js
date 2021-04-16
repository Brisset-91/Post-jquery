
let postsData = {
    post1:{ /* entrada de post*/
        postId:1,/*id del post*/
        userId:2, /*id del usuario que publicó el post*/
        title:"Post 1", /*título del post*/
        content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
        creationDate:"14/04/2021", /*fecha de creación del post*/
        creationTime:"19:00", /*hora de creación del post*/
        coverUrl:"https://picsum.photos/id/237/768/384",  /* portada del post*/
    }
} 

///cada que genere un replay se debe guardadr ahi en la replies y en cada post
let replies = {
    reply1:{ /*entrada de comentario*/
        userId:1, /*id del usuario que comenta*/
        post:1, /*id del post en el que se comenta*/
        content:"Excelente post!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    }
}

////
let users = {
    user1:{ /*Entrada de usuario */
        userId:1, /*id del usuario */
        name:"Israel Salinas Martínez", /*Nombre del usuario */
        avatar:"https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1623888000&v=beta&t=tNSS_vfQm_GWXfBquADFDLyNnozk3UK_hsS10IvQMlQ" /*Avatar del usuario */
    },
    user2:{
        userId:2,
        name:"Gabriela Padilla",
        avatar:"https://media-exp1.licdn.com/dms/image/C5603AQFxZihNUVo-ng/profile-displayphoto-shrink_200_200/0/1517501855544?e=1623888000&v=beta&t=SaHOe6Q1nQkH-ZQYGZy8P1OimoTNq-ZAIwZFE0uleO8"
    }
}

/// Objeto que guardará los post nuevos
///Funcion Obtener datos del post ---método POST
let newPosts = {}

$("input, textarea").change( event =>{
    console.log(event.target)

    let property = event.target.name
    let valueProperty = event.target.value

    newPosts[property] = valueProperty //es newposts en property se le asigna el valor de value property
    console.log(newPosts)
})


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

$("#save-posts").click(postsData)



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



*/