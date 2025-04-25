export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Industry {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  to: string;
}

export interface FormValues {
  name: string;
  email: string;
  company?: string;
  phone: string;
  date: string;
  message: string;
}