import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchUsers();
  }

  fetchUsers = () => {this.api.getAllUsers().subscribe((data) => {this.getUsers = data;})}
  
  getUsers:any = [];

  ngOnInit(): void {
  }

}
