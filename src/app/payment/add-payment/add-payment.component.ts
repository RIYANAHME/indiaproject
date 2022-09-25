import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  constructor() { } 

  student:FormGroup;

  ngOnInit(): void {
    this.student = new FormGroup({
      name:new FormControl(),
      phone:new FormControl(),
      detail:new FormControl(),
      amount:new FormControl() 
    })
  } 

  pay()
  {
    console.log(this.student.value);
  }

}
