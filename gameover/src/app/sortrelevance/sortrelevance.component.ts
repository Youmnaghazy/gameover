import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sortrelevance',
  templateUrl: './sortrelevance.component.html',
  styleUrls: ['./sortrelevance.component.css']
})
export class SortrelevanceComponent implements OnInit {
  count:number=1;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}

ngOnInit(): void {
  this._ProductServices.getsortrelevance().subscribe({
    next:(response)=> this.games = response
    
  })
}
}