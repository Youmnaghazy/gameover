import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catrpg',
  templateUrl: './catrpg.component.html',
  styleUrls: ['./catrpg.component.css']
})
export class CatrpgComponent implements OnInit{
  count:number=0;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}
  ngOnInit(): void {
    this._ProductServices.getcatrpg().subscribe({
      next:(response)=> this.games = response.slice(0,20)
      
    })
  }
  
}