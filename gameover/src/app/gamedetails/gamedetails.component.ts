import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})
export class GamedetailsComponent implements OnInit{

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductsService){

  }
  gamedetails:any;
  gameId:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      // console.log(params.get('id'));
      this.gameId= params.get('id')
      
    });
    this._ProductService.getgameDetails(this.gameId).subscribe({
      next:(response)=> this.gamedetails = response
      
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed:20,
    navText: ['', '',''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

}
