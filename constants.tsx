
import { Service, Professional, Testimonial } from './types';

export const SALON_DATA = {
  name: "Studio Alesandra Sena",
  tagline: "Beleza e Bem-estar com Especialização e Carinho",
  address: "Rua Uirassu de Assis Batista - Castelo Branco, Salvador - BA",
  hours: "08:00 às 18:00",
  phone: "71 98506-2361",
  whatsapp: "71985062361",
  email: "tandasena210@gmail.com",
  instagram: "studioalesandrasena",
  facebook: "Studioalesandrasena",
  tiktok: "Studioalesandrasena",
  googleMaps: "https://maps.app.goo.gl/5C3CN89nfMG7eXJo8?g_st=ic",
  yearsActive: 4,
  paymentMethods: ["Dinheiro", "Pix", "Cartão de Débito", "Cartão de Crédito"],
  differentiation: "Especialização em alongamentos e spa dos pés com atendimento personalizado."
};

export const SERVICES: Service[] = [
  // Nails
  { name: "Alongamento em Gel", category: 'Nails' },
  { name: "Banho em Gel", category: 'Nails' },
  { name: "Esmaltação em Gel", category: 'Nails' },
  { name: "Blindagem", category: 'Nails' },
  { name: "Manicure & Pedicure", category: 'Nails' },
  { name: "Postiça Realista", category: 'Nails' },
  { name: "Spa dos Pés", category: 'Spa' },
  // Hair
  { name: "Progressiva", category: 'Hair' },
  { name: "Selagem Térmica", category: 'Hair' },
  { name: "Botox Capilar", category: 'Hair' },
  { name: "Guanidina", category: 'Hair' },
  { name: "Hidróxidos", category: 'Hair' },
  { name: "Megahair", category: 'Hair' },
  { name: "Coloração", category: 'Hair' },
  { name: "Corte", category: 'Hair' },
  { name: "Cronograma Capilar", category: 'Hair' },
  { name: "Mechas & Luzes", category: 'Hair' },
];

export const PROFESSIONALS: Professional[] = [
  { name: "Alesandra", role: "Cabeleireira e Manicure" },
  { name: "Bruna", role: "Manicure e Nail Design" },
  { name: "Thalita", role: "Manicure" },
  { name: "Soraria", role: "Manicure" },
];

export const TESTIMONIALS: Testimonial[] = [
  { author: "Ana Paula", text: "Melhor spa dos pés que já fiz! Saí renovada e com as unhas impecáveis.", source: "Instagram" },
  { author: "Carla Silva", text: "A Alesandra é uma excelente profissional, meu cabelo nunca esteve tão saudável.", source: "Instagram" },
  { author: "Mariana Costa", text: "As meninas são super atenciosas e o alongamento em gel dura muito!", source: "Instagram" },
];
