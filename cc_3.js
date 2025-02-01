// task 1: : Product Price Management Scenario
let prices = [190,777,678,908,607]; //setting my orginal prices 
prices.push(808); //adding a price 
prices.shift(); //removing the first price 
console.log("Product prices:", prices); //logging prices

// task 2: Modifying Customer Orders Scenario: 

let orders = [2,4,6,8,10]; // order numbers
orders[2] = orders[2]+5; // adding 5 to the third order

let total = orders.reduce((sum, orders)=>sum + orders, 0);
//calc the total of the orders 

console.log("My orders:", orders);
console.log("The total of my orders:", total);

// task 3 : Employee Performance Tracking Scenario

let employee = {
    name: "Spongebob",
    role: "fry cook",
    performanceScore: 89,
    isActive: true,
};
//I declared an object with properties 

let performanceScore = 91;
//changed the performance score 

let promotionEligible = performanceScore >= 90 ? "Promotion Eligible" : "Not promotion Eligible";
// added property set the condiotn of promotion is eligible 

console.log(employee);
console.log("preformance score", employee.performanceScore);
console.log(promotionEligible);

// task 4

let feedback = [
    {customerName: "Santa Clause", feedbackText: "Delivered my presents on time", rating: 9},
    {customerName: "Tooth Fairy", feedbackText: "did not leave me money", rating: 2},
    {customerName: "Leprechaun", feedbackText: "escaped the trap", rating: 5},
];
// I declared an array that contains three different objects


feedback.push({customerName: "Easter Bunny", feedbackText: "gave me candy", rating: 8});
// I added a new onject to the array

console.log(feedback);

//task 5

let inventory = {itemName: "door knobs", stockcount: 1900, price: 35};
// declared an object inventory 

calculateTotalValue = inventory.stockcount * inventory.price
// added a method that returns the total value

console.log(inventory)
console.log("Total value of Inventory:" , calculateTotalValue)
