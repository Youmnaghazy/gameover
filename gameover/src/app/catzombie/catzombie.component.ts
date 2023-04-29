import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catzombie',
  templateUrl: './catzombie.component.html',
  styleUrls: ['./catzombie.component.css']
})
export class CatzombieComponent implements OnInit{
  count:number=1;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}
  ngOnInit(): void {
    this._ProductServices.getzombie().subscribe({
      next:(response)=> this.games = response
      
    })
  }
  
}