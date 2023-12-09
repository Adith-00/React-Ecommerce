const items = [
  { id: 1, category: "Shirt", type: "Men", itemName: "Check Shirt", itemPrice: "$123.00", size: ["M", "S", "XL", "XXL", "L"], colors: ["Black", "Grey", "Blue", "White"] },
  { id: 2, category: "Printed T-Shirt", type: "Men", itemName: "White Print T-Shirt", itemPrice: "$220.00", size: ["M", "S", "XL", "XXL", "L", "3XL", "4XL", "XS"], colors: ["Red", "Yellow", "Green", "Purple"] },
  { id: 3, category: "Plain T-Shirt", type: "Men", itemName: "Brown T-Shirt", itemPrice: "$157.00", size: ["L", "M", "S", "XL", "XXL"], colors: ["Brown", "Beige", "Olive", "Cream"] },
  { id: 4, category: "Polo T-Shirt", type: "Men", itemName: "Green Polo T-Shirt", itemPrice: "$170.23", size: ["S", "M", "L", "XL"], colors: ["Green", "Yellow", "Blue", "White"] },
  { id: 5, category: "Hoodies & Sweatshirt", type: "Men", itemName: "Green Hoodie", itemPrice: "$300", size: ["S", "M", "L", "XL", "XXL"], colors: ["Green", "Grey", "Black", "Blue"] },
  { id: 6, category: "Jeans", type: "Men", itemName: "Blue Denim", itemPrice: "$230", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Black", "Grey", "White"] },
  { id: 7, category: "Activewear", type: "Men", itemName: "Black Active", itemPrice: "$240.50", size: ["S", "M", "L", "XL"], colors: ["Black", "Grey", "Blue", "Red"] },
  { id: 8, category: "Boxers", type: "Men", itemName: "Boxer", itemPrice: "$80.20", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Yellow", "Green", "Blue"] },
  { id: 9, category: "Hoodies & Sweatshirt", type: "Women", itemName: "Orange Hoodie", itemPrice: "$320.05", size: ["S", "M", "L", "XL", "XXL"], colors: ["Orange", "Pink", "Purple", "Yellow"] },
  { id: 10, category: "Coats & Parkas", type: "Women", itemName: "Grey Coat with Green Parkas", itemPrice: "$310", size: ["S", "M", "L", "XL", "XXL"], colors: ["Grey", "Green", "Black", "Blue"] },
  { id: 11, category: "Tees & T-Shirt", type: "Women", itemName: "Blue Flowerprint Crop", itemPrice: "$256", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Pink", "Yellow", "White"] },
  { id: 12, category: "Boxers", type: "Women", itemName: "White T-Shirt with Boxer", itemPrice: "$310", size: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Grey", "Blue", "Red"] },
  { id: 13, category: "Shorts", type: "Men", itemName: "Summer Shorts", itemPrice: "$90.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Green", "Black", "White"] },
  { id: 14, category: "Sweaters", type: "Men", itemName: "Cozy Sweater", itemPrice: "$210.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Blue", "Grey"] },
  { id: 15, category: "Jackets", type: "Men", itemName: "Leather Jacket", itemPrice: "$350.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Brown", "Red", "Grey"] },
  { id: 16, category: "Dresses", type: "Women", itemName: "Sunflower Dress", itemPrice: "$180.50", size: ["S", "M", "L", "XL", "XXL"], colors: ["Yellow", "Green", "Blue", "White"] },
  { id: 17, category: "Skirts", type: "Women", itemName: "A-Line Skirt", itemPrice: "$120.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Grey", "Pink", "Blue"] },
  { id: 18, category: "Tees & T-Shirt", type: "Women", itemName: "Pink Graphic Tee", itemPrice: "$95.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Pink", "Purple", "White", "Grey"] },
  { id: 19, category: "Jeans", type: "Women", itemName: "Skinny Jeans", itemPrice: "$180.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Black", "Grey", "White"] },
  { id: 20, category: "Hoodies & Sweatshirt", type: "Men", itemName: "Gray Hoodie", itemPrice: "$280.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Grey", "Black", "Blue", "White"] },
  { id: 21, category: "Activewear", type: "Men", itemName: "Running Shorts", itemPrice: "$50.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Black", "Blue"] },
  { id: 22, category: "Coats & Parkas", type: "Women", itemName: "Winter Parka", itemPrice: "$280.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Grey", "Blue", "Black"] },
  { id: 23, category: "Tees & T-Shirt", type: "Women", itemName: "Striped T-Shirt", itemPrice: "$120.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Red", "White", "Black"] },
  { id: 24, category: "Boxers", type: "Men", itemName: "Striped Boxer", itemPrice: "$25.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Blue", "White"] },
  { id: 25, category: "Sweaters", type: "Women", itemName: "Cable Knit Sweater", itemPrice: "$220.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Blue", "Grey"] },
  { id: 26, category: "Jeans", type: "Men", itemName: "Black Denim", itemPrice: "$200.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Grey", "Blue", "White"] },
  { id: 27, category: "Hoodies & Sweatshirt", type: "Men", itemName: "Red Hoodie", itemPrice: "$270.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Blue", "Black"] },
  { id: 28, category: "Dresses", type: "Women", itemName: "Lace Dress", itemPrice: "$150.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Pink", "Purple", "Blue"] },
  { id: 29, category: "Skirts", type: "Women", itemName: "Pleated Skirt", itemPrice: "$80.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Grey", "Pink", "Blue"] },
  { id: 30, category: "Shorts", type: "Men", itemName: "Cargo Shorts", itemPrice: "$110.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Green", "Grey", "Black", "Brown"] }
];
