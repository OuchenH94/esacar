export interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Dacia Duster",
    category: "SUV Compact",
    price: 350,
    image: "https://images.unsplash.com/photo-1604395924490-a3a18bb7193e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWNpYSUyMGR1c3RlcnxlbnwxfHx8fDE3ODE5ODI1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 5,
    transmission: "Manuelle",
    fuel: "Diesel",
    features: ["Climatisation", "Bluetooth", "GPS"],
  },
  {
    id: 2,
    name: "Renault Clio",
    category: "Citadine",
    price: 250,
    image: "https://images.unsplash.com/photo-1666335009164-2597314da8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5hdWx0JTIwY2xpb3xlbnwxfHx8fDE3ODE5ODI1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    features: ["Climatisation", "Radio", "USB"],
  },
  {
    id: 3,
    name: "Peugeot 208",
    category: "Citadine",
    price: 280,
    image: "https://images.unsplash.com/photo-1636331997172-805266998102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXVnZW90JTIwMjA4fGVufDF8fHx8MTc4MTk4MjU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    features: ["Climatisation", "GPS", "Bluetooth", "Caméra de recul"],
  },
  {
    id: 4,
    name: "Volkswagen Golf",
    category: "Berline Compacte",
    price: 400,
    image: "https://images.unsplash.com/photo-1605475300127-0a31e8273bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xrc3dhZ2VuJTIwZ29sZnxlbnwxfHx8fDE3ODE5ODI1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 5,
    transmission: "Automatique",
    fuel: "Diesel",
    features: ["Climatisation", "GPS", "Bluetooth", "Régulateur de vitesse"],
  },
  {
    id: 5,
    name: "Toyota Land Cruiser",
    category: "SUV Premium",
    price: 850,
    image: "https://images.unsplash.com/photo-1650530579355-7ad9d4766043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lvdGElMjBsYW5kJTIwY3J1aXNlcnxlbnwxfHx8fDE3ODE5ODI1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 7,
    transmission: "Automatique",
    fuel: "Diesel",
    features: ["Climatisation", "GPS", "4x4", "Sièges cuir", "Caméra 360°"],
  },
  {
    id: 6,
    name: "Mercedes Classe C",
    category: "Berline Luxe",
    price: 750,
    image: "https://images.unsplash.com/photo-1624085568108-36410cfe4d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMHNlZGFufGVufDF8fHx8MTc4MTk4MjU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 5,
    transmission: "Automatique",
    fuel: "Diesel",
    features: ["Climatisation", "GPS", "Sièges cuir", "Bluetooth", "Toit panoramique"],
  },
  {
    id: 7,
    name: "BMW Série 3",
    category: "Berline Luxe",
    price: 700,
    image: "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBzZXJpZXN8ZW58MXx8fHwxNzgxOTgyNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    features: ["Climatisation", "GPS", "Sièges cuir", "Régulateur adaptatif"],
  },
  {
    id: 8,
    name: "Hyundai Tucson",
    category: "SUV",
    price: 450,
    image: "https://images.unsplash.com/photo-1575090536203-2a6193126514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwdHVjc29ufGVufDF8fHx8MTc4MTk4MjU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    features: ["Climatisation", "GPS", "Bluetooth", "Caméra de recul"],
  },
  {
    id: 9,
    name: "SUV Premium",
    category: "SUV Luxe",
    price: 900,
    image: "https://images.unsplash.com/photo-1696865536569-6ed0d72702b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBtb3JvY2NvfGVufDF8fHx8MTc4MTk4MjU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 7,
    transmission: "Automatique",
    fuel: "Diesel",
    features: ["Climatisation", "GPS", "4x4", "Sièges cuir", "Toit panoramique", "Sound system"],
  },
  {
    id: 10,
    name: "Citadine Économique",
    category: "Citadine",
    price: 220,
    image: "https://images.unsplash.com/photo-1596832323822-b6b383a0967b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwY2FyJTIwY2l0eXxlbnwxfHx8fDE3ODE5ODI1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    features: ["Climatisation", "Radio"],
  },
];
