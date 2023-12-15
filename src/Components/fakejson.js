const items = [
  { id: 1, category: "Shirt", type: "Men", itemName: "Check Shirt", itemPrice: "$123.00", size: ["M", "S", "XL", "XXL", "L"], colors: ["Black", "Grey", "Blue", "White"], description: "A stylish checkered shirt crafted with premium cotton for comfort and durability. Features a timeless design suitable for various occasions." },
  { id: 2, category: "Printed T-Shirt", type: "Men", itemName: "White Print T-Shirt", itemPrice: "$220.00", size: ["M", "S", "XL", "XXL", "L", "3XL", "4XL", "XS"], colors: ["Red", "Yellow", "Green", "Purple"], description: "Express your individuality with this white printed T-shirt. Made from high-quality cotton, it combines comfort with a unique design featuring vibrant colors." },
  { id: 3, category: "Plain T-Shirt", type: "Men", itemName: "Brown T-Shirt", itemPrice: "$157.00", size: ["L", "M", "S", "XL", "XXL"], colors: ["Brown", "Beige", "Olive", "Cream"], description: "A simple yet stylish brown T-shirt crafted from soft and breathable fabric. Versatile and perfect for casual wear." },
  { id: 4, category: "Polo T-Shirt", type: "Men", itemName: "Green Polo T-Shirt", itemPrice: "$170.23", size: ["S", "M", "L", "XL"], colors: ["Green", "Yellow", "Blue", "White"], description: "Elevate your look with this classic green polo T-shirt. Made with a blend of cotton and polyester for a comfortable fit and a touch of sophistication." },
  { id: 5, category: "Hoodies & Sweatshirt", type: "Men", itemName: "Green Hoodie", itemPrice: "$300", size: ["S", "M", "L", "XL", "XXL"], colors: ["Green", "Grey", "Black", "Blue"], description: "Stay warm and stylish in this green hoodie. Crafted with a cozy blend of cotton and polyester, featuring a modern design for a fashionable edge." },
  { id: 6, category: "Jeans", type: "Men", itemName: "Blue Denim", itemPrice: "$230", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Black", "Grey", "White"], description: "A wardrobe essential, these blue denim jeans offer both style and comfort. Made from high-quality denim fabric for a classic and enduring look." },
  { id: 7, category: "Activewear", type: "Men", itemName: "Black Active", itemPrice: "$240.50", size: ["S", "M", "L", "XL"], colors: ["Black", "Grey", "Blue", "Red"], description: "Step up your active lifestyle with these black activewear pants. Designed for performance, these pants provide both flexibility and style." },
  { id: 8, category: "Boxers", type: "Men", itemName: "Boxer", itemPrice: "$80.20", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Yellow", "Green", "Blue"], description: "Experience ultimate comfort with these colorful boxers. Made from a breathable cotton blend, these boxers combine style and functionality." },
  { id: 9, category: "Hoodies & Sweatshirt", type: "Women", itemName: "Orange Hoodie", itemPrice: "$320.05", size: ["S", "M", "L", "XL", "XXL"], colors: ["Orange", "Pink", "Purple", "Yellow"], description: "Stay cozy and fashionable with this vibrant orange hoodie. Crafted from a soft and warm fabric, it's the perfect addition to your winter wardrobe." },
  { id: 10, category: "Coats & Parkas", type: "Women", itemName: "Grey Coat with Green Parkas", itemPrice: "$310", size: ["S", "M", "L", "XL", "XXL"], colors: ["Grey", "Green", "Black", "Blue"], description: "Brave the cold in style with this grey coat featuring green parkas. A chic and practical choice for winter, combining warmth and fashion." },
  { id: 11, category: "Tees & T-Shirt", type: "Women", itemName: "Blue Flowerprint Crop", itemPrice: "$256", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Pink", "Yellow", "White"], description: "Embrace the floral trend with this blue flower-print crop top. Made from lightweight fabric, it's perfect for a casual and trendy look." },
  { id: 12, category: "Boxers", type: "Women", itemName: "White T-Shirt with Boxer", itemPrice: "$310", size: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Grey", "Blue", "Red"], description: "Relax in style with this white T-shirt and boxer set. The soft and breathable fabric ensures comfort, while the design adds a touch of sophistication." },
  { id: 13, category: "Shorts", type: "Men", itemName: "Summer Shorts", itemPrice: "$90.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Green", "Black", "White"], description: "Enjoy the summer vibes with these comfortable and stylish shorts. Made from lightweight material, these shorts are perfect for warm days." },
  { id: 14, category: "Sweaters", type: "Men", itemName: "Cozy Sweater", itemPrice: "$210.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Blue", "Grey"], description: "Stay warm and fashionable in this cozy sweater. Knitted with care, it provides both comfort and style for the colder seasons." },
  { id: 15, category: "Jackets", type: "Men", itemName: "Leather Jacket", itemPrice: "$350.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Brown", "Red", "Grey"], description: "Make a statement with this timeless leather jacket. Crafted with genuine leather, it offers durability and a classic look that never goes out of style." },
  { id: 16, category: "Dresses", type: "Women", itemName: "Sunflower Dress", itemPrice: "$180.50", size: ["S", "M", "L", "XL", "XXL"], colors: ["Yellow", "Green", "Blue", "White"], description: "Bring a touch of sunshine to your wardrobe with this sunflower dress. Made from flowy fabric, it's perfect for a stylish and cheerful look." },
  { id: 17, category: "Skirts", type: "Women", itemName: "A-Line Skirt", itemPrice: "$120.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Grey", "Pink", "Blue"], description: "Elevate your style with this A-line skirt. The versatile design and high-quality fabric make it a must-have for any fashion-forward wardrobe." },
  { id: 18, category: "Tees & T-Shirt", type: "Women", itemName: "Pink Graphic Tee", itemPrice: "$95.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Pink", "Purple", "White", "Grey"], description: "Express your personality with this pink graphic tee. Made from soft cotton, it combines comfort with a pop of color and unique design." },
  { id: 19, category: "Jeans", type: "Women", itemName: "Skinny Jeans", itemPrice: "$180.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Black", "Grey", "White"], description: "Flaunt your curves in these stylish skinny jeans. The high-quality denim fabric provides a perfect fit, ensuring both comfort and fashion." },
  { id: 20, category: "Hoodies & Sweatshirt", type: "Men", itemName: "Gray Hoodie", itemPrice: "$280.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Grey", "Black", "Blue", "White"], description: "Stay cozy and on-trend with this gray hoodie. Made from a blend of cotton and polyester, it offers warmth and a modern style." },
  { id: 21, category: "Activewear", type: "Men", itemName: "Running Shorts", itemPrice: "$50.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Black", "Blue"], description: "Maximize your performance with these running shorts. Lightweight and breathable, they provide comfort and flexibility for your active lifestyle." },
  { id: 22, category: "Coats & Parkas", type: "Women", itemName: "Winter Parka", itemPrice: "$280.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Grey", "Blue", "Black"], description: "Stay warm and stylish in this winter parka. Featuring a sleek design and insulated material, it's perfect for cold weather while maintaining a fashionable look." },
  { id: 23, category: "Tees & T-Shirt", type: "Women", itemName: "Striped T-Shirt", itemPrice: "$120.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Blue", "Red", "White", "Black"], description: "Add a classic touch to your wardrobe with this striped T-shirt. Made from soft cotton, it's a timeless piece that can be paired with various outfits." },
  { id: 24, category: "Boxers", type: "Men", itemName: "Striped Boxer", itemPrice: "$25.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Blue", "White"], description: "Upgrade your essentials with these striped boxers. Crafted from comfortable fabric, they combine style and functionality for everyday wear." },
  { id: 25, category: "Sweaters", type: "Women", itemName: "Cable Knit Sweater", itemPrice: "$220.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Blue", "Grey"], description: "Stay cozy and chic in this cable knit sweater. The intricate design and soft fabric make it a versatile and stylish addition to your winter wardrobe." },
  { id: 26, category: "Jeans", type: "Men", itemName: "Black Denim", itemPrice: "$200.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Grey", "Blue", "White"], description: "Achieve a sleek and modern look with these black denim jeans. Crafted from high-quality fabric, they provide both style and comfort for any occasion." },
  { id: 27, category: "Hoodies & Sweatshirt", type: "Men", itemName: "Red Hoodie", itemPrice: "$270.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Green", "Blue", "Black"], description: "Make a bold statement with this red hoodie. The vibrant color and comfortable design make it a standout piece for casual and relaxed styling." },
  { id: 28, category: "Dresses", type: "Women", itemName: "Lace Dress", itemPrice: "$150.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Pink", "Purple", "Blue"], description: "Dress to impress with this elegant lace dress. Perfect for special occasions, the delicate lace detailing adds a touch of romance to your ensemble." },
  { id: 29, category: "Skirts", type: "Women", itemName: "Pleated Skirt", itemPrice: "$80.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Grey", "Pink", "Blue"], description: "Add a playful flair to your wardrobe with this pleated skirt. The versatile design and comfortable fit make it a stylish choice for various occasions." },
  { id: 30, category: "Shorts", type: "Men", itemName: "Cargo Shorts", itemPrice: "$110.00", size: ["S", "M", "L", "XL", "XXL"], colors: ["Green", "Grey", "Black", "Brown"], description: "Stay casual and cool with these cargo shorts. Made from durable materials with multiple pockets, they offer both style and functionality for your everyday adventures." }
];






[
  {
    "id": 1,
    "category": "Shirt",
    "type": "Men",
    "itemName": "Check Shirt",
    "itemPrice": "$123.00",
    "size": ["M", "S", "XL", "XXL", "L"],
    "colors": ["Black", "Grey", "Blue", "White"],
    "description": "A stylish checkered shirt crafted with premium cotton for comfort and durability. Features a timeless design suitable for various occasions."
  },
  {
    "id": 2,
    "category": "Printed T-Shirt",
    "type": "Men",
    "itemName": "White Print T-Shirt",
    "itemPrice": "$220.00",
    "size": ["M", "S", "XL", "XXL", "L", "3XL", "4XL", "XS"],
    "colors": ["Red", "Yellow", "Green", "Purple"],
    "description": "Express your individuality with this white printed T-shirt. Made from high-quality cotton, it combines comfort with a unique design featuring vibrant colors."
  },
  {
    "id": 3,
    "category": "Plain T-Shirt",
    "type": "Men",
    "itemName": "Brown T-Shirt",
    "itemPrice": "$157.00",
    "size": ["L", "M", "S", "XL", "XXL"],
    "colors": ["Brown", "Beige", "Olive", "Cream"],
    "description": "A simple yet stylish brown T-shirt crafted from soft and breathable fabric. Versatile and perfect for casual wear."
  },
  {
    "id": 4,
    "category": "Polo T-Shirt",
    "type": "Men",
    "itemName": "Green Polo T-Shirt",
    "itemPrice": "$170.23",
    "size": ["S", "M", "L", "XL"],
    "colors": ["Green", "Yellow", "Blue", "White"],
    "description": "Elevate your look with this classic green polo T-shirt. Made with a blend of cotton and polyester for a comfortable fit and a touch of sophistication."
  },
  {
    "id": 5,
    "category": "Hoodies & Sweatshirt",
    "type": "Men",
    "itemName": "Green Hoodie",
    "itemPrice": "$300",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Green", "Grey", "Black", "Blue"],
    "description": "Stay warm and stylish in this green hoodie. Crafted with a cozy blend of cotton and polyester, featuring a modern design for a fashionable edge."
  },
  {
    "id": 6,
    "category": "Jeans",
    "type": "Men",
    "itemName": "Blue Denim",
    "itemPrice": "$230",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Blue", "Black", "Grey", "White"],
    "description": "A wardrobe essential, these blue denim jeans offer both style and comfort. Made from high-quality denim fabric for a classic and enduring look."
  },
  {
    "id": 7,
    "category": "Activewear",
    "type": "Men",
    "itemName": "Black Active",
    "itemPrice": "$240.50",
    "size": ["S", "M", "L", "XL"],
    "colors": ["Black", "Grey", "Blue", "Red"],
    "description": "Step up your active lifestyle with these black activewear pants. Designed for performance, these pants provide both flexibility and style."
  },
  {
    "id": 8,
    "category": "Boxers",
    "type": "Men",
    "itemName": "Boxer",
    "itemPrice": "$80.20",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Red", "Yellow", "Green", "Blue"],
    "description": "Experience ultimate comfort with these colorful boxers. Made from a breathable cotton blend, these boxers combine style and functionality."
  },
  {
    "id": 9,
    "category": "Hoodies & Sweatshirt",
    "type": "Women",
    "itemName": "Orange Hoodie",
    "itemPrice": "$320.05",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Orange", "Pink", "Purple", "Yellow"],
    "description": "Stay cozy and fashionable with this vibrant orange hoodie. Crafted from a soft and warm fabric, it's the perfect addition to your winter wardrobe."
  },
  {
    "id": 10,
    "category": "Coats & Parkas",
    "type": "Women",
    "itemName": "Grey Coat with Green Parkas",
    "itemPrice": "$310",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Grey", "Green", "Black", "Blue"],
    "description": "Brave the cold in style with this grey coat featuring green parkas. A chic and practical choice for winter, combining warmth and fashion."
  },
  {
    "id": 11,
    "category": "Tees & T-Shirt",
    "type": "Women",
    "itemName": "Blue Flowerprint Crop",
    "itemPrice": "$256",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Blue", "Pink", "Yellow", "White"],
    "description": "Embrace the floral trend with this blue flower-print crop top. Made from lightweight fabric, it's perfect for a casual and trendy look."
  },
  {
    "id": 12,
    "category": "Boxers",
    "type": "Women",
    "itemName": "White T-Shirt with Boxer",
    "itemPrice": "$310",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["White", "Grey", "Blue", "Red"],
    "description": "Relax in style with this white T-shirt and boxer set. The soft and breathable fabric ensures comfort, while the design adds a touch of sophistication."
  },
  {
    "id": 13,
    "category": "Shorts",
    "type": "Men",
    "itemName": "Summer Shorts",
    "itemPrice": "$90.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Blue", "Green", "Black", "White"],
    "description": "Enjoy the summer vibes with these comfortable and stylish shorts. Made from lightweight material, these shorts are perfect for warm days."
  },
  {
    "id": 14,
    "category": "Sweaters",
    "type": "Men",
    "itemName": "Cozy Sweater",
    "itemPrice": "$210.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Red", "Green", "Blue", "Grey"],
    "description": "Stay warm and fashionable in this cozy sweater. Knitted with care, it provides both comfort and style for the colder seasons."
  },
  {
    "id": 15,
    "category": "Jackets",
    "type": "Men",
    "itemName": "Leather Jacket",
    "itemPrice": "$350.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Black", "Brown", "Red", "Grey"],
    "description": "Make a statement with this timeless leather jacket. Crafted with genuine leather, it offers durability and a classic look that never goes out of style."
  },
  {
    "id": 16,
    "category": "Dresses",
    "type": "Women",
    "itemName": "Sunflower Dress",
    "itemPrice": "$180.50",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Yellow", "Green", "Blue", "White"],
    "description": "Bring a touch of sunshine to your wardrobe with this sunflower dress. Made from flowy fabric, it's perfect for a stylish and cheerful look."
  },
  {
    "id": 17,
    "category": "Skirts",
    "type": "Women",
    "itemName": "A-Line Skirt",
    "itemPrice": "$120.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Black", "Grey", "Pink", "Blue"],
    "description": "Elevate your style with this A-line skirt. The versatile design and high-quality fabric make it a must-have for any fashion-forward wardrobe."
  },
  {
    "id": 18,
    "category": "Tees & T-Shirt",
    "type": "Women",
    "itemName": "Pink Graphic Tee",
    "itemPrice": "$95.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Pink", "Purple", "White", "Grey"],
    "description": "Express your personality with this pink graphic tee. Made from soft cotton, it combines comfort with a pop of color and unique design."
  },
  {
    "id": 19,
    "category": "Jeans",
    "type": "Women",
    "itemName": "Skinny Jeans",
    "itemPrice": "$180.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Blue", "Black", "Grey", "White"],
    "description": "Flaunt your curves in these stylish skinny jeans. The high-quality denim fabric provides a perfect fit, ensuring both comfort and fashion."
  },
  {
    "id": 20,
    "category": "Hoodies & Sweatshirt",
    "type": "Men",
    "itemName": "Gray Hoodie",
    "itemPrice": "$280.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Grey", "Black", "Blue", "White"],
    "description": "Stay cozy and on-trend with this gray hoodie. Made from a blend of cotton and polyester, it offers warmth and a modern style."
  },
  {
    "id": 21,
    "category": "Activewear",
    "type": "Men",
    "itemName": "Running Shorts",
    "itemPrice": "$50.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Red", "Green", "Black", "Blue"],
    "description": "Maximize your performance with these running shorts. Lightweight and breathable, they provide comfort and flexibility for your active lifestyle."
  },
  {
    "id": 22,
    "category": "Coats & Parkas",
    "type": "Women",
    "itemName": "Winter Parka",
    "itemPrice": "$280.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["White", "Grey", "Blue", "Black"],
    "description": "Stay warm and stylish in this winter parka. Featuring a sleek design and insulated material, it's perfect for cold weather while maintaining a fashionable look."
  },
  {
    "id": 23,
    "category": "Tees & T-Shirt",
    "type": "Women",
    "itemName": "Striped T-Shirt",
    "itemPrice": "$120.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Blue", "Red", "White", "Black"],
    "description": "Add a classic touch to your wardrobe with this striped T-shirt. Made from soft cotton, it's a timeless piece that can be paired with various outfits."
  },
  {
    "id": 24,
    "category": "Boxers",
    "type": "Men",
    "itemName": "Striped Boxer",
    "itemPrice": "$25.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Red", "Green", "Blue", "White"],
    "description": "Upgrade your essentials with these striped boxers. Crafted from comfortable fabric, they combine style and functionality for everyday wear."
  },
  {
    "id": 25,
    "category": "Sweaters",
    "type": "Women",
    "itemName": "Cable Knit Sweater",
    "itemPrice": "$220.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Red", "Green", "Blue", "Grey"],
    "description": "Stay cozy and chic in this cable knit sweater. The intricate design and soft fabric make it a versatile and stylish addition to your winter wardrobe."
  },
  {
    "id": 26,
    "category": "Jeans",
    "type": "Men",
    "itemName": "Black Denim",
    "itemPrice": "$200.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Black", "Grey", "Blue", "White"],
    "description": "Achieve a sleek and modern look with these black denim jeans. Crafted from high-quality fabric, they provide both style and comfort for any occasion."
  },
  {
    "id": 27,
    "category": "Hoodies & Sweatshirt",
    "type": "Men",
    "itemName": "Red Hoodie",
    "itemPrice": "$270.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Red", "Green", "Blue", "Black"],
    "description": "Make a bold statement with this red hoodie. The vibrant color and comfortable design make it a standout piece for casual and relaxed styling."
  },
  {
    "id": 28,
    "category": "Dresses",
    "type": "Women",
    "itemName": "Lace Dress",
    "itemPrice": "$150.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["White", "Pink", "Purple", "Blue"],
    "description": "Dress to impress with this elegant lace dress. Perfect for special occasions, the delicate lace detailing adds a touch of romance to your ensemble."
  },
  {
    "id": 29,
    "category": "Skirts",
    "type": "Women",
    "itemName": "Pleated Skirt",
    "itemPrice": "$80.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Black", "Grey", "Pink", "Blue"],
    "description": "Add a playful flair to your wardrobe with this pleated skirt. The versatile design and comfortable fit make it a stylish choice for various occasions."
  },
  {
    "id": 30,
    "category": "Shorts",
    "type": "Men",
    "itemName": "Cargo Shorts",
    "itemPrice": "$110.00",
    "size": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Green", "Grey", "Black", "Brown"],
    "description": "Stay casual and cool with these cargo shorts. Made from durable materials with multiple pockets, they offer both style and functionality for your everyday adventures."
  }
]