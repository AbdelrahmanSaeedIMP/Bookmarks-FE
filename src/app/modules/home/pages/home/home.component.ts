import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  books = [
    {
      bookID: '1',
      bookName: 'Node',
      bookDisc: 'Node.js is an open-source, cross-platform JavaScript runtime environment.',
      bookImage: '../../../../../assets/images/Node.png',
      bookmarked: true,
    },
    {
      bookID: '2',
      bookName: 'Express',
      bookDisc: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.',
      bookImage: '../../../../../assets/images/Express.png',
      bookmarked: true,
    },
    {
      bookID: '3',
      bookName: 'SQL',
      bookDisc: 'SQL is a standard language for storing, manipulating and retrieving data in databases.',
      bookImage: '../../../../../assets/images/SQL.jpg',
      bookmarked: false,
    },
    {
      bookID: '4',
      bookName: 'Angular',
      bookDisc: 'The web development framework for building the frontend for web applications',
      bookImage: '../../../../../assets/images/Angular.png',
      bookmarked: false,
    },
    {
      bookID: '5',
      bookName: 'TypeScript',
      bookDisc: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      bookImage: '../../../../../assets/images/TS.png',
      bookmarked: false,
    },
    {
      bookID: '6',
      bookName: 'Paranormal',
      bookDisc: 'Paranormal is an Egyptian supernatural-horror drama streaming television series based on Ahmed Khaled Tawfikb\'s best-selling supernatural book series Ma Waraa Al Tabiaa.',
      bookImage: '../../../../../assets/images/Paranormal.jpg',
      bookmarked: true,
    },
    {
      bookID: '7',
      bookName: 'Utopia',
      bookDisc: 'Utopia is a social novel by the Egyptian writer Ahmed Khaled Tawfiq. It was published in 2008 as his first novel to be published outside the Modern Arab Foundation.',
      bookImage: '../../../../../assets/images/Utopia.jpg',
      bookmarked: true,
    },
    {
      bookID: '8',
      bookName: 'C++',
      bookDisc: 'C++ is a popular programming language.',
      bookImage: '../../../../../assets/images/CPP.png',
      bookmarked: true,
    }
  ]

}
