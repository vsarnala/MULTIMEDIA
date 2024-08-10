function searchRecipes() {
    const ingredient = document.getElementById('ingredient').value.toLowerCase();
    displayRecipesByIngredient(ingredient);
}

function displayRecipesByIngredient(ingredient) {
    const recipesSection = document.getElementById('recipes');

    const recipes = getRecipes();
    const filteredRecipes = recipes.filter(recipe => recipe.ingredients.includes(ingredient));

    // Clear previous search results
    recipesSection.innerHTML = '';

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            
            recipeCard.innerHTML = `
                <h3>${recipe.name}</h3>
                <img src="${recipe.image}" alt="${recipe.name}">
                <p>${recipe.instructions}</p>
            `;
            
            recipesSection.appendChild(recipeCard);
        });
    } else {
        recipesSection.innerHTML = '<p>No recipes found for the specified ingredient.</p>';
    }
}

function displayRecipe(recipeName) {
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.name === recipeName);
    
    if (recipe) {
        const recipesSection = document.getElementById('recipes');
        recipesSection.innerHTML = `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <img src="${recipe.image}" alt="${recipe.name}">
                <p>${recipe.instructions}</p>
            </div>
        `;
    }
}

function getRecipes() {
    return [
        {
            name: "Spaghetti Bolognese",
            image: "https://images.unsplash.com/photo-1582288522676-471f623a5d34?fit=crop&w=250&q=80",
            instructions: "Cook pasta. Brown meat. Add sauce. Combine and serve.",
            ingredients: ["spaghetti", "beef", "tomato"]
        },
        {
            name: "Grilled Cheese Sandwich",
            image: "https://images.unsplash.com/photo-1553179218-206a3f2b8f05?fit=crop&w=250&q=80",
            instructions: "Butter bread. Add cheese. Grill until golden brown.",
            ingredients: ["bread", "cheese", "butter"]
        },
        {
            name: "Chicken Salad",
            image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?fit=crop&w=250&q=80",
            instructions: "Chop vegetables. Cook chicken. Toss with dressing.",
            ingredients: ["chicken", "lettuce", "tomato", "cucumber"]
        },
        {
            name: "Pancakes",
            image: "https://images.unsplash.com/photo-1550317138-10000687a72b?fit=crop&w=250&q=80",
            instructions: "Mix ingredients. Pour batter onto griddle. Flip when bubbles form.",
            ingredients: ["flour", "milk", "egg", "butter"]
        },
        {
            name: "Beef Tacos",
            image: "https://images.unsplash.com/photo-1565299543923-37dd37848a22?fit=crop&w=250&q=80",
            instructions: "Cook beef. Fill tortillas. Add toppings.",
            ingredients: ["beef", "tortilla", "lettuce", "cheese"]
        },
        {
            name: "Caesar Salad",
            image: "https://images.unsplash.com/photo-1596911602864-e0be30a20992?fit=crop&w=250&q=80",
            instructions: "Mix lettuce with dressing. Add croutons and parmesan.",
            ingredients: ["lettuce", "croutons", "parmesan", "dressing"]
        }
    ];
}
