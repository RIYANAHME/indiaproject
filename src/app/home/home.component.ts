import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  piChart:any = [];

  studentList:any = [
    {id:1, name:'riyan', batch:'MEAN', phone:'123456'},
    {id:2, name:'riyan1', batch:'MEAN', phone:'123456'},
    {id:3, name:'riyan2', batch:'MEAN', phone:'123456'},
    {id:4, name:'riyan3', batch:'MEAN', phone:'123456'},
    {id:5, name:'riyan5', batch:'MEAN', phone:'123456'},
    {id:3, name:'riyan2', batch:'MEAN', phone:'123456'},
    {id:4, name:'riyan3', batch:'MEAN', phone:'123456'},
    {id:5, name:'riyan5', batch:'MEAN', phone:'123456'}
  ]

  ngOnInit(): void { 
    setTimeout(()=>{this.createChart()},2000)
  }
  createChart()
  {
    this.piChart = new Chart('piChart',
    {
      type:'pie',
      data:{
        datasets:[{
          data:[30,20],
          backgroundColor: ['teal','palevioletred'],
          label:'Dataset 1'
        }],
        labels:['Male','Female']
      },
      options:{
        responsive:true
      }
    })
  }

}
