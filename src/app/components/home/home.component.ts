import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Users, UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.fillTable()
  }
  
  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService, private http: HttpClient) {
    this.tableForm = this.fb.group({
      users: this.fb.array([])
    });
  }

  tableForm: FormGroup;

  get users() {
    return this.tableForm.get('users') as FormArray;
  }

  async fillTable () {    
    this.userService.getUsers().subscribe(users => {
      for (const user of users) {
        this.users.push(this.fb.group({
          fullName: [{ value: user.name, disabled: true }],
          username: [{ value: user.username, disabled: true }],
          email: [{ value: user.email, disabled: true }]
        }));
      }
    });

  }

  navigateToDetails(userId: number) {
    this.router.navigate(['/user', userId]);
  }


}
