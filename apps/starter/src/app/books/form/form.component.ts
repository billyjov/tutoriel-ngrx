import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  public booksForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.booksForm = this.fb.group({
      id: [''],
      name: [''],
      publisher: [''],
      author: ['']
    });
  }

  public onSubmit(): void {
    console.log('form: ', this.booksForm.value);
  }

}
