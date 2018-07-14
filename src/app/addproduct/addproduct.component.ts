import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  gst: SelectItem[];
  constructor() {
    this.gst = [
      {label: '3%', value: {id: 1, value: 3}},
      {label: '12%', value: {id: 2, value: 12}},
      {label: '18%', value: {id: 3, value: 18}},
      {label: '28%', value: {id: 4, value: 28}},
    ];
  }
  ngOnInit() {

  }

}
