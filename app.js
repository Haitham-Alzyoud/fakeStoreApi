class Products {
const (title, price ,image){
    this.title = title;
    this.price = price;
    this.image = image;
}
}

fetch('https://fakestoreapi.com/products?limit=20')
    .then((response) => response.json())
    .then((productData) => productData

    .map((Element)=>{
        let newProducts = new Products(Element.title , Element.price , Element.image);

        let cards = document.createElement('div');
        cards.innerHTML = `
        <div>
            <img src="${Element.image}"/>
            <h2>${Element.title}</h2>
            <p>${Element.price}</p>
        </div>
    
        `;
        let main =document.getElementById("main");
        main.appendChild(cards);
        console.log("cards");

    })
    )

    // console.log(product);