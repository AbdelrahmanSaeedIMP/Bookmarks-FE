import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{

  @Input('bookData') bookData = {
    bookID: '1',
    bookName: 'book name',
    bookDisc: 'Lorem ipsum dolor sit amet. Inventore sed consequuntur error repudiandae',
    bookImage: '../../../../../assets/images/book.jpg',
    bookmarked: false,
  }
  toggleHeart() {
    this.bookData.bookmarked = !this.bookData.bookmarked;
  }

}
