export type CoffeeProduct = {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
};

export type RecentSearch = {
  id: string;
  title: string;
};

export const recentSearches: RecentSearch[] = [{ id: 'cold', title: 'Cold' }];

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: 'americano',
    title: 'Americano',
    price: '$ 2.00',
    imageUrl:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'latte',
    title: 'Latte',
    price: '$ 4.00',
    imageUrl:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'lemonade',
    title: 'Lemonade',
    price: '$ 5.00',
    imageUrl:
      'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'matcha',
    title: 'Matcha',
    price: '$ 6.00',
    imageUrl:
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'flat-white',
    title: 'Flat White',
    price: '$ 4.50',
    imageUrl:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'spiced-tea',
    title: 'Spiced Tea',
    price: '$ 3.50',
    imageUrl:
      'https://images.unsplash.com/photo-1547825407-2d060104b7f8?auto=format&fit=crop&w=700&q=80',
  },
];
