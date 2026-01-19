
export interface Service {
  name: string;
  category: 'Nails' | 'Hair' | 'Spa';
}

export interface Professional {
  name: string;
  role: string;
}

export interface Testimonial {
  author: string;
  text: string;
  source: string;
}
