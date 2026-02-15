import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  constructor(private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const bloglist = this.activedRouted.snapshot.data['blogList'];
    console.log('bloglist >>>>', bloglist);
  }
}
