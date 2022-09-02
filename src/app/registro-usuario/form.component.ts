import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SaveData(form:NgForm){
    console.log("enviando datos...")
    console.log(form);
    console.log(form.value);

  }

}
