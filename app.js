class Products {
const (title, price ,image){
    this.title = title;
    this.price = price;
    this.image = image;
}
}

// fetch('https://fakestoreapi.com/products?limit=20')
//     .then((response) => response.json())
//     .then((productData) => productData

//     .map((Element)=>{
//         let newProducts = new Products(Element.title , Element.price , Element.image);

//         let cards = document.createElement('div');
//         cards.innerHTML = `
//         <div>
//             <img src="${Element.image}"/>
//             <h2>${Element.title}</h2>
//             <p>${Element.price}</p>
//         </div>
    
//         `;
//         let main =document.getElementById("main");
//         main.appendChild(cards);
//         console.log("cards");

//     })
//     )
document.addEventListener("DOMContentLoaded" , () =>{
    let form = document.getElementById("form");
    let change = document.getElementById("changes");
    form.addEventListener('submit' , function (e) {
        e.preventDefault();
        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;
        let newPost = {title,content};
        fetch('http://localhost:3000/post',
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        })
        .then(response => response.JSON() )
        .then(sendData => {
            let h = `
            <div>
            <h2>${sendData.title}</h2>
            <p>${sendData.content}</p>
            <button data-id="${sendData.id}" class = "delete">Delete</button>
            <button data-id="${sendData.id}" class = "update">Edit</button>
           </div>
            `
            change.insertAdjacentHTML("beforeend",h);
            form.reset();

        } )
        
    })
    function retrive () {
        fetch ('http://localhost:3000/post')
        
        .then(response => response.json())
        .then(sendData => { 
            
            change.innerHTML="";
            sendData.forEach(k => {
            
            let h = `
            <div>
            <h2>${k.title}</h2>
            <p>${k.content}</p>
            <button data-id="${k.id}" class = "delete">Delete</button>
            <button data-id="${k.id}" class = "update">Edit</button>
           </div>
            `
            // change.appendChild(h);
            change.insertAdjacentHTML("beforeend",h)

        })
           
        })
    }
    retrive();
    change.addEventListener("click" , (e)=>{
        if(e.target.classList.contains("delete")){
            const rem = e.target.getAttribute("data-id")
             fetch (`http://localhost:3000/post/${rem}`,{
            method: "DELETE",
             })
            .then(() => retrive())
             }
     
});

change.addEventListener("click" , (e)=>{
    let p = prompt("Edit What ever you want")
    let pr = prompt("Edit ")

    if(e.target.classList.contains("update")){
        const remo = e.target.getAttribute("data-id")
         fetch (`http://localhost:3000/post/${remo}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(
            {title : p,
            content:pr}
            ),
         })
        .then(() => retrive())
         }
 
});

})

