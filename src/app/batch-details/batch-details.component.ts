import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  searchItem:string = ""; 

  
  batch:any = {
    name:'angular course',
    discription:'this is discription',
    duration:'30 days',
    startingDate:'10 th day',
    time:'9pm',
    location:'Bogura',
    instructor:'sttewan'
  }

  student:any = [
    {_id:'1',name:'riyan',phone:'122364'},
    {_id:'1',name:'riyan2',phone:'122364'},
    {_id:'1',name:'riyan3',phone:'122364'},
    {_id:'1',name:'riyan4',phone:'122364'},
    {_id:'1',name:'riyan5',phone:'122364'},
    {_id:'1',name:'riyan6',phone:'122364'},
    {_id:'1',name:'riyan7',phone:'122364'},
  ]
  ngOnInit(): void {
  }

  viewMore(id)
  {
    this.router.navigate(['/Deshboard/student-detail',id]);
  }
 
}
