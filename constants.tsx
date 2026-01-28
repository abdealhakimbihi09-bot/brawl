
import React from 'react';
import { Game, HeroSlide } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'h1',
    title: 'Assetto Corsa',
    subtitle: 'Now with Street Mode unlocked',
    imageUrl: 'https://i.postimg.cc/mgnN2HNH/images.jpg'
  },
  {
    id: 'h2',
    title: 'Naruto Storm 4',
    subtitle: 'Extreme graphics for Mobile',
    imageUrl: 'https://i.postimg.cc/8kdHBsD2/images-(2).jpg'
  },
  {
    id: 'h3',
    title: 'Minecraft',
    subtitle: 'Infinite possibilities awaits',
    imageUrl: 'https://i.postimg.cc/c4XB2jvQ/images-(1).jpg'
  }
];

export const GAMES_DATA: Game[] = [
  {
    id: '1',
    title: 'Forza Horizon 5 Mobile',
    imageUrl: 'https://i.postimg.cc/HxXmnXqb/nob-MVi-R9-KSBARnm-M232z7g.jpg',
    size: '1.2 GB',
    rating: 4.8,
    devices: ['android', 'ios']
  },
  {
    id: '2',
    title: 'Assetto Corsa Mobile',
    imageUrl: 'https://i.postimg.cc/3Nj3Sm9r/file-000000007c8062468b0418d6754371e4.png',
    size: '850 MB',
    rating: 4.5,
    devices: ['android', 'ios']
  },
  {
    id: '3',
    title: 'Euro Truck Sim 2',
    imageUrl: 'https://i.postimg.cc/TPhYdy2n/euro-truck-simulator-2-icon-logix-by-pumaile-d73z8u9.jpg',
    size: '920 MB',
    rating: 4.7,
    devices: ['android']
  },
  {
    id: '4',
    title: 'Minecraft',
    imageUrl: 'https://i.postimg.cc/mgLgnX0n/pixel-minecraft-style-land-background-vector.jpg',
    size: '190 MB',
    rating: 4.9,
    devices: ['android', 'ios']
  },
  {
    id: '5',
    title: 'GTA 5 Mobile',
    imageUrl: 'https://i.postimg.cc/c4NHR4Tr/gta5-(1).jpg',
    size: '2.5 GB',
    rating: 4.6,
    devices: ['android', 'ios']
  },
  {
    id: '6',
    title: 'Naruto Storm 4',
    imageUrl: 'https://i.postimg.cc/Ss2srnwy/images-(1).jpg',
    size: '1.5 GB',
    rating: 4.4,
    devices: ['android']
  },
  {
    id: '7',
    title: 'BeamNG.drive Mobile',
    imageUrl: 'https://i.postimg.cc/4x0R1WZ2/icon-2.png',
    size: '1.1 GB',
    rating: 4.3,
    devices: ['android', 'ios']
  },
  {
    id: '8',
    title: 'Fifa Street Mod',
    imageUrl: 'https://i.postimg.cc/gkYpcwN3/images-(7).jpg',
    size: '560 MB',
    rating: 4.8,
    devices: ['android', 'ios']
  },
  {
    id: '10',
    title: 'Rematch Mobile',
    imageUrl: 'https://i.postimg.cc/RVTYgX1v/IMG-5697.avif',
    size: '340 MB',
    rating: 4.1,
    devices: ['android', 'ios']
  },
  {
    id: '11',
    title: 'Spider-Man 2',
    imageUrl: 'https://i.postimg.cc/2jLmXR35/images.jpg',
    size: '2.8 GB',
    rating: 4.9,
    devices: ['android', 'ios']
  },
  {
    id: '12',
    title: 'Jump force',
    imageUrl: 'https://i.postimg.cc/WbrNtLvc/4b392164f89981c794c943b22936cff3.jpg',
    size: '1.4 GB',
    rating: 4.5,
    devices: ['android', 'ios']
  },
  {
    id: '13',
    title: 'WWE 2K25 Mobile',
    imageUrl: 'https://i.postimg.cc/52gMFfKk/images-(2).jpg',
    size: '2.1 GB',
    rating: 4.7,
    devices: ['android', 'ios']
  },
  {
    id: '14',
    title: 'One piece mugen',
    imageUrl: 'https://i.postimg.cc/D0L9fhbW/images-5-(1).jpg',
    size: '450 MB',
    rating: 4.3,
    devices: ['android', 'ios']
  },
  {
    id: '15',
    title: 'One piece fighting path',
    imageUrl: 'https://i.postimg.cc/WbmBQ2Vg/images-4-(1).jpg',
    size: '1.6 GB',
    rating: 4.6,
    devices: ['android', 'ios']
  },
  {
    id: '16',
    title: 'The Last of Us 2 Mobile',
    imageUrl: 'https://i.postimg.cc/C1ftJ0Jz/1752250740425.jpg',
    size: '3.2 GB',
    rating: 4.8,
    devices: ['android', 'ios']
  }
];

export const Icons = {
  Back: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  Android: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414C17.0609 15.3414 16.6917 14.9654 16.6917 14.5054C16.6917 14.0454 17.0609 13.6694 17.523 13.6694C17.985 13.6694 18.3541 14.0454 18.3541 14.5054C18.3541 14.9654 17.9851 15.3414 17.523 15.3414ZM6.47702 15.3414C6.015 15.3414 5.64585 14.9654 5.64585 14.5054C5.64585 14.0454 6.015 13.6694 6.47702 13.6694C6.93904 13.6694 7.30819 14.0454 7.30819 14.5054C7.30819 14.9654 6.93904 15.3414 6.47702 15.3414ZM18.2721 10.2866L19.9822 7.27264C20.1062 7.05465 20.0302 6.77667 19.8122 6.65168C19.5932 6.52769 19.3163 6.60368 19.1913 6.82167L17.4474 9.90464C15.8955 9.19961 14.062 8.79963 12.0001 8.79963C9.93816 8.79963 8.1047 9.19961 6.55276 9.90464L4.80884 6.82167C4.68385 6.60368 4.40687 6.52769 4.18788 6.65168C3.96989 6.77667 3.8939 7.05465 4.01789 7.27264L5.72803 10.2866C2.39923 12.1855 0.165246 15.6554 0.000257492 19.7023H24C23.835 15.6554 21.601 12.1855 18.2721 10.2866Z"/></svg>
  ),
  Apple: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2.01.76-3.27.82-1.31.05-2.33-1.32-3.15-2.5-1.71-2.45-3-6.93-1.22-10 1.05-1.53 2.62-2.5 4.31-2.53 1.29-.03 2.51.87 3.3.87.79 0 2.26-1.07 3.81-.91 1.48.06 2.63.59 3.42 1.49-.06.05-1.84 1.06-1.82 3.23.03 2.65 2.18 3.5 2.21 3.51-.02.06-.35 1.22-1.2 2.33M14.9 3.2c.69-.83 1.15-1.98.98-3.13-1 .04-2.21.66-2.92 1.5-.63.74-1.18 1.9-.99 3.01 1.12.09 2.23-.54 2.93-1.38z"/></svg>
  ),
  Download: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  ),
  Star: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  ),
  Logo: () => (
    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">M</div>
  )
};
