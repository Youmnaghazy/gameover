import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  games:any[] = [];
  count:number=1;

  constructor(private _ProductServices:ProductsService){}

ngOnInit(): void {
  this._ProductServices.getProducts().subscribe({
    next:(response)=> this.games = response
    
  })
}
}

