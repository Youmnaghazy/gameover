import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  count:number=0;
  games:any[] = [];
  constructor(private _ProductServices:ProductsService){}

  ngOnInit(): void {
    this._ProductServices.getplatformbrowser().subscribe({
      next:(response)=> this.games = response.slice(0,20)
    
    })
}
}
