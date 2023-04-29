import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catshooter',
  templateUrl: './catshooter.component.html',
  styleUrls: ['./catshooter.component.css']
})
export class CatshooterComponent implements OnInit{
  count:number=1;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}
  ngOnInit(): void {
    this._ProductServices.getcatshooter().subscribe({
      next:(response)=> this.games = response
      
    })
  }
  
}