import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class AllComponent implements OnInit {
  games:any[] = [];
  count:number=1;

  constructor(private _ProductServices:ProductsService){}

ngOnInit(): void {
  this._ProductServices.getbattle().subscribe({
    next:(response)=> this.games = response
    
  })
}
}

