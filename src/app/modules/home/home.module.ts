import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './components/book/book.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    HomeComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule
  ]
})
export class HomeModule { }
