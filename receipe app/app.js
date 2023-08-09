const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recepieContainer = document.querySelector('.receipe-container');

//function to get recepies
const fetchRecipes =  async (qurey) => {
    recepieContainer.innerHTML = "<h2>Fetching Recepies...</h2>"
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${qurey}`);
    const response = await data.json();

    recepieContainer.innerHTML = "";
    response.meals.forEach(meal => {
        const recepieDiv = document.createElement('div'); //create div in html
        recepieDiv.classList.add('.recepie'); //class name for div
        recepieDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="img-container">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `
        recepieContainer.appendChild(recepieDiv);
    })
    // console.log(response.meals[0]);
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
})