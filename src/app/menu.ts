import { Breakfast } from "./breakfast";

export const sample:Breakfast[] = [
    {
        id :'1',
        name:'Idly',
        price:30,
        tag:['FastFood','Idly'],
        favorite: true,
        stars: 4.5,
        imageUrl: './assets/Images/Idly.avif',
        origins:['AP'],
        cookTime:'20-30',
    },
    {
        id :'2',
        name:'Dosa',
        price:35,
        tag:['FastFood','Dosa'],
        favorite: true,
        stars: 4.0,
        imageUrl:'./assets/Images/dosa.jpg',
        origins:['AP'],
        cookTime:'10-20',
    },
    {
        id :'3',
        name:'Masala Dosa',
        price:40,
        tag:['FastFood','Dosa'],
        favorite: true,
        stars: 4.5,
        imageUrl:'./assets/Images/masaladosa.jpg',
        origins:['AP'],
        cookTime:'20-30',
    }

]
   


