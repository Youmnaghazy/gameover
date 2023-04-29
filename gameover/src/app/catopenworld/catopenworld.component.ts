import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catopenworld',
  templateUrl: './catopenworld.component.html',
  styleUrls: ['./catopenworld.component.css']
})
export class CatopenworldComponent implements OnInit{
  count:number=1;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}
  ngOnInit(): void {
    this._ProductServices.getcatopen().subscribe({
      next:(response)=> this.games = response
      
    })
  }
  
}