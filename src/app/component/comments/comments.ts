import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.css',
})
export class Comments implements OnInit {
  constructor(private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const commentslist = this.activedRouted.snapshot.data['commentsList'];
    console.log('commentslist >>>>', commentslist);
  }
}
