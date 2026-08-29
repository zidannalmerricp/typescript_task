/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  productWeight: number;
  averageCustomerRating: number;
  isDiscounted: boolean;
};

const product1: Product = {
  productCode: "PRD001",
  productName: "Mouse",
  sellingPrice: 150000,
  stockQuantity: 25,
  productWeight: 0.2,
  averageCustomerRating: 4.5,
  isDiscounted: true,
};

const product2: Product = {
  productCode: "PRD002",
  productName: "Keyboard",
  sellingPrice: 750000,
  stockQuantity: 15,
  productWeight: 0.8,
  averageCustomerRating: 4.8,
  isDiscounted: false,
};

const product3: Product = {
  productCode: "PRD003",
  productName: "USB",
  sellingPrice: 120000,
  stockQuantity: 50,
  productWeight: 0.05,
  averageCustomerRating: 4.3,
  isDiscounted: true,
};

console.log("Product 1 :", product1);
console.log("Product 2 :", product2);
console.log("Product 3 :", product3);