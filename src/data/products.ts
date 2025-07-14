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
    name: "Cement Planter Series",
    price: 1250,
    image: "https://concretegoods.co.uk/cdn/shop/products/Large-Terrazzo-Concrete-Cirkel-Tray-Circle-Concrete-Tray-Display-Tray-Bathroom-Decor-Terrazzo-Decorative-Tray-Scandi-Decor.jpg?v=1628242943&width=713",
    description: "Handcrafted concrete planters with natural wood accent",
    detailedDescription: "Our Cement Planter Series represents the perfect marriage of industrial concrete and warm wood accents. Each planter is meticulously handcrafted by our skilled artisans, ensuring that no two pieces are exactly alike. The concrete is mixed with natural aggregates to create a unique texture that develops character over time, while the wooden accent provides a warm contrast that complements any plant selection.",
    additionalImages: [
      "https://concretegoods.co.uk/cdn/shop/products/Black-Trinket-Tray-Concrete-Round-Minimalist-Entryway-Organiser-Makeup-Jewellery-Ring-Dish-Home-Decoration-Small-Bits-Key-Holder-Decoration.jpg?v=1694558815&width=713",

    ],
    specifications: {
      material: "High-grade concrete with natural wood accent",
      dimensions: "25cm (H) x 30cm (W) x 30cm (D)",
      weight: "3.2kg",
      finish: "Natural concrete with sealed wood"
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
    name: "Timber Bowl Collection",
    price: 1850,
    image: "https://concretegoods.co.uk/cdn/shop/products/Eld-Long-Matchstick-Holder-Matchstick-Storage-Jar-Minimalist-Toothpick-Holder-Cocktail-Stick-Holder-Home-Garden-Decor-6.jpg?v=1628332355&width=713",
    description: "Carved wooden bowls with cement inlay details",
    detailedDescription: "The Timber Bowl Collection showcases the beauty of natural wood grain enhanced by carefully placed cement inlay details. Each bowl is carved from sustainably sourced hardwood and features unique cement patterns that flow organically through the wood grain. These functional art pieces serve as stunning centerpieces while maintaining their practical utility for serving and display.",
    additionalImages: [
      "https://concretegoods.co.uk/cdn/shop/products/Eld-Long-Matchstick-Holder-Matchstick-Storage-Jar-Minimalist-Toothpick-Holder-Cocktail-Stick-Holder-Home-Garden-Decor-2.jpg?v=1628332355&width=713",

    ],
    specifications: {
      material: "Solid hardwood with cement inlay",
      dimensions: "35cm diameter x 8cm height",
      weight: "1.8kg",
      finish: "Food-safe natural oil finish"
    },
    features: [
      "Food-safe finish",
      "Unique wood grain patterns",
      "Hand-carved construction",
      "Cement inlay details",
      "Perfect for serving or display"
    ]
  },
  {
    id: 3,
    name: "Large Kurva",
    price: 950,
    image: "https://concretegoods.co.uk/cdn/shop/products/Large-Oval-Concrete-Terrazzo-Tray-Trinket-Tray-Minimal-Home-Decor-Concrete-Tray-Bathroom-Decor-Decorative-Tray-4.jpg?v=1660170101&width=713",
    description: "Minimalist cement candle holders with wood base",
    detailedDescription: "Our Concrete Candleholders embody minimalist design principles while creating warm, ambient lighting for any space. The smooth concrete cylinder is perfectly balanced on a natural wood base, creating a striking silhouette that complements both modern and traditional interiors. Each piece is hand-finished to ensure the perfect balance between the materials.",
    additionalImages: [
      "https://concretegoods.co.uk/cdn/shop/products/Large-Oval-Black-Concrete-Tray-Trinket-Tray-Minimalist-Modern-Home-Decor-Decorative-Tray-Scandi-Bathroom.jpg?v=1660170101&width=713",

    ],
    specifications: {
      material: "Smooth concrete with hardwood base",
      dimensions: "12cm (H) x 8cm diameter",
      weight: "0.8kg",
      finish: "Polished concrete with oiled wood"
    },
    features: [
      "Fits standard candles",
      "Stable wooden base",
      "Heat-resistant materials",
      "Minimalist design",
      "Available in sets"
    ]
  },
  {
    id: 4,
    name: "Wood & Stone Serving Tray",
    price: 2150,
    image: "https://concretegoods.co.uk/cdn/shop/products/Kopp-Concrete-Coasters-Minimalist-Circle-Drink-Tray-Modern-Round-Key-Tray-Coffee-Table-Decor-7.jpg?v=1628334323&width=713",
    description: "Elegant serving tray combining walnut and concrete",
    detailedDescription: "This elegant serving tray represents the pinnacle of our craftsmanship, combining rich walnut wood with smooth concrete sections. The design creates distinct areas for different serving needs while maintaining visual harmony. The raised edges and comfortable handles make it both beautiful and functional for entertaining guests or everyday use.",
    additionalImages: [
      "https://concretegoods.co.uk/cdn/shop/products/Kopp-Concrete-Coasters-Minimalist-Circle-Drink-Tray-Modern-Round-Key-Tray-Coffee-Table-Decor-2.jpg?v=1628334322&width=713",

    ],
    specifications: {
      material: "Premium walnut wood with concrete sections",
      dimensions: "45cm (L) x 30cm (W) x 3cm (H)",
      weight: "2.1kg",
      finish: "Food-safe finish throughout"
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
    name: "Cement Vase Collection",
    price: 1400,
    image: "https://i.postimg.cc/43YwZz9W/part-one.jpg",
    description: "Textured concrete vases with organic wood details",
    detailedDescription: "The Cement Vase Collection features organically shaped concrete vessels enhanced with carefully integrated wood details. Each vase is hand-formed to create unique textures and shapes that celebrate the natural properties of concrete. The wood elements add warmth and create visual interest, making each piece a sculptural statement even when not holding flowers.",
    additionalImages: [
      "https://i.postimg.cc/0jRVVbrc/part-2.jpg",
     
    ],
    specifications: {
      material: "Textured concrete with wood accents",
      dimensions: "28cm (H) x 15cm diameter",
      weight: "2.5kg",
      finish: "Natural concrete with sealed wood"
    },
    features: [
      "Waterproof interior",
      "Unique organic shapes",
      "Sculptural design",
      "Suitable for fresh or dried flowers",
      "Stable base design"
    ]
  },
  {
    id: 6,
    name: "Timber Storage Boxes",
    price: 2750,
    image: "https://i.postimg.cc/yN3h2sM5/Whats-App-Image-2025-07-11-at-10-12-13-314ce0b8.jpg",
    description: "Handcrafted storage boxes with concrete accent panels",
    detailedDescription: "Our Timber Storage Boxes combine functionality with artistic design, featuring solid wood construction enhanced by concrete accent panels. These versatile pieces provide elegant storage solutions while serving as beautiful decorative elements. The contrast between warm wood and cool concrete creates visual interest, while the precision joinery ensures lasting durability.",
    additionalImages: [
      "https://i.postimg.cc/Mpv1jzpT/Whats-App-Image-2025-07-11-at-10-12-15-babc5a30.jpg",
    
    ],
    specifications: {
      material: "Solid timber with concrete panels",
      dimensions: "40cm (L) x 25cm (W) x 20cm (H)",
      weight: "3.8kg",
      finish: "Natural wood oil with sealed concrete"
    },
    features: [
      "Removable lid",
      "Soft-close hinges",
      "Interior felt lining",
      "Stackable design",
      "Multiple size options available"
    ]
  },
  {
    id: 7,
    name: "Concrete Coffee Table",
    price: 4500,
    image: "https://i.pinimg.com/1200x/15/ef/a8/15efa894432fd411f91887a1a371a791.jpg",
    description: "Modern coffee table with cement top and wooden legs",
    detailedDescription: "This striking coffee table represents our commitment to creating furniture that serves as functional art. The smooth concrete top provides a durable surface perfect for daily use, while the carefully crafted wooden legs add warmth and visual lightness. The proportions are carefully calculated to complement modern living spaces while maintaining timeless appeal.",
    additionalImages: [
      "https://i.pinimg.com/1200x/c7/fe/98/c7fe985f1ecb590866bee73e24d4a31b.jpg",
      
    ],
    specifications: {
      material: "Reinforced concrete top with hardwood legs",
      dimensions: "120cm (L) x 60cm (W) x 45cm (H)",
      weight: "45kg",
      finish: "Sealed concrete with oiled wood legs"
    },
    features: [
      "Reinforced concrete construction",
      "Scratch-resistant surface",
      "Adjustable feet",
      "Custom dimensions available",
      "Professional delivery included"
    ]
  },
  {
    id: 8,
    name: "Wood & Cement Bookends",
    price: 850,
    image: "https://i.pinimg.com/736x/2b/5d/3d/2b5d3d782e40878415d6448fa04b9dd3.jpg",
    description: "Sculptural bookends combining natural materials",
    detailedDescription: "These sculptural bookends transform a practical necessity into an artistic statement. Each piece combines the weight and stability of concrete with the warmth and grain of natural wood. The geometric forms create visual interest on any shelf while providing reliable support for your book collection. Sold as a matching pair, they bring cohesion to any bookshelf or display.",
    additionalImages: [
      "https://i.pinimg.com/736x/16/43/46/164346b2e0d7f1df169d1669fad65662.jpg",
     
    ],
    specifications: {
      material: "Concrete base with hardwood accent",
      dimensions: "15cm (H) x 12cm (W) x 10cm (D)",
      weight: "1.2kg each",
      finish: "Natural concrete with oiled wood"
    },
    features: [
      "Sold as matching pair",
      "Non-slip base",
      "Suitable for heavy books",
      "Geometric design",
      "Protective felt pads"
    ]
  },
  {
    id: 9,
    name: "Cement Wall Shelves",
    price: 1650,
    image: "https://i.pinimg.com/1200x/d8/80/15/d88015f9894c33d116f07f321239c168.jpg",
    description: "Floating shelves with wood and concrete design",
    detailedDescription: "Our Cement Wall Shelves create the illusion of floating while providing sturdy support for your treasured items. The concrete shelf appears to emerge from the wooden mounting system, creating a striking visual effect. Each shelf is engineered to support substantial weight while maintaining clean lines that complement contemporary interiors.",
    additionalImages: [
      "https://i.pinimg.com/736x/fc/31/b7/fc31b764ce08af9c78f10de20fa4cde1.jpg",
     
    ],
    specifications: {
      material: "Reinforced concrete with hardwood mounting",
      dimensions: "60cm (L) x 20cm (W) x 5cm (H)",
      weight: "4.2kg",
      finish: "Sealed concrete with natural wood"
    },
    features: [
      "Hidden mounting system",
      "Load capacity: 15kg",
      "Installation hardware included",
      "Multiple lengths available",
      "Professional installation available"
    ]
  }
];