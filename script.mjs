import foodData from './food.json' assert {type : 'json'};

//list all the food items
function listFoodItems(foodData) {
    return foodData;
}
console.log("List of all the Food items: \n",listFoodItems(foodData));

//list all the food items with category vegetables
function listVegetableItems(foodData) {
    return foodData.filter(item=>item.category=="Vegetable");
}
console.log("List of all the food items with category Vegetables: \n",listVegetableItems(foodData));

//list all the food items with category fruit
function listFruitsItems(foodData) {
    return foodData.filter(item=>item.category=="Fruit");
}
console.log("List of all the food items with category Fruit: \n",listFruitsItems(foodData));

//list all the food items with category protien
function listProtienItems(foodData) {
    return foodData.filter(item=>item.category=="Protein");
}
console.log("List of all the food items with category Protein: \n",listProtienItems(foodData));

//list all the food items with category nuts
function listNutsItems(foodData) {
    return foodData.filter(item=>item.category=="Nuts");
}
console.log("List of all the food items with category Nuts: \n",listNutsItems(foodData));

//list all the food items with category grains
function listGrainItems(foodData) {
    return foodData.filter(item=>item.category=="Grain");
}
console.log("List of all the food items with category Grain: \n",listGrainItems(foodData));


//list all the food items with category dairy
function listDairyItems(foodData) {
    return foodData.filter(item=>item.category=="Dairy");
}
console.log("List of all the food items with category Dairy: \n",listDairyItems(foodData));

//list all the food items with calorie above 100
function calorieAbove100Items(foodData){
    return foodData.filter(item=>item.calorie>100);
}
console.log("List of all the food items with calorie above 100 :\n", calorieAbove100Items(foodData));

//list all the food items with calorie below 100
function calorieBelow100Items(foodData){
    return foodData.filter(item=>item.calorie<100);
}
console.log("List of all the food items with calorie below 100 :\n", calorieBelow100Items(foodData));

//list all the food items with highest protien content to lowest
function protiensHighToLow(foodData){
    return foodData.sort((a , b)=>{
        return b.protiens - a.protiens;
    });
}
console.log("List of all the food items with highest protien content to lowest: \n",protiensHighToLow(foodData));


//list all the food items with lowest cab content to highest
function cabLowToHigh(foodData){
    return foodData.sort((a , b)=>{
        return a.cab - b.cab;
    });
}
console.log("List of all the food items with lowest cab content to highest: \n",cabLowToHigh(foodData));