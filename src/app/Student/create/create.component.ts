import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  fieldTextType: boolean = false;
  tableVisible: boolean = false;
  students: Student[] = [];

  studentForm: FormGroup;

  fullNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  phoneControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{10}$'),
  ]);

  birthDateControl = new FormControl('', [
    Validators.required,
    this.dateValidator(),
  ]);

  courseControl = new FormControl('', [Validators.required]);

  genderControl = new FormControl('');

  userControl = new FormControl('');

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(10),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
  ]);

  constructor() {
    this.studentForm = new FormGroup({
      fullName: this.fullNameControl,
      email: this.emailControl,
      phone: this.phoneControl,
      birthDate: this.birthDateControl,
      course: this.courseControl,
      gender: this.genderControl,
      user: this.userControl,
      password: this.passwordControl,
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.students.push(this.studentForm.value);
      this.studentForm.reset();
      this.tableVisible = true;
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  onkeyupEmail(): void {
    this.userControl.setValue(this.emailControl.value);
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (
        new Date(control.value)?.getFullYear() >
          new Date().getFullYear() - 18 ||
        new Date(control.value)?.getFullYear() < new Date().getFullYear() - 100
      ) {
        return {
          dateInvalid: true,
        };
      }
      return null;
    };
  }
}
