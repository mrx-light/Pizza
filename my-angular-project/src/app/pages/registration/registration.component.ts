import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { UserI } from '../../../interfaces/global-interfaces';
import { JsonPipe } from '@angular/common';
import { find, Observable } from 'rxjs';
import { Router } from '@angular/router';

export const checkCityValidator = (
  control: AbstractControl,
): ValidationErrors | null => {
  let citys: string[] = ['Chisinau', 'Balti'];
  return !citys.includes(control.value)
    ? { diffrentCitys: 'There is not such city' }
    : null;
};

export const numberValidator = (
  control: AbstractControl,
): ValidationErrors | null => {
  if (control.value) {
    const numberLenght = control.value.toString().length;
    if (numberLenght < 9) {
      return { errNumber: ' The phone number is too small' };
    }
    if (numberLenght > 14) {
      return { errNumber: ' The phone number is too big' };
    }
  }
  return null;
};

export const checkPasswordValidator = (field: any) => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (field.registrationForm) {
      if (field.registrationForm.controls.password.value !== control.value) {
        return { differentPassword: 'The passwords are different' };
      }
    }
    return null;
  };
};

export const emailValidator = (email: any) => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (email.users) {
      let user = {};
      user = email.users.find((el: any) => {
        return el.email === email.registrationForm.controls.email.value;
      });
      if (user) {
        console.log(user);
        return { usedEmail: 'This Email is already used' };
      }
    }
    return null;
  };
};

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  private form: FormBuilder = inject(FormBuilder);
  registrationService = inject(RegistrationService);
  private router = inject(Router);
  registrationForm = this.form.group({
    name: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(40)],
    ],
    city: ['Chisinau', [Validators.required, checkCityValidator]],
    phone: ['', [Validators.required, numberValidator]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(60),
        emailValidator(this),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(7), Validators.maxLength(30)],
    ],
    confirmPassword: ['', [Validators.required, checkPasswordValidator(this)]],
  });

  public users = [];
  async sendUser() {
    const userEmail = '';
    let list: any[] = [];
    await this.registrationService.getUserByEmail().subscribe((res: any) => {
      list = [...res];
      if (this.registrationForm.controls.email.value) {
        let user = list.find((el) => {
          return el.email === this.registrationForm.controls.email.value;
        });
        if (this.registrationForm.valid) {
          if (!user) {
            this.registrationService
              .postUser(
                this.registrationService.clearUserInfo(this.registrationForm),
              )
              .subscribe((el) => {
                console.log('User was added successfully: ', el);
                console.log(!this.registrationForm.valid);
              });
            setTimeout(() => {
              this.router.navigateByUrl('/account');
            }, 1000);
          } else {
            alert('This email is already used');
          }
        }
      }
    });
  }
  ngOnInit() {
    this.registrationService.getUserByEmail().subscribe((res: any) => {
      this.users = res;
    });
  }
}
