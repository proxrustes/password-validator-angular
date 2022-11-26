import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-validator';

  colours: { [code: number]: string } = { 0: "dimgrey", 1:"#d91d0f", 2:"#f7d640", 3:"#4ae072" }

  firstSection = this.colours[0]
  secondSection = this.colours[0]
  thirdSection = this.colours[0]

  "password"= new FormControl('', { nonNullable: true });
  "strength"= new FormControl('enter your password', { nonNullable: true });
  
  validatePassword()
  {
    console.log(this.password.value)
    const password = this.password.value;
    if (password=='')
    {
      this.strength.setValue("enter your password");
      console.log("enter your password");
    }
    else if (!(/^.*(?=.{8,}).*$/.test(password)))
    {
      this.strength.setValue("too short");
      console.log("too short");

      this.firstSection = this.colours[1]
      this.secondSection = this.colours[1]
      this.thirdSection = this.colours[1]
    }
    else if (/^.*(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@#/$%^&+=.]).*$/.test(password))
    {
      this.strength.setValue("strong");
      console.log("strong");

      this.firstSection = this.colours[3]
  this.secondSection = this.colours[3]
  this.thirdSection = this.colours[3]
    }
    else if (/^.*(?=.*[0-9])(?=.*[@#$%^&+=.]).*$/.test(password) || /^.*(?=.*[A-Za-z])(?=.*[@#$%^&+=.]).*$/.test(password) ||/^.*(?=.*[A-Za-z])(?=.*[0-9]).*$/.test(password))
    {
      this.strength.setValue("medium");
      console.log("medium");

      this.firstSection = this.colours[2]
  this.secondSection = this.colours[2]
  this.thirdSection = this.colours[0]
    }
    else if (/^[0-9]*$/.test(password) || /^[A-Za-z]*$/.test(password) || /[$-/:-?{-~!"^_`\[\]]/.test(password))
    {
      this.strength.setValue("easy");
      console.log("easy");

      this.firstSection = this.colours[1]
  this.secondSection = this.colours[0]
  this.thirdSection = this.colours[0]
    }
  }

  onInput(){
    console.log('input')
    this.validatePassword();
  }
}

