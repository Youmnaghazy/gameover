import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catsocial',
  templateUrl: './catsocial.component.html',
  styleUrls: ['./catsocial.component.css']
})
export class CatsocialComponent implements OnInit{
  count:number=1;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}
  ngOnInit(): void {
    this._ProductServices.getcatsocial().subscribe({
      next:(response)=> this.games = response
      
    })
  }
  
}