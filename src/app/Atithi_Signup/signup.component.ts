import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({

  selector: 'signup',
  templateUrl: 'app/Atithi_Signup/signup.component.html'
})

export class SignupComponent implements OnInit{

  submitted=false;
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['',Validators.required],
      password:['',Validators.required],
      email: ['',Validators.required],
      mobile: ['',Validators.required],
      confpassword: ['',Validators.required]
    })
  }
  onSubmit()  {
    this.submitted=true;
  }
}


