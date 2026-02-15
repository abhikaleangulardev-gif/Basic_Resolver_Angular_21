import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  constructor(private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const userslist = this.activedRouted.snapshot.data['usersList'];
    console.log('userslist >>>>', userslist);
  }
}
