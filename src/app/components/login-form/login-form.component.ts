import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  showInvalidWarning: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      checkbox: [false]
    });
  }

  VerifyInputsValid() {
    if (this.loginForm.valid){
      return alert('usuário válido');
    }
    this.showInvalidWarning = true;
    setTimeout(() => {
      this.showInvalidWarning = false;
    }, 3000)
  }

  SubmitHandler() {
    console.log(this.loginForm);
    this.VerifyInputsValid();
  }
}
