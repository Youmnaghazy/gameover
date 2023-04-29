import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sortpopularity',
  templateUrl: './sortpopularity.component.html',
  styleUrls: ['./sortpopularity.component.css']
})
export class SortpopularityComponent implements OnInit {
  count:number=1;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}

ngOnInit(): void {
  this._ProductServices.getsortpopularity().subscribe({
    next:(response)=> this.games = response
    
  })
}
}