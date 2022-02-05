import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  title = "Simple form to test";

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log(this.form.value);
  }

}
