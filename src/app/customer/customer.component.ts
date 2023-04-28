import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breakfast } from '../breakfast';
import { BreakfastService } from '../breakfast.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
   breakfasts:Breakfast[] = [];
  breakfastService: any;
  constructor(private api:BreakfastService , activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.search)
      this.breakfasts=this.breakfastService.getAllBreakfastBySearch(params.search);
      else
    this.breakfasts = api.getAll();
    })
  }
  ngOnInit() {
    
  }
  
  
}







