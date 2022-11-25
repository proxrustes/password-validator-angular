import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-validator';
  
  "password"= new FormControl('', { nonNullable: true });
  "strength"= new FormControl('', { nonNullable: true });
  
  validatePassword()
  {
    console.log(this.password.value)
  }

  onInput(){
    console.log('input')
    this.validatePassword();
  }
}

