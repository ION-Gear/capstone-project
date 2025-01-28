import { Component, NgModule } from '@angular/core';
interface User {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  loginMessage: string = '';

  // Mock database
  mockDB: { users: User[] } = {
    users: [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' }
    ]
  };

  onSubmit() {
    const user = this.mockDB.users.find(user => user.username === this.username && user.password === this.password);

    if (user) {
      this.loginMessage = 'Login successful!';
    } else {
      this.loginMessage = 'Invalid credentials';
    }
  }
}

