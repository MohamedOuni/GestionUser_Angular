import { Component } from '@angular/core';
import { AdminService , User} from 'src/app/core/service/admin.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {

 
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
        this.filteredUsers = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  search() {
    if (!this.searchTerm) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter((user) =>
        user.username.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
    }
  }
}