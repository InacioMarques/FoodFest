// function DataContentFetch() {
let options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

let apiContentResponse;
let url = `https://api.spoonacular.com/recipes/random?apiKey=b099182b70324507a20c67abc941ad06&number=20`;

function cards() {
  let cardsContainer = document.getElementById('cardsContainer');
  cardsContainer.innerHTML = ' ';


  function dynamicCard(){
    let count = 0
    let api = apiContentResponse.recipes

    api.forEach((elem) => {
      let cardContent = `
        <div class="col-sm-3" id="columns">
          <div class="card text-white bg-secondary mb-3" style="width: 18rem" id="card">
            <img class="img ${elem.id}" src="${elem.image}"card-img-top" alt="..." id="cardImg${count}">
            <div class="card-body ${elem.id}">
              <div class="card-title ${elem.id}" id="cardH5_${count}">${elem.title}</div>
                <p class="card-text ${elem.id}" id="cardP_${count}">${elem.summary.slice( 0, 40)}...</p>
              </div>
            </div>
          </div>
        </div>`

        cardsContainer.innerHTML += cardContent;

        let img = document.getElementById(`cardImg${count}`).src

        count++;

        if(img == "Undefined" || img == "undefined"){
          cards()
        }



        if(count == api.length){
          let children = cardsContainer.children

          for(let i = 0; i < children.length; i++){
            if(null == children[i].getAttribute('class')){
              children[i].remove()
            }
          }

          let cards = document.getElementsByClassName('col-sm-3');
          
          for(let i = 0; i < cards.length; i++){
            let card = cards[i];

            card.addEventListener('click', (e) => {
              let element = e.target.classList;              ;
              let id = element[1];
              
              window.location.href = `${location.origin}/Pages/Prato.html?id=${id}`
            });
          }
        }
    });
  }

  fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    apiContentResponse = response,
    dynamicCard();
  })
  .catch((err) => console.error(err));
}

function form(e) {
  e.preventDefault();
  url = `https://api.spoonacular.com/recipes/random?apiKey=b099182b70324507a20c67abc941ad06&number=20`
  let elements = e.target;
  let length = e.target.length;
  url += '&include-tags='
  
  for(let i = 0; i < length - 1; i++){
    if(elements[i].checked == true){
      url += `${elements[i].id},`
    }
    if(i == length - 2){
      cards()
    }
  }
}