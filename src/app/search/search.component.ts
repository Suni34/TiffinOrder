import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 searchT=''
  constructor(activatedRoute: ActivatedRoute , private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.search)
      this.searchT=params.search;
    });
  }
  ngOnInit()  {

      
  }
   search(term:string){
    if(term)
    this.router.navigateByUrl('/search/'+term);
   }

}
