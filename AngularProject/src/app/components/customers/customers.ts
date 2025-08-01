import { Component } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers {
  list: any[] = [];
  constructor(private api: RestApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.getCustomers().subscribe(data => {
      this.list = data;
    });
  }  
}
