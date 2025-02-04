import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  standalone: true,
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  title = 'app';

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
