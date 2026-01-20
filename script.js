// Basic Array/Flat Array
const myArray = ["Julie", "Fredrik", "Stefan", 10, 20, 30, true, false];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[4]);

const shoppingList = ["Melk", "Egg", "Mel", "Bacon", "Vaniljesukker", "Sukker", "Blåbærsyltetøy"];
console.log(shoppingList);
console.log(shoppingList[0], shoppingList[3], shoppingList[6]);

// Array with objects
const fruitBowl = [
    {name: "Eple", type: "Frukt"}, 
    {name: "Banan", type: "Frukt"}
];
console.log(fruitBowl[0].name)

const fruitBowlTwo = {
    name: ["Eple", "Banan"],
    type: ["Frukt", "Frukt"]
}
console.log(fruitBowlTwo.name[0])

// Object of Arrays
const saladBar = {
    vegetable: ["Salat", "Agurk", "Mais"], 
    protin: ["Kylling", "Tofu"], 
    sauce: ["Hvitløkssaus", "Balsamico", "Salsa"]
};
console.log(saladBar);
console.log(saladBar.vegetable[2]);

// LA STÅ
const displayHere = document.querySelector("#displayHere");
console.log(displayHere);

displayHere.textContent = fruitBowl[1].name + " " + fruitBowl[1].type;
