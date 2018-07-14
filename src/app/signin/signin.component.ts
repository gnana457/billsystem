import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  mail = ' ';
  password = ' ';
  ngOnInit() {
  }
  signin( email , password ) {
    if ( email === 'admin' && password === '1234') {
      window.location.href = '/addproduct';
    }
    if ( email === 'staff' && password === '4321' ) {
      window.location.href = '/makebill';
    }
  }

}
