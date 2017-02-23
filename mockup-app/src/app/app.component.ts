import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loops: number = 12;
  moments: any[] = [
    {
      'title': 'This is a title',
      'imgUrl': '../assets/1.jpg'
    },
    {

      'title': 'There was a title here',
      'imgUrl': '../assets/2.jpg'
    },
    {
      'title': 'Yet another title',
      'imgUrl': '../assets/3.jpg'
    }
  ];

  public fullMoments: any[] = [];

  constructor() {
    this.loops = 12;
    for (let i of this.range(this.loops)) {
      this.fullMoments[i-1] = this.moments[Math.floor((Math.random() * 3) + 0)]
    }
  }

  range = function (value) {
    let a = [];
    for (let i = 0; i < value; ++i) { a.push(i + 1) } return a;
  }

}
