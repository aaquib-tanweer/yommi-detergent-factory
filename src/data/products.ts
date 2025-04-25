import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "UltraClean Liquid Detergent",
    description: "Our flagship liquid detergent that removes stubborn stains while being gentle on fabrics.",
    category: "Household",
    imageUrl: "https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Industrial Strength Cleaner",
    description: "Heavy-duty cleaning solution for factories and industrial equipment.",
    category: "Industrial",
    imageUrl: "https://images.pexels.com/photos/5218009/pexels-photo-5218009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Antibacterial Surface Spray",
    description: "Kills 99.9% of bacteria on contact, perfect for kitchens and bathrooms.",
    category: "Household",
    imageUrl: "https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Eco-Friendly Dishwashing Liquid",
    description: "Plant-based formula that's tough on grease but gentle on the environment.",
    category: "Household",
    imageUrl: "https://images.pexels.com/photos/4239028/pexels-photo-4239028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Hospital-Grade Disinfectant",
    description: "Trusted by healthcare facilities across Saudi Arabia for thorough sanitation.",
    category: "Medical",
    imageUrl: "https://images.pexels.com/photos/4099469/pexels-photo-4099469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Commercial Floor Cleaner",
    description: "Heavy-duty formula designed for high-traffic commercial areas.",
    category: "Commercial",
    imageUrl: "https://images.pexels.com/photos/4108711/pexels-photo-4108711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const categories = [...new Set(products.map(product => product.category))];