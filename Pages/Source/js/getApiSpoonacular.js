/* spoon:
objeto < array chamada recipes < objeto com valores < array de objetos

q valores tirar?

vegetarian,
vegan,
glutenFree,
veryHealthy,
cheap,
veryPopular,
sustainable,
cuisines,
diets,


lowFodmap,
cookingMinutes,
creditsText,
title,
image,
summary,
instructions,
analyzedInstructions,
*/

let options = {
    method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
};

//27e8b9efe104435b8411d1a872d6af55
//b099182b70324507a20c67abc941ad06
let apiKey = '27e8b9efe104435b8411d1a872d6af55';
let url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`, apiResponse;
let url2 = `https://api.spoonacular.com/recipes/`;

//variaveis para a apiKey sao sempre percissas, a apiResponse e onde vai ficar guardada sempre a informacao inicial q a api da

function carrocelImg(){//colocar number
	
	url = url + `&number=5`
	//adiciona o numero pedido da funcao ao url

	function carrocelImgDataManager(){
		//funçao para nanipular os dados para dar todos os fatores das receitas
		let count = 1;

		apiResponse.recipes.forEach(elem => {
			document.getElementById(`carouselImg${count}`).src = elem.image;
			document.getElementById(`carouselImg${count}`).alt = `${elem.id}`;
			document.getElementById(`carouselH5_${count}`).innerHTML = elem.title;
			document.getElementById(`carouselP_${count}`).innerHTML = `${elem.summary.slice(0, 85)}...`;

			let img = document.getElementById(`carouselImg${count}`).src

        	if(img == "Undefined" || img == "undefined"){
          		carrocelImg()
        	}

			count++
		})

		for(let i = 1; i < 6; i++){
			document.getElementById(`carouselA${i}`).addEventListener('click', (e) =>{
				let id = e.target.alt;
              
              window.location.href = `${location.origin}/Pages/Prato.html?id=${id}`
			})
		}

	}

	fetch(url, options)
		.then(response => response.json())
		.then(response => {
			apiResponse = response,
			carrocelImgDataManager()
		})
		.catch(err => console.error(err));

}