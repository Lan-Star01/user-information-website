import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any;

  userForm!: FormGroup;
  userId!: number;
  userDetails: any;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private userService: UsersService) {
  }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    this.userService.getUserDetails(this.userId).subscribe(userDetails => {
      this.userDetails = userDetails;
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  navigateToUserPosts() {
    this.router.navigate(['user', this.userId, 'posts']);  
  }
}
