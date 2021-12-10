import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css'],
})
export class MoviedetailComponent implements OnInit {
  @Input() movie: any;
  constructor() {
    console.log('1111111111111111111111');
    console.log(this.movie);
  }

  ngOnInit(): void {
    console.log('3333333333333333');
    console.log(this.movie);
  }
}
