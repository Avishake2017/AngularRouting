import { Component, OnInit } from '@angular/core';
import { Product} from '../../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product[];
  constructor() { }

  ngOnInit() {

    this.product = [
      {id:1,name:'Pen',price:15},
      {id:2,name:'Pencil',price:20},
      {id:3,name:'Eraser',price:10},
      {id:4,name:'Sharpner',price:16},
      {id:5,name:'Scale',price:20}
    ];
  }

}
