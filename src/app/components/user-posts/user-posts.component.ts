import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  user: any;
  userId!: number;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private userService: UsersService) {
  }
  
  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchUserPosts();
  }

  fetchUserPosts() {

    this.userService.getUserDetails(this.userId).subscribe(user => {
      this.user = user;
    });

    this.userService.getUserPosts(this.userId).subscribe(posts => {
      this.posts = posts;
    });
  }

  goBack() {
    this.router.navigate(['user', this.userId]);
  }

}
