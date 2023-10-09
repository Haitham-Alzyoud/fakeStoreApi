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


})