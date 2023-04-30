import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakfast } from '../models/breakfast';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_URL } from '../url';


@Injectable({
  providedIn: 'root'
})
export class BreakfastService {
  getAllBreakfastBySearchItem(search: any): Observable<Breakfast[]> {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Breakfast[]> {
    return this.httpClient.get<Breakfast[]>(FOODS_URL);
  }
  //food search
  getAllBreakfastBySearch(searchItem: string) {
    return this.httpClient.get<Breakfast[]>(FOODS_BY_SEARCH_URL + searchItem)
  }

  getBreakfastById(breakfastId: string) {
    return this.httpClient.get<Breakfast>(FOODS_BY_ID_URL + breakfastId)
    }
}


