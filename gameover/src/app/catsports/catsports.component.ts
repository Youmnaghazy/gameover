import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catsports',
  templateUrl: './catsports.component.html',
  styleUrls: ['./catsports.component.css']
})
export class CatsportsComponent implements OnInit{
  count:number=0;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}
  ngOnInit(): void {
    this._ProductServices.getcatsports().subscribe({
      next:(response)=> this.games = response.slice(0,20)
      
    })
  }
  
}