import { Component } from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],   
})
export class Signup {

  signupform = new FormGroup(
    {
      username: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validators: [Signup.passwordsMatchValidator] 
    }
  );
  static passwordsMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    if (password !== confirm) {
      return { passwordsMismatch: true };   
    }
    return null;  
  }
  submit() {
    if (this.signupform.valid) {
      console.log("User Registered:", this.signupform.value);
    } else {
      this.signupform.markAllAsTouched();
    }
  }
}
