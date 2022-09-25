import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  constructor() { }
  panelOpenState = false;

  faculty:any = [
    {name:'riyan', dob:'10/12/22',gender:'male',phone:'23422342',salary:'20000',subject:'MEAN',joinDate:'10/12/32',address:'badurtola'},
    {name:'riyan2', dob:'10/12/22',gender:'male',phone:'23422342',salary:'20000',subject:'MEAN',joinDate:'10/12/32',address:'badurtola'},
    {name:'riyan3', dob:'10/12/22',gender:'male',phone:'23422342',salary:'20000',subject:'MEAN',joinDate:'10/12/32',address:'badurtola'},
    {name:'riyan4', dob:'10/12/22',gender:'male',phone:'23422342',salary:'20000',subject:'MEAN',joinDate:'10/12/32',address:'badurtola'},
    {name:'riyan5', dob:'10/12/22',gender:'male',phone:'23422342',salary:'20000',subject:'MEAN',joinDate:'10/12/32',address:'badurtola'},
    {name:'riyan6', dob:'10/12/22',gender:'male',phone:'23422342',salary:'20000',subject:'MEAN',joinDate:'10/12/32',address:'badurtola'},
    {name:'riyan7', dob:'10/12/22',gender:'male',phone:'23422342',salary:'20000',subject:'MEAN',joinDate:'10/12/32',address:'badurtola'},


  ]

  ngOnInit(): void {
  }

}
