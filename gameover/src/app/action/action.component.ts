import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  count:number=1;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}

ngOnInit(): void {
  this._ProductServices.getaction().subscribe({
    next:(response)=> this.games = response
    
  })
}
}