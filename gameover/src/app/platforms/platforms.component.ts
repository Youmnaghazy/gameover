import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
  count:number=0;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}

  ngOnInit(): void {
    this._ProductServices.getplatformpc().subscribe({
      next:(response)=> this.games = response.slice(0,20)
    
    })
}
}
