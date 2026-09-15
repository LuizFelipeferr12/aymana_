export type Category = "Todos" | "Bolos de Pote" | "Fatias Especiais" | "Doces & Brigadeiros" | "Sobremesas de Domingo";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
}

export const CATEGORIES: Category[] = [
  "Todos",
  "Bolos de Pote",
  "Fatias Especiais",
  "Doces & Brigadeiros",
  "Sobremesas de Domingo",
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Bolo de Pote Ninho com Morango",
    description: "Massa branca super fofinha, creme de ninho suave e pedaços de morangos frescos. O sabor do céu em um potinho.",
    price: 15.00,
    category: "Bolos de Pote",
    imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Bolo de Pote Cenoura com Chocolate",
    description: "O clássico irresistível com muita calda de brigadeiro belga e massa de cenoura artesanal.",
    price: 14.00,
    category: "Bolos de Pote",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Fatia Red Velvet",
    description: "Uma generosa fatia de bolo red velvet com nosso clássico recheio e cobertura de cream cheese. Perfeição em cada mordida.",
    price: 18.00,
    category: "Fatias Especiais",
    imageUrl: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Brigadeiro Gourmet Tradicional",
    description: "Brigadeiro feito com puro cacau e chocolate belga. Caixa com 4 unidades.",
    price: 12.00,
    category: "Doces & Brigadeiros",
    imageUrl: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Banoffee Divina",
    description: "Base crocante de biscoito, doce de leite suave, bananas frescas, chantilly e um toque de cacau.",
    price: 22.00,
    category: "Sobremesas de Domingo",
    imageUrl: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Brownie Supremo",
    description: "Casquinha crocante por fora e muito cremoso por dentro, recheado com brigadeiro meio amargo.",
    price: 16.00,
    category: "Fatias Especiais",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=600&auto=format&fit=crop"
  }
];
