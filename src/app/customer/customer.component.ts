import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Breakfast } from '../models/breakfast';
import { BreakfastService } from '../services/breakfast.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  breakfasts: Breakfast[] = [];
  breakfastService: any;
  constructor(private api: BreakfastService, activatedRoute: ActivatedRoute) {
    let breakfastObservable: Observable<Breakfast[]>
    activatedRoute.params.subscribe((params) => {
      if (params.searchItem)
        breakfastObservable = this.api.getAllBreakfastBySearchItem(params.search);
      else
        breakfastObservable = api.getAll();
        breakfastObservable.subscribe((serverFoods)=>{
          this.breakfasts = serverFoods;
        })
    })
  }
  ngOnInit() {

  }


}







