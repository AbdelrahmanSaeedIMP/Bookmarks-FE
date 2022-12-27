import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    HeaderComponent,
    MainLayoutComponent
  ]
})
export class CoreModule { }
