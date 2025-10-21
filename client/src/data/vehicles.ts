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
  images: string[]; // Gallery images
  video?: string; // Optional video URL
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
    image: '/vehicles/cadillac-escalade-2021-main.webp',
    images: [
      '/vehicles/cadillac-escalade-2021-main.webp',
      '/vehicles/cadillac-escalade-2.webp',
      '/vehicles/cadillac-escalade-3.webp',
      '/vehicles/cadillac-escalade-4.webp',
      '/vehicles/cadillac-escalade-5.webp'
    ],
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
    image: '/vehicles/lamborghini-urus-2024-green-main.webp',
    images: [
      '/vehicles/lamborghini-urus-2024-green-main.webp',
      '/vehicles/lamborghini-urus-1.webp',
      '/vehicles/lamborghini-urus-2.webp',
      '/vehicles/lamborghini-urus-3.webp',
      '/vehicles/lamborghini-urus-4.webp',
      '/vehicles/lamborghini-urus-5.webp',
      '/vehicles/lamborghini-urus-6.webp',
      '/vehicles/lamborghini-urus-7.webp',
      '/vehicles/lamborghini-urus-8.webp',
      '/vehicles/lamborghini-urus-9.webp',
      '/vehicles/lamborghini-urus-10.webp'
    ],
    video: '/UrusS.MP4',
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
    image: '/vehicles/1_fZKytaRAHmwaqNth2rrNqg_1760998420015_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvbGFtYm9yZ2hpbmlfdXJ1c18yMDIxX3llbGxvdw.webp',
    images: [
      '/vehicles/1_fZKytaRAHmwaqNth2rrNqg_1760998420015_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvbGFtYm9yZ2hpbmlfdXJ1c18yMDIxX3llbGxvdw.webp',
      '/vehicles/Lamborghini-Urus-1.jpeg',
      '/vehicles/Lamborghini-Urus-2.jpeg',
      '/vehicles/Lamborghini-Urus-3.jpeg',
      '/vehicles/Lamborghini-Urus-4.jpeg',
      '/vehicles/Lamborghini-Urus-5.jpeg'
    ],
    video: '/yellowurus.MP4',
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
    image: '/vehicles/mercedes-g63-2019-blue-main.webp',
    images: [
      '/vehicles/mercedes-g63-2019-blue-main.webp',
      "/vehicles/'mercedes-benz-g63'-1.webp",
      "/vehicles/'mercedes-benz-g63'-2.webp",
      "/vehicles/'mercedes-benz-g63'-3.webp",
      "/vehicles/'mercedes-benz-g63'-4.webp",
      "/vehicles/'mercedes-benz-g63'-5.webp"
    ],
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
    image: '/vehicles/0_5CYYLDNwZdfSirs8pXM4JH_1760998418988_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvbWVyY2VkZXMtYmVuel9nNjNfMjAyM19zaWx2ZXI.webp',
    images: [
      '/vehicles/0_5CYYLDNwZdfSirs8pXM4JH_1760998418988_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvbWVyY2VkZXMtYmVuel9nNjNfMjAyM19zaWx2ZXI.webp',
      '/vehicles/mercedes-benz-g63-1.webp',
      '/vehicles/mercedes-benz-g63-2.webp',
      '/vehicles/mercedes-benz-g63-3.webp',
      '/vehicles/mercedes-benz-g63-4.webp',
      '/vehicles/mercedes-benz-g63-5.webp',
      '/vehicles/mercedes-benz-g63-6.webp',
      '/vehicles/mercedes-benz-g63-7.webp',
      '/vehicles/mercedes-benz-g63-8.webp',
      '/vehicles/mercedes-benz-g63-9.webp',
      '/vehicles/mercedes-benz-g63-10.webp',
      '/vehicles/mercedes-benz-g63-11.webp'
    ],
    video: '/GWagon.MP4',
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
    image: '/vehicles/2_GwhPeCZ6RCv3qiQNW45pl9_1760998414422_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvTWVyY2VkZXMtQmVuel9HTFMtQ2xhc3NfMjAyMV9CbGFjaw.webp',
    images: [
      '/vehicles/2_GwhPeCZ6RCv3qiQNW45pl9_1760998414422_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvTWVyY2VkZXMtQmVuel9HTFMtQ2xhc3NfMjAyMV9CbGFjaw.webp',
      '/vehicles/mercedes-benz-gls-class-0.webp',
      '/vehicles/mercedes-benz-gls-class-1.webp',
      '/vehicles/mercedes-benz-gls-class-2.webp',
      '/vehicles/mercedes-benz-gls-class-3.webp',
      '/vehicles/mercedes-benz-gls-class-4.webp',
      '/vehicles/mercedes-benz-gls-class-7.webp',
      '/vehicles/mercedes-benz-gls-class-8.webp',
      '/IMG_1400.JPG'
    ],
    video: '/maybach.MP4',
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
    image: '/vehicles/5_7I1oftbveUUZGAGDA52kCy_1760998433637_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvQk1XX1g3XzIwMjBfQmxhY2s.webp',
    images: [
      '/vehicles/5_7I1oftbveUUZGAGDA52kCy_1760998433637_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvQk1XX1g3XzIwMjBfQmxhY2s.webp',
      '/vehicles/bmw-x7-1.webp',
      '/vehicles/bmw-x7-2.webp',
      '/vehicles/bmw-x7-3.webp',
      '/vehicles/bmw-x7-4.webp',
      '/vehicles/bmw-x7-5.webp'
    ],
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
    image: '/vehicles/4_1LmpPKw5kqmbmVCzPz3SoB_1760998447636_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvQk1XXzg1MGlfMjAxOV9CbGFjaw.webp',
    images: [
      '/vehicles/4_1LmpPKw5kqmbmVCzPz3SoB_1760998447636_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvQk1XXzg1MGlfMjAxOV9CbGFjaw.webp',
      '/vehicles/bmw-850i-2.webp',
      '/vehicles/bmw-850i-3.webp',
      '/vehicles/bmw-850i-4.webp',
      '/vehicles/bmw-850i-5.webp',
      '/vehicles/bmw-850i-6.webp',
      '/vehicles/bmw-850i-7.webp',
      '/vehicles/bmw-850i-8.webp',
      '/vehicles/bmw-850i-9.webp',
      '/vehicles/bmw-850i-10.webp',
      '/vehicles/bmw-850i-11.webp',
      '/vehicles/bmw-850i-12.webp'
    ],
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
    image: '/vehicles/6_5w5E3ZVXJEhzc6fyYeF4J1_1760998426194_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvVGVzbGFfQ3liZXJ0cnVja18yMDI0X1NpbHZlcg.webp',
    images: [
      '/vehicles/6_5w5E3ZVXJEhzc6fyYeF4J1_1760998426194_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvVGVzbGFfQ3liZXJ0cnVja18yMDI0X1NpbHZlcg.webp',
      '/vehicles/tesla-cybertruck-1.webp',
      '/vehicles/tesla-cybertruck-2.webp',
      '/vehicles/tesla-cybertruck-3.webp',
      '/vehicles/tesla-cybertruck-4.webp'
    ],
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
    image: '/vehicles/3_nsBhOY2uTSr69s2P9SZs99_1760998425184_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvMjAyMF9Ib25kYV9BY2NvcmRfQmxhY2s.webp',
    images: [
      '/vehicles/3_nsBhOY2uTSr69s2P9SZs99_1760998425184_na1fn_L2hvbWUvdWJ1bnR1L3N0cmFkYS1hdXRvLWdyb3VwL2NsaWVudC9wdWJsaWMvdmVoaWNsZXMvMjAyMF9Ib25kYV9BY2NvcmRfQmxhY2s.webp',
      '/vehicles/Honda-Accord-1.avif',
      '/vehicles/Honda-Accord-2.avif',
      '/vehicles/Honda-Accord-3.avif',
      '/vehicles/Honda-Accord-4.avif',
      '/vehicles/Honda-Accord-5.avif',
      '/vehicles/Honda-Accord-6.avif',
      '/vehicles/Honda-Accord-7.avif',
      '/vehicles/Honda-Accord-8.avif'
    ],
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
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'],
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
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'],
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
    images: ['https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'],
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
    images: ['https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&q=80'],
    features: ['Family Friendly', 'Stow \'n Go Seating', 'Entertainment System', 'Spacious Cargo'],
    description: 'The perfect family vehicle. Luxury minivan with all the features for comfortable group travel.',
    category: 'standard'
  }
];

export const vehicleMakes = Array.from(new Set(vehicles.map(v => v.make))).sort();
export const vehicleTypes = Array.from(new Set(vehicles.map(v => v.type))).sort();
export const vehicleCategories = ['ultra-luxury', 'premium', 'mid-tier', 'standard'] as const;

