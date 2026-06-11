export interface Project {
  id: string
  name: string
  locality: string
  area: string
  bhk: string
  priceMin: number   // lakhs
  priceMax: number   // lakhs
  seatsTotal: number
  seatsFilled: number
  appPath: string    // path on app.ghardhundo.com
}

export const PROJECTS: Project[] = [
  {
    id: 'lodha-belmondo',
    name: 'Lodha Belmondo',
    locality: 'Wakad',
    area: 'West Pune',
    bhk: '2BHK / 3BHK',
    priceMin: 75,
    priceMax: 95,
    seatsTotal: 5,
    seatsFilled: 4,
    appPath: '/projects/lodha-belmondo',
  },
  {
    id: 'godrej-woodsville',
    name: 'Godrej Woodsville',
    locality: 'Baner',
    area: 'West Pune',
    bhk: '2BHK / 3BHK',
    priceMin: 58,
    priceMax: 78,
    seatsTotal: 5,
    seatsFilled: 3,
    appPath: '/projects/godrej-woodsville',
  },
  {
    id: 'kolte-patil-24k',
    name: 'Kolte Patil 24K',
    locality: 'Kharadi',
    area: 'East Pune',
    bhk: '3BHK',
    priceMin: 105,
    priceMax: 130,
    seatsTotal: 5,
    seatsFilled: 2,
    appPath: '/projects/kolte-patil-24k',
  },
  {
    id: 'vtp-belair',
    name: 'VTP Belair',
    locality: 'Moshi',
    area: 'North Pune',
    bhk: '1BHK / 2BHK',
    priceMin: 45,
    priceMax: 62,
    seatsTotal: 5,
    seatsFilled: 1,
    appPath: '/projects/vtp-belair',
  },
  {
    id: 'rohan-ananta',
    name: 'Rohan Ananta',
    locality: 'Baner',
    area: 'West Pune',
    bhk: '2BHK',
    priceMin: 68,
    priceMax: 82,
    seatsTotal: 5,
    seatsFilled: 3,
    appPath: '/projects/rohan-ananta',
  },
  {
    id: 'gera-island-of-joy',
    name: 'Gera Isle of Joy',
    locality: 'Kharadi',
    area: 'East Pune',
    bhk: '2BHK / 3BHK',
    priceMin: 85,
    priceMax: 110,
    seatsTotal: 5,
    seatsFilled: 4,
    appPath: '/projects/gera-isle-of-joy',
  },
]
