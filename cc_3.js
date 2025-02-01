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