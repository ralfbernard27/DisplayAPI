const getApi = async () => { // used const, and Async/Await
    const res = await fetch("https://fakestoreapi.com/products?limit=15"); 
    const data = await res.json();
    return data;
}

const displayData = async () => {
    const prodContainer = document.querySelector(".products");
    const products = await getApi();

    products.forEach(item => {
        //create div withclas .item
        //create img = item.image
        //create h2 = item.title
        //create p = item.price
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("items");

        let itemImage = document.createElement("img"); // used let
        let itemTitle = document.createElement("h2");
        let itemPrice = document.createElement("p");

        itemImage.src = item.image;
        itemTitle.textContent = item.title;
        itemPrice.textContent = `$${item.price}`; // template literals

        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemTitle);
        itemDiv.appendChild(itemPrice);
        prodContainer.appendChild(itemDiv);


    }); 
}

displayData();
