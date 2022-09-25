import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  constructor(private router:Router) { }

  batch:any=[
    {_id:'1',me: 'Aungkon', batchName:'angular',time:'I want to learn angular'},
    {_id:'2',me: 'Riya',batchName:'nodejs',time:'I want to learn nodejs'},
    {_id:'3',me: 'kulsum',batchName:'design',time:'I want to learn design'},
    {_id:'4',me: 'sara',batchName:'angularjs',time:'I want to learn angularjs'},
    {_id:'5',me: 'Meem',batchName:'ngrx',time:'I want to learn ngrx, '}
  ]

  ngOnInit(): void {
  }
  details(batchName)
  {
    this.router.navigate(['/Deshboard/batch',batchName])
  }
}
