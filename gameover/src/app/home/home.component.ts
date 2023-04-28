import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}

ngOnInit(): void {
  this._ProductServices.getProducts().subscribe({
    next:(response)=> this.games = response.slice(7,10)
    
  })
}
}



