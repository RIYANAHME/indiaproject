import { Component, OnInit , ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';


export interface Payment {
  _id: string;
  name: string;
  phone: number;
  details: string;
  date:string;
  month: string;
}
@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  displayedColumns:string[] = ['name', 'phone', 'amount', 'date', 'detail'];
  dataSource:any;

  role:any;

  constructor(private activatedRoute:ActivatedRoute) { }

  paymenData:any = [ 
    {
      _id:1,name:'satya', phone:'3244252', detail:'demo', amount:2000, date:'15', month:'12'
    },
    {
      _id:2,name:'satya', phone:'3244252', detail:'demo', amount:2000, date:'15', month:'12'
    }
  ]

  @ViewChild(MatPaginator) paginator:MatPaginator;


  ngOnInit(): void {
    this.role = this.activatedRoute.snapshot.params['role'];
    console.log(this.role);
    this.dataSource = new MatTableDataSource(this.paymenData);
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

}
