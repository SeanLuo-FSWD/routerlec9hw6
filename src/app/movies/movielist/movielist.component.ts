import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  genre: string = 'all';
  @ViewChild('genreInput', { static: true })
  genreInput: ElementRef;

  page: number;
  totalPages: number;

  @Input() movies: any[];

  genreMovies: any[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  onChangeGenre() {
    console.log(this.genreInput.nativeElement.value);
    this.genre = this.genreInput.nativeElement.value;
    this.router.navigate(['1']);
    this.calculatePage(2);

    // This is an alternative but not preferred way
    // this.router.navigate(["../", this.id, "edit"], { relativeTo: this.route });
  }

  onNavigate(next: boolean) {
    if (next) {
      if (this.page < this.totalPages) {
        this.router.navigate([this.page + 1]);
        this.calculatePage(2);
      }
    } else {
      if (this.page > 1) {
        this.router.navigate([this.page - 1]);
        this.calculatePage(2);
      }
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.page = +params['id'];

      this.calculatePage(2);
    });
    console.log('1111111111111111111111');
    console.log(this.movies);

    this.calculatePage(2);
  }

  private calculatePage(chunk: number) {
    let jump = (this.page - 1) * chunk;
    console.log(
      ' this.genre ' +
        this.genre +
        ' this.page ' +
        this.page +
        ' jump: ' +
        jump +
        ' chunk ' +
        chunk
    );

    if (this.genre !== 'all') {
      this.genreMovies = this.movies.filter((m) => m.genre === this.genre);
    } else {
      this.genreMovies = [...this.movies];
    }

    console.log('2222222222222222');
    console.log(this.genreMovies);
    this.totalPages = Math.ceil(this.genreMovies.length / chunk);

    this.genreMovies = this.genreMovies.slice(jump, jump + chunk);
    console.log('3333333333333333');
    console.log(this.genreMovies);
  }
}
