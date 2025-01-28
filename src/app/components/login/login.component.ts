import { Component, signal,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private router: Router) {}
  username: string = '';
  password: string = '';
  errorMessage = signal("");
  // output the user via the loggedIn function in an output
  @Output() loggedIn = new EventEmitter<string>();
  
  // temporary login database
  users = [
    {acc_email: 'joelecossu@hotmail.com', acc_password: 'jc1234'},
    {acc_email: 'serena@hotmail.com', acc_password: 'sr1234'},
    {acc_email: 'joelecossu117@gmail.com', acc_password: 'jc117'},
    {acc_email: 'Gearpro17@hotmail.com', acc_password: 'gp17'},
  ];

  showErrorMessage(){
    this.errorMessage = signal("Invalid email or password");
  }
  handleLogin() {
    // goes through the array and compares the inputs with the object in the index, 'u' is the object
    const user = this.users.find(
      (u) => u.acc_email === this.username && u.acc_password === this.password
    );
    if(user){
      console.log("Login Succesful");
      this.loggedIn.emit(this.username);
      this.router.navigate(['/home']);
    }
    else {
      console.log("Invalid email or password");
      this.showErrorMessage();
    }
  }

}

