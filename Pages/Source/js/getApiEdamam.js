/* edamam:
objetos < valores com array < objetos com valores

q valor tirar?
parsed < food < nutrients < enerc_kcal, pronct, fat, chocdf, fibtg */

let optionsEdamam = {
  method: 'GET',
headers: {
  'Content-Type': 'application/json'
},
}

let app_idEdamam = '48965fce', appKeyEdamam = '3a477e2049058176f4e111ce963d5c59';
let apiResponseEdamam;

//-------------------------------------------------------------------------------------------------------------------------------------------------------

let optionsSpoon = {
  method: 'GET',
headers: {
  'Content-Type': 'application/json'
},
};

//27e8b9efe104435b8411d1a872d6af55
//b099182b70324507a20c67abc941ad06
let apiKeySpoon = '27e8b9efe104435b8411d1a872d6af55';
let apiResponseSpoon;
let urlSpoon = `https://api.spoonacular.com/recipes/`;                                                                                                                                

//variaveis para a api appid e appkey sao sempre percissas, a apiResponse e onde vai ficar guardada sempre a informacao inicial q a api da
let ingrEnercKcal, ingrProcnt, ingrFat, ingrChocdf, ingrFibtg;

function resultIngrediente(ingr){

	let	urlEdamam = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_idEdamam}&app_key=${appKeyEdamam}`

	urlEdamam = urlEdamam + `&ingr=${ingr}`

	let ingrName = ingr
	//adiciona o ingr pedido da funcao ao url

	function resultDataManager(){
  		//funçao para nanipular os dados para dar todos os fatores de ingredientes
 		for(let elem of apiResponseEdamam.parsed){
    		ingrEnercKcal = elem.food.nutrients.ENERC_KCAL
    		ingrProcnt = elem.food.nutrients.PROCNT
    		ingrFat = elem.food.nutrients.FAT
    		ingrChocdf = elem.food.nutrients.CHOCDF
    		ingrFibtg = elem.food.nutrients.FIBTG

    		document.getElementById('ingrtable').innerHTML += `<tr> <td>${ingrName}</td> <td>${ingrEnercKcal}</td> <td>${ingrProcnt}</td> <td>${ingrFat}</td> <td>${ingrChocdf}</td> <td>${ingrFibtg}</td> </tr>`
  		}
	}

	fetch(urlEdamam, optionsEdamam)
  	.then(response => response.json())
  	.then(response => {
   	apiResponseEdamam = response,
    resultDataManager()
  	})
  	.catch(err => console.error(err));
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------  

function pratoLoadfunction(){

	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');

	urlSpoon = urlSpoon + `${id}/information?apiKey=${apiKeySpoon}` 
  
	  function dataManagerTittleImgSummary (){
  
		  // faz o titulo, imagem, e sumario
			  document.getElementById('recepiTittle').innerHTML = apiResponseSpoon.title;
			  document.getElementById('recepiImage').src = apiResponseSpoon.image;
			  document.getElementById('recepiSummary').innerHTML = apiResponseSpoon.summary;
	  }
  
	  function dataMangerUl(){
  
		  //Faz o ul ser interativo
  
			  if(apiResponseSpoon.vegetarian == true){
				  document.getElementById('vegetarianLi').innerHTML = `Vegetarian: Yes`
			  }
			  else{
				  document.getElementById('vegetarianLi').innerHTML = `Vegetarian: No`
			  }
  
			  if(apiResponseSpoon.vegan == true){
				  document.getElementById('veganLi').innerHTML = `Vegan: Yes`
			  }
			  else{
				  document.getElementById('veganLi').innerHTML = `Vegan: No`
			  }
  
			  if(apiResponseSpoon.glutenFree == true){
				  document.getElementById('glutenFreeLi').innerHTML = `GlutenFree: Yes`
			  }
			  else{
				  document.getElementById('glutenFreeLi').innerHTML = `GlutenFree: No`
			  }
  
			  if(apiResponseSpoon.veryHealthy == true){
				  document.getElementById('veryHealthyLi').innerHTML = `Very Healthy: Yes`
			  }
			  else{
				  document.getElementById('veryHealthyLi').innerHTML = `Very Healthy: No`
			  }
  
			  if(apiResponseSpoon.veryPopular == true){
				  document.getElementById('veryPopularLi').innerHTML = `Very Popular: Yes`
			  }
			  else{
				  document.getElementById('veryPopularLi').innerHTML = `Very Popular: No`
			  }
  
			  if(apiResponseSpoon.sustainable == true){
				  document.getElementById('sustainableLi').innerHTML = `Sustainable: Yes`
			  }
			  else{
				  document.getElementById('sustainableLi').innerHTML = `Sustainable: No`
			  }
  
			  if(apiResponseSpoon.lowFodmap == true){
				  document.getElementById('lowFodmapLi').innerHTML = `LowFodmap: Yes`
			  }
			  else{
				  document.getElementById('lowFodmapLi').innerHTML = `LowFodmap: No`
			  }
  
			  if(apiResponseSpoon.cuisines == ""){
				  document.getElementById('cuisinesLi').innerHTML = `Cuisines: Unknown`
			  }
			  else{
				  document.getElementById('cuisinesLi').innerHTML = `Cuisines: ${apiResponseSpoon.cuisines}`
			  } 
			  document.getElementById('cookingMinutesLi').innerHTML = `Cooking Minutes: ${apiResponseSpoon.readyInMinutes}min`
			  document.getElementById('servingsLI').innerHTML = `Servings: ${apiResponseSpoon.servings}`
	  }
  
	  function divValores(){
  
			  document.getElementById('divValores').innerHTML = `<br> <p>${apiResponseSpoon.instructions}</p>`
  
		  document.getElementById('aNavPerparacao').addEventListener('click', () =>{
				  document.getElementById('divValores').innerHTML = `<br> <p>${apiResponseSpoon.instructions}</p>`
		  })
  
		  document.getElementById('aNavIngredientes').addEventListener('click', () =>{
			  let ingrName, ingrUnity, ingrAmount;
  
			  document.getElementById('divValores').innerHTML = `<br> <table id="ingrtable"> <tr> <th style="width: 200px;">Ingr</th> <th style="width: 150px;">Amount</th> <th style="width: 150px;">Unity</th> </tr> </table> `
  
  
				  for(let obj of apiResponseSpoon.extendedIngredients){
					  ingrName = obj.nameClean;
					  ingrAmount = obj.measures.metric.amount;
					  ingrUnity = obj.measures.metric.unitShort;
  
					  document.getElementById('ingrtable').innerHTML += `<tr> <td>${ingrName}</td> <td>${ingrAmount}</td> <td>${ingrUnity}</td> </tr>` 
				  }
  
		  })
  
		  document.getElementById('ingerdienteValoresNutricionais').addEventListener('click', () =>{
  
			let ingrName;
			  document.getElementById('divValores').innerHTML = `<br> <table id="ingrtable"> <tr> <th style="width: 200px;">Ingr</th> <th style="width: 150px;">EnercKcal</th> <th style="width: 150px;">Procnt</th> <th style="width: 150px;">Fat</th> <th style="width: 150px;">Chocdf</th> <th style="width: 150px;">Fibtg</th> </tr> </table> `
  
				  for(let obj of apiResponseSpoon.extendedIngredients){
					  ingrName = obj.nameClean;
					  resultIngrediente(ingrName);
				  }
		  })
	  }
  
	  fetch(urlSpoon, optionsSpoon)
		  .then(response => response.json())
		  .then(response => {
        apiResponseSpoon = response
			  dataManagerTittleImgSummary()
			  dataMangerUl()
			  divValores()
		  })
		  .catch(err => console.error(err));
  }