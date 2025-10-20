export interface Vehicle {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  color: string;
  type: string;
  pricePerDay: number;
  dailyMiles: number;
  image: string;
  features: string[];
  description: string;
  category: 'ultra-luxury' | 'premium' | 'mid-tier' | 'standard';
}

export const vehicles: Vehicle[] = [
  {
    id: 'cadillac-escalade-2021',
    name: 'Cadillac Escalade',
    make: 'Cadillac',
    model: 'Escalade',
    year: 2021,
    color: 'White',
    type: 'SUV',
    pricePerDay: 1200,
    dailyMiles: 200,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    features: ['Premium Interior', 'Advanced Safety', 'Spacious Seating', 'Luxury Amenities'],
    description: 'Experience ultimate luxury and space with our 2021 Cadillac Escalade. Perfect for corporate events, weddings, or making a grand entrance.',
    category: 'ultra-luxury'
  },
  {
    id: 'lamborghini-urus-2024',
    name: 'Lamborghini Urus',
    make: 'Lamborghini',
    model: 'Urus',
    year: 2024,
    color: 'Green',
    type: 'SUV',
    pricePerDay: 1500,
    dailyMiles: 250,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
    features: ['Super SUV Performance', 'Exotic Styling', 'V8 Engine', 'Carbon Fiber Details'],
    description: 'The pinnacle of exotic SUV performance. Our 2024 Lamborghini Urus combines supercar performance with SUV practicality.',
    category: 'ultra-luxury'
  },
  {
    id: 'lamborghini-urus-2021',
    name: 'Lamborghini Urus',
    make: 'Lamborghini',
    model: 'Urus',
    year: 2021,
    color: 'Yellow',
    type: 'Sport',
    pricePerDay: 1400,
    dailyMiles: 100,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
    features: ['640 HP', 'Sport Mode', 'Exotic Design', 'Premium Sound System'],
    description: 'Turn heads with this stunning yellow Lamborghini Urus. The perfect blend of exotic performance and everyday usability.',
    category: 'ultra-luxury'
  },
  {
    id: 'mercedes-g63-2019',
    name: 'Mercedes-Benz G63',
    make: 'Mercedes-Benz',
    model: 'G63',
    year: 2019,
    color: 'Blue',
    type: 'SUV',
    pricePerDay: 550,
    dailyMiles: 150,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
    features: ['AMG Performance', 'Iconic Design', 'Off-Road Capable', 'Luxury Interior'],
    description: 'The legendary G-Wagon in stunning blue. Iconic design meets modern luxury and performance.',
    category: 'premium'
  },
  {
    id: 'mercedes-g63-2021',
    name: 'Mercedes-Benz G63',
    make: 'Mercedes-Benz',
    model: 'G63',
    year: 2021,
    color: 'Matte Gray',
    type: 'SUV',
    pricePerDay: 699,
    dailyMiles: 150,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    features: ['Matte Finish', 'AMG V8', 'Premium Package', 'Advanced Tech'],
    description: 'Exclusive matte gray finish on this powerful G63. Stand out with understated elegance and raw power.',
    category: 'premium'
  },
  {
    id: 'mercedes-gls-2021',
    name: 'Mercedes-Benz GLS-Class',
    make: 'Mercedes-Benz',
    model: 'GLS-Class',
    year: 2021,
    color: 'Black',
    type: 'SUV',
    pricePerDay: 850,
    dailyMiles: 200,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    features: ['7-Passenger Seating', 'Executive Rear Seats', 'Panoramic Roof', 'MBUX System'],
    description: 'The S-Class of SUVs. Perfect for executive transportation or family luxury travel.',
    category: 'premium'
  },
  {
    id: 'bmw-x7-2020',
    name: 'BMW X7',
    make: 'BMW',
    model: 'X7',
    year: 2020,
    color: 'Black',
    type: 'SUV',
    pricePerDay: 220,
    dailyMiles: 200,
    image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=800&q=80',
    features: ['Spacious Interior', 'Premium Comfort', 'Advanced Driver Assistance', 'Elegant Design'],
    description: 'BMW\'s flagship SUV offers commanding presence and refined luxury at an exceptional value.',
    category: 'mid-tier'
  },
  {
    id: 'bmw-850i-2019',
    name: 'BMW 850i',
    make: 'BMW',
    model: '850i',
    year: 2019,
    color: 'Black',
    type: 'Coupe',
    pricePerDay: 299,
    dailyMiles: 150,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    features: ['V8 Power', 'Sport Coupe', 'Luxury Grand Tourer', 'Premium Audio'],
    description: 'The ultimate grand touring coupe. Powerful V8 performance wrapped in elegant luxury.',
    category: 'mid-tier'
  },
  {
    id: 'tesla-cybertruck-2024',
    name: 'Tesla Cybertruck',
    make: 'Tesla',
    model: 'Cybertruck',
    year: 2024,
    color: 'Silver',
    type: 'Pickup-truck',
    pricePerDay: 499,
    dailyMiles: 300,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    features: ['Electric Power', 'Futuristic Design', 'Ultra-Hard Stainless Steel', 'Autopilot'],
    description: 'The future of trucks is here. Experience the revolutionary Cybertruck with its unique design and electric performance.',
    category: 'mid-tier'
  },
  {
    id: 'honda-accord-2020',
    name: 'Honda Accord',
    make: 'Honda',
    model: 'Accord',
    year: 2020,
    color: 'Black',
    type: 'Sedan',
    pricePerDay: 80,
    dailyMiles: 200,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
    features: ['Fuel Efficient', 'Reliable', 'Comfortable', 'Modern Tech'],
    description: 'Reliable and comfortable transportation at an unbeatable price. Perfect for everyday luxury.',
    category: 'standard'
  },
  {
    id: 'audi-q7-2018',
    name: 'Audi Q7',
    make: 'Audi',
    model: 'Q7',
    year: 2018,
    color: 'Silver',
    type: 'SUV',
    pricePerDay: 80,
    dailyMiles: 250,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    features: ['7-Passenger', 'Quattro AWD', 'Premium Interior', 'Virtual Cockpit'],
    description: 'Audi luxury and technology at an incredible value. Spacious, refined, and feature-packed.',
    category: 'standard'
  },
  {
    id: 'audi-a6-2016',
    name: 'Audi A6',
    make: 'Audi',
    model: 'A6',
    year: 2016,
    color: 'Black',
    type: 'Sedan',
    pricePerDay: 80,
    dailyMiles: 200,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    features: ['Executive Sedan', 'Quattro AWD', 'Premium Sound', 'Leather Interior'],
    description: 'Executive-class transportation without the executive price. Refined, powerful, and sophisticated.',
    category: 'standard'
  },
  {
    id: 'infiniti-qx80-2014',
    name: 'Infiniti QX80',
    make: 'Infiniti',
    model: 'QX80',
    year: 2014,
    color: 'White',
    type: 'SUV',
    pricePerDay: 100,
    dailyMiles: 100,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    features: ['Full-Size SUV', 'Powerful V8', 'Luxury Seating', 'Towing Capable'],
    description: 'Full-size luxury SUV with commanding presence and spacious interior for your entire group.',
    category: 'standard'
  },
  {
    id: 'chrysler-pacifica-2017',
    name: 'Chrysler Pacifica',
    make: 'Chrysler',
    model: 'Pacifica',
    year: 2017,
    color: 'Black',
    type: 'Minivan',
    pricePerDay: 120,
    dailyMiles: 200,
    image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&q=80',
    features: ['Family Friendly', 'Stow \'n Go Seating', 'Entertainment System', 'Spacious Cargo'],
    description: 'The perfect family vehicle. Luxury minivan with all the features for comfortable group travel.',
    category: 'standard'
  }
];

export const vehicleMakes = Array.from(new Set(vehicles.map(v => v.make))).sort();
export const vehicleTypes = Array.from(new Set(vehicles.map(v => v.type))).sort();
export const vehicleCategories = ['ultra-luxury', 'premium', 'mid-tier', 'standard'] as const;

