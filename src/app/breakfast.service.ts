import { Injectable } from '@angular/core';
import { Breakfast } from './breakfast';
import { sample } from './menu';


@Injectable({
  providedIn: 'root'
})
export class BreakfastService {

  constructor() { }
  getAll(): Breakfast[] {
    return sample;
  }
  //food search
  getAllBreakfastBySearch(search: string) {
    return this.getAll().filter(Breakfast => Breakfast.name.toLowerCase().includes(search.toLowerCase()))
  }

    getBreakfastById(breakfastId : string){
     return this.getAll().find(breakfast => breakfast.id == breakfastId) ?? new Breakfast();
    }
  }
    
  
  