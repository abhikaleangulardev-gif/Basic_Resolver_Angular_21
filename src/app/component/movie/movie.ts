import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie implements OnInit {

  constructor(private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const movielist = this.activedRouted.snapshot.data['movieList'];
    console.log('movielist >>>>', movielist);
  }
}
