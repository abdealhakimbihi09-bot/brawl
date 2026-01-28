
export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  size: string;
  rating: number;
  devices: ('android' | 'ios')[];
  description?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}
