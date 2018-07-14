import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { SignupComponent } from './signup/signup.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AppRoutingModule } from './app-routing.module';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import { MakebillComponent } from './makebill/makebill.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AddproductComponent,
    MakebillComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    AppRoutingModule,
    KeyFilterModule,
    ListboxModule,
    DropdownModule,
    AutoCompleteModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
