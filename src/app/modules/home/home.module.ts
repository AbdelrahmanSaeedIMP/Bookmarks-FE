import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './components/book/book.component';
import {CardModule} from 'primeng/card';
import { BookService } from 'src/app/core/services/book.service';


@NgModule({
  declarations: [
    HomeComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule
  ],
  providers: [
    BookService
  ]
})
export class HomeModule { }
