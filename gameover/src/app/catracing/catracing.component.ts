import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catracing',
  templateUrl: './catracing.component.html',
  styleUrls: ['./catracing.component.css']
})
export class CatracingComponent implements OnInit{
  count:number=0;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}
  ngOnInit(): void {
    this._ProductServices.getcatracing().subscribe({
      next:(response)=> this.games = response.slice(0,20)
      
    })
  }
  
}