import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  student:FormGroup;
  batchList:any = [
    {id:'1',batchName:'angular'},
    {id:'1',batchName:'nodejs'},
    {id:'1',batchName:'java'},
    {id:'1',batchName:'MEAN'},
  ]

  ngOnInit(): void {
    this.student = new FormGroup({
      _id:new FormControl(),
       name:new FormControl(),
      fName:new FormControl(),
      gender:new FormControl(),
      dob:new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      add:new FormControl(),
      pin:new FormControl(),
      joinDate:new FormControl(),
      batch:new FormControl(),
      courseFee:new FormControl(),
    })
  } 
   
  save()
  {
    console.log(this.student.value);
  }

}
