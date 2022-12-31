import { Component, Input, OnInit } from '@angular/core';
import { bookResponse } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{

  @Input('bookData') bookData!: bookResponse;
  toggleHeart() {
    this.bookData.bookmarked = !this.bookData.bookmarked;
  }

}
