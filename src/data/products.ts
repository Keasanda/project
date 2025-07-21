export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  detailedDescription: string;
  additionalImages: string[];
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    finish: string;
  };
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Iqhaza Large Concrete Tray",
    price: 499.00,
    image: "https://concretegoods.co.uk/cdn/shop/products/Large-Terrazzo-Concrete-Cirkel-Tray-Circle-Concrete-Tray-Display-Tray-Bathroom-Decor-Terrazzo-Decorative-Tray-Scandi-Decor.jpg?v=1628242943&width=713",
    description: "Handcrafted concrete planters",
    detailedDescription: "Discover effortless elegance with our Iqhaza round tray.Hand crafted to blend seamlessly into your space, this versatile piece brings a touch of serene organization to your bedroom or living room. Perfect for keeping your everyday essentials beautifully contained, it's a subtle statement.Perfect for keeping all your trinkets.",
    additionalImages: [
      "https://concretegoods.co.uk/cdn/shop/products/Black-Trinket-Tray-Concrete-Round-Minimalist-Entryway-Organiser-Makeup-Jewellery-Ring-Dish-Home-Decoration-Small-Bits-Key-Holder-Decoration.jpg?v=1694558815&width=713",

    ],
    specifications: {
      material: "High-grade concrete ",
      dimensions: "Ø 25.5cm x H 2.5cm, Thickness 1cm",
      weight: "1 kg",
      finish: "Natural concrete "
    },
    features: [
      "Drainage holes included",
      "Weather-resistant finish",
      "Suitable for indoor and outdoor use",
      "Unique texture develops over time",
      "Sustainable materials"
    ]
  },
  {
    id: 2,
    name: "Shisa Matchstick Concrete Holder",
    price: 250.00,
    image: "https://concretegoods.co.uk/cdn/shop/products/Eld-Long-Matchstick-Holder-Matchstick-Storage-Jar-Minimalist-Toothpick-Holder-Cocktail-Stick-Holder-Home-Garden-Decor-6.jpg?v=1628332355&width=713",
    description: "Matchstick Concrete Holder",
    detailedDescription: "The simple beauty of our concrete match holder. Hand crafted to feel right at home in your hand and on your tabletop, it offers a warm, earthy presence while keeping your matches neat and accessible. It's a small, thoughtful detail that quietly elevates your space, ready to spark moments of comfort and cherished light whenever you need them",
    additionalImages: [
      "https://concretegoods.co.uk/cdn/shop/products/Eld-Long-Matchstick-Holder-Matchstick-Storage-Jar-Minimalist-Toothpick-Holder-Cocktail-Stick-Holder-Home-Garden-Decor-2.jpg?v=1628332355&width=713",

    ],
    specifications: {
      material: "Black, Natural concrete ,Custom",
      dimensions: "H 6cm x W 5.5cm - 4cm,",
      weight: "155g",
      finish: "Concrete"
    },
    features: [
      "Food-safe finish",
      "Unique concrete grain patterns",
      "Hand-carved construction",
      "Cement inlay details",
      "Perfect for serving or display"
    ]
  },
  {
    id: 3,
    name: "Hlobisa Large Oval Concrete Tray",
    price: 999.00,
    image: "https://concretegoods.co.uk/cdn/shop/products/Large-Oval-Concrete-Terrazzo-Tray-Trinket-Tray-Minimal-Home-Decor-Concrete-Tray-Bathroom-Decor-Decorative-Tray-4.jpg?v=1660170101&width=713",
    description: "Minimalist Oval Concrete Tray",
    detailedDescription: "This versatile piece brings a touch of grounding elegance to any room in your home.Our hand crafted large oval concrete tray,Imagine it cradling candles on your dining table, organizing essentials on your entry console, or simply showcasing your favorite decor. Its warm, inviting texture and generous size make it a perfectly subtle statement for a truly harmonious space",
    additionalImages: [
      "https://concretegoods.co.uk/cdn/shop/products/Large-Oval-Black-Concrete-Tray-Trinket-Tray-Minimalist-Modern-Home-Decor-Decorative-Tray-Scandi-Bathroom.jpg?v=1660170101&width=713",

    ],
    specifications: {
      material: "Smooth concrete with hardwood base",
      dimensions: "L 33.5cm x H 2cm x W 15cm",
      weight: "1kg",
      finish: "Polished concrete "
    },
    features: [
      "Food-safe finish",
      "Stable base",
      "Heat-resistant materials",
      "Minimalist design",
      "Available in sets"
    ]
  },
  {
    id: 4,
    name: "Khusela Concrete Coasters",
    price: 350.00,
    image: "https://concretegoods.co.uk/cdn/shop/products/Kopp-Concrete-Coasters-Minimalist-Circle-Drink-Tray-Modern-Round-Key-Tray-Coffee-Table-Decor-7.jpg?v=1628334323&width=713",
    description: "Concrete Coasters",
    detailedDescription: "Elevate your everyday with our beautiful set of handcrafted concrete coasters. Created with care, these coasters offer reliable protection for your furniture while adding a touch of inviting, minimalist style. Their natural warmth and solid feel provide a reassuring presence, making them the perfect companions for your coffee, tea, or favorite drink.",
    additionalImages: [
      "https://concretegoods.co.uk/cdn/shop/products/Kopp-Concrete-Coasters-Minimalist-Circle-Drink-Tray-Modern-Round-Key-Tray-Coffee-Table-Decor-2.jpg?v=1628334322&width=713",

    ],
    specifications: {
      material: "Premium concrete ",
      dimensions: "H 1cm x Ø 10cm, Weight",
      weight: "155g",
      finish: "Natural concrete ,Custom"
    },
    features: [
      "Integrated handles",
      "Food-safe materials",
      "Easy to clean",
      "Perfect for entertaining",
      "Distinctive material contrast"
    ]
  },
  {
    id: 5,
    name: "Igagasi Concrete soap Dish / Stand",
    price: 250,
    image: "https://i.postimg.cc/43YwZz9W/part-one.jpg",
    description: "Concrete soap Dish / Stand",
    detailedDescription: "Discover the quiet charm of our handcrafted concrete ripple dish. Its unique, wavy design isn't just beautiful; it's cleverly crafted to let water flow away, keeping your favorite soap perfectly dry and lasting longer. But its magic doesn't stop there! This versatile piece doubles as a stylish candle stand or a safe haven for your cherished jewelry. Welcome a touch of serene functionality and warm artistry into your home.",
    additionalImages: [
      "https://i.postimg.cc/0jRVVbrc/part-2.jpg",
     
    ],
    specifications: {
      material: "Textured concrete with wood accents",
      dimensions: "L 10.62 x W 7.11cm x H 2.4cm",
      weight: "1kg",
      finish: "Black, Natural concrete ,Custom"
    },
    features: [
      "Waterproof interior",
      "Unique organic shapes",
      "Sculptural design",
      "Suitable for Kitchen or bathroom",
      "Stable base design"
    ]
  },
  {
    id: 6,
    name: "Itshe Heavy Concrete Door Stopper",
    price: 2750,
    image: "https://i.postimg.cc/yN3h2sM5/Whats-App-Image-2025-07-11-at-10-12-13-314ce0b8.jpg",
    description: "Concrete Door Stopper",
    detailedDescription: "Discover the gentle strength of our handmade Hearth Keeper door stop. We poured our care into every detail, creating a piece that feels both substantial and inviting. Its robust concrete form reliably holds your doors open, while the subtle variations in its finish whisper tales of true craftsmanship. More than just functional, it's a warm, easy addition that brings a touch of quiet artistry and dependable peace to your home",
    additionalImages: [
      "https://i.postimg.cc/Mpv1jzpT/Whats-App-Image-2025-07-11-at-10-12-15-babc5a30.jpg",
    
    ],
    specifications: {
      material: "Solid concrete panels",
      dimensions: "15m tall x 20cm wide (without rope handle)" ,
      weight: "10kg appx",
      finish: "Black, Natural concrete ,Custom"
    },
    features: [
      "Minimalistic  design",
      "Soft-close hinges",
      "Interior felt lining",
      "Stackable design",
      "Multiple size options available"
    ]
  }
];