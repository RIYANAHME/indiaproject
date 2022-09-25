import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  constructor() { }

  batch:FormGroup;

  ngOnInit(): void {
    this.batch = new FormGroup({
      _id:new FormControl(),
      courseName:new FormControl(),
      discription:new FormControl(),
      startingDate:new FormControl(),
      duration:new FormControl(),
      time:new FormControl(),
      location:new FormControl(),
      instructor:new FormControl()
    })
  }

  save()
  {
    console.log(this.batch.value,this.batch.valid);
  }

}
