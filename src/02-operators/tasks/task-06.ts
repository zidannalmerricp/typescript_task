/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hourlyRate: number = 8000;
const hours: number = 7;
const minutes: number = 35;

const totalMinutes: number = hours * 60 + minutes;

const remainingMinutes: number = totalMinutes % 60;

let billedHours: number = Math.floor(totalMinutes / 60);

if (remainingMinutes > 0) {
  billedHours++;
}

const totalPayment: number = billedHours * hourlyRate;

const discount: number =
  billedHours > 5 ? totalPayment * 0.15 : 0;

const finalPayment: number = totalPayment - discount;

console.log("Total Minutes:", totalMinutes);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Billed Hours:", billedHours);
console.log("Payment Before Discount:", totalPayment);
console.log("Discount:", discount);
console.log("Final Payment:", finalPayment);