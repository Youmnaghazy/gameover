import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  count:number=0;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}

ngOnInit(): void {
  this._ProductServices.getProducts().subscribe({
    next:(response)=> this.games = response.slice(0,20)
    
  })
}
}
