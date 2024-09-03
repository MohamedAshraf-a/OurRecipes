let data = new XMLHttpRequest();
let row = document.querySelector(".row");
let selectedFood = document.querySelector("select");
let searchInput = document.querySelector(".search");

searchInput.addEventListener("input", function () {
    
  getData(this.value);
});

selectedFood.addEventListener("change", function () {
  getData(this.value);
});

getData(`carrot`);

function getData(d) {
  data.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${d}`);
  data.send();

  data.addEventListener("readystatechange", function (e) {
    if (this.readyState == 4) {
      let mydata = JSON.parse(data.responseText);
      ShowData(mydata);
    }
  });
}

function ShowData(elements) {
  let data = elements.recipes;
  cartona = ``;
  for (let i = 0; i < data.length; i++) {
    cartona += `
    <div class="col-md-4">
                <img class="w-100" src="${data[i].image_url}" alt="">
                <p><b class="text-warning">Title: </b>${data[i].title}</p>
                <p><b class="text-warning">recipe_id: </b>${data[i].recipe_id}</p>
                <p><b class="text-warning">publisher: </b>${data[i].publisher}</p>
                <p><b class="text-warning">social_rank: </b>${data[i].social_rank}</p>

            </div>


   `;
  }

  row.innerHTML = cartona;
}
