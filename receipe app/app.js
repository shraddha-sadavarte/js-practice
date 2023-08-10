const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recepieContainer = document.querySelector('.receipe-container');
const recepieDetailsContainer = document.querySelector('.recepie-details-container');
const closeBtn = document.querySelector('.recepie-close-btn')

//function to get recepies
const fetchRecipes =  async (qurey) => {
    recepieContainer.innerHTML = "<h2>Fetching Recepies...</h2>";
    try{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${qurey}`);
    const response = await data.json();

    recepieContainer.innerHTML = "";
    response.meals.forEach(meal => {
        const recepieDiv = document.createElement('div'); //create div in html

        //adding css to recepie div
        recepieDiv.style.backgroundColor = 'white';
        recepieDiv.style.display = 'flex';
        recepieDiv.style.flexDirection = 'column';
        recepieDiv.style.color = 'black';
        recepieDiv.style.borderRadius = '10px';
        recepieDiv.style.boxShadow = '0 5px 10px rgb(73, 72, 72)';
        recepieDiv.style.maxWidth = '250px';

        recepieDiv.classList.add('.recepie'); //class name for div
        recepieDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="img-container">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea} Dish</p>
        <p>Belongs to ${meal.strCategory} category</p>
        `
        const button = document.createElement('button');

        // setting css to button
        button.style.backgroundColor = '#f44336';
        button.style.padding = '10px';
        button.style.margin = '18px auto';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.color = 'white';

        button.textContent = "View Recepie";
        recepieDiv.appendChild(button);

        //adding event listener to recepie button
        button.addEventListener('click', () => {
            openRecepiePopup(meal);
        })

        recepieContainer.appendChild(recepieDiv);
    })
   }catch(error){
       recepieContainer.innerHTML = `<h2>Error in fetching recepies...</h2>`
   }
    // console.log(response.meals[0]);
}

//function to fetch ingrediants and measuements
const fetchIngrediants = (meal) => {
    let ingredientsList = "";
    for(let i=1; i<=20; i++){
        const ingredient = meal[`strIngredient${i}`]
        if(ingredient){
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`
        }
        else{
            break;
        }
    }
    return ingredientsList;
}

const openRecepiePopup = (meal) => {
    recepieDetailsContainer.innerHTML = `
    <h2 class="receipeName">${meal.strMeal}</h2>
    <h3>Ingrediants: </h3>
    <ul class="ingrediantList">${fetchIngrediants(meal)}</ul><br /><br/>
    <div class="receipeInstructions">
       <h3>Instructions:</h3>
       <p>${meal.strInstructions}</p>
    </div>
    `

    recepieDetailsContainer.parentElement.style.display = 'block';
}

closeBtn.addEventListener('click', ()=> {
    recepieDetailsContainer.parentElement.style.display = "none";
})

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if(!searchInput){
        recepieContainer.innerHTML = `<h2>Type the meal in search box...</h2>`;
        return;
    }
    fetchRecipes(searchInput);
})