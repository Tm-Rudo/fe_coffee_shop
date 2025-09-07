const items = [
  { img: "./img/espresso-coffee-cup.png", name: "Espresso", price: "45.000đ" },
  {
    img: "./img/placeholder.png",
    name: "Cappuccino",
    price: "55.000đ",
  },
  { img: "./img/latte-with-foam.png", name: "Latte", price: "60.000đ" },
  {
    img: "./img/placeholder.png",
    name: "Americano",
    price: "50.000đ",
  },
  { img: "./img/placeholder.png", name: "Mocha", price: "65.000đ" },
  {
    img: "./img/macchiato-coffee.png",
    name: "Macchiato",
    price: "58.000đ",
  },
];

const coffeeListItems = document.getElementById("coffee-items");

//render
items.forEach((item) => {
  //tạo div bao các thành phần
  const coffeeItem = document.createElement("div");
  coffeeItem.classList.add("col-sm-6", "col-12", "col-md-4", "card-item");
  //thêm nd
  coffeeItem.innerHTML = `
  <div class="img-wrap">
     <img src= ${item.img} class="img-fluid img-item" alt="" />
     </div>
     <div class="info p-4  ">      
        <div class="name-price d-flex justify-content-between">
          <div class="name">${item.name}</div>
          <div class="price">${item.price}</div>
        </div>
        <div class="rating text-start mt-2"><span>&#11088;</span><span>&#11088;</span><span>&#11088;</span><span>&#11088;</span><span>&#11088;</span></div>
     </div>
       
  `;
  //thêm vào cuối
  coffeeListItems?.append(coffeeItem);
});
