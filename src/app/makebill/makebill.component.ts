import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makebill',
  templateUrl: './makebill.component.html',
  styleUrls: ['./makebill.component.css']
})
export class MakebillComponent {
  filteredProducts: any[];
  selectedProducts: any[];
  products: string[];
  productId: string[];
  price: number[];
  product: string;
  gst: number[];
  quantity: number;
  k: number;
  productInfo: string[][];
  pro: number[];
  constructor() {
    this.products = ['note', 'speaker', 'sharpner', 'eraser', 'Book', 'pencil', 'pen'];
    this.price = [10, 20, 30, 40, 50, 60, 70];
    this.gst = [8, 8 , 28 , 18, 12, 28, 18];
    this.productId = ['p1' , 'p2', 'p3', 'p4' , 'p5' , 'p6' , 'p7'];
    this.quantity = 1;
  }
    filterProducts(event) {
      this.filteredProducts = [];
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];
        if (product.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
          this.filteredProducts.push(product);
        }
      }
    }

    addProduct(product, quantity) {
    for (let i = 0; i < this.products.length; i++) {
if (product === this.products[i] ) {
  this.pro[ this.k++] = i;
break;
  }
    }

      this.selectedProducts = [
        { product : this.products[this.k] , price: this.price[this.k] }
      ];

    }
  }


