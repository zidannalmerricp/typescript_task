/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const foodPrice: number = 18000;
const foodQuantity: number = 3;

const drinkPrice: number = 5000;
const drinkQuantity: number = 2;

const discount: number = 10000;

const totalFoodPrice: number = foodPrice * foodQuantity;
const totalDrinkPrice: number = drinkPrice * drinkQuantity;

const grandTotal: number = totalFoodPrice + totalDrinkPrice;

const finalPayment: number = grandTotal - discount;

console.log("Total food price:", totalFoodPrice);
console.log("Total drink price:", totalDrinkPrice);
console.log("Grand total:", grandTotal);
console.log("Final payment:", finalPayment);