import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{

  isFavourite = false;
  heartClass = 'pi pi-heart';
  toggleHeart() {
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite === true) {
      this.heartClass = 'pi pi-heart-fill';
    }
    else {
      this.heartClass = 'pi pi-heart';
    }
  }

}
