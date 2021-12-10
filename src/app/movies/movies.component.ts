import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  movies: any[] = [
    {
      title: 'horror1 title',
      description: 'horror1 overview text text',
      img: 'https://i.picsum.photos/id/683/200/300.jpg?hmac=LalV5DeTpQsFRVpqJKk0lZ_zRqag95TYBrqTW06L9yw',
      genre: 'horror',
    },
    {
      title: 'horror2 title',
      description: 'horror2 overview text text',
      img: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
      genre: 'horror',
    },
    {
      title: 'horror3 title',
      description: 'horror3 overview text text',
      img: 'https://i.picsum.photos/id/651/200/300.jpg?hmac=0w4DoCrs0gvMucmilCFXoqZAB9P3n94dVJ70mY8A4yQ',
      genre: 'horror',
    },
    {
      title: 'horror4 title',
      description: 'horror4 overview text text',
      img: 'https://i.picsum.photos/id/157/200/300.jpg?hmac=-OZWQAIRoAdYWp7-qnHO1wl5t0TO3BMoAgW3tmR7wgE',
      genre: 'horror',
    },
    {
      title: 'comedy1 title',
      description: 'comedy1 overview text text',
      img: 'https://i.picsum.photos/id/542/200/300.jpg?hmac=qD8M4ejDPlEc69pGT21BzB7CDiWOcElb_Ke7V8POjm8',
      genre: 'comedy',
    },
    {
      title: 'comedy2 title',
      description: 'comedy2 overview text text',
      img: 'https://i.picsum.photos/id/440/200/300.jpg?hmac=3Nx5MHMCVguEcZQ1M3RnSrCpHNn9sabFI5y6aYzvceQ',
      genre: 'comedy',
    },
    {
      title: 'comedy3 title',
      description: 'comedy3 overview text text',
      img: 'https://i.picsum.photos/id/1020/200/300.jpg?hmac=yG-OAzmEHXsUkXro-pf0fGaPnWTLuTJ8ohSos5IaAng',
      genre: 'comedy',
    },
    {
      title: 'drama1',
      description: 'drama1 overview text text',
      img: 'https://i.picsum.photos/id/376/200/300.jpg?hmac=gH_OWo7cSHKwU34tPONXdcjJuObIx0_5IswQHBjTXxg',
      genre: 'drama',
    },
    {
      title: 'drama2',
      description: 'drama2 overview text text',
      img: 'https://i.picsum.photos/id/550/200/300.jpg?hmac=XYJd_N4d9B5UYc7zHt9tTuzuQ4ol2byXjSGvqPAsRkI',
      genre: 'drama',
    },
    {
      title: 'drama3',
      description: 'drama3 overview text text',
      img: 'https://i.picsum.photos/id/839/200/300.jpg?hmac=6Q1AIZuZ4Zsy0Wa1Uc-FvgyhjmS1liv_dhSoh7ItyLY',
      genre: 'drama',
    },
    {
      title: 'drama4',
      description: 'drama4 overview text text',
      img: 'https://i.picsum.photos/id/837/200/300.jpg?hmac=Gt-0oRZYfIeEmweMdDSOJI6o3pk0tZitt5LO1KsbLC4',
      genre: 'drama',
    },
    {
      title: 'drama5',
      description: 'drama5 overview text text',
      img: 'https://i.picsum.photos/id/774/200/300.jpg?hmac=HLVTa6awH1Il_dvZGTiqNsqGiyR5RgPXTkD_pBW9L48',
      genre: 'drama',
    },
  ];
  ngOnInit(): void {
    console.log('fffffffffffffffffffffff');
    console.log(this.route.snapshot.params['id']);
  }
}
