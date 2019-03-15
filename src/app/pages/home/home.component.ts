import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service';
import { ToasterService } from 'angular2-toaster';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
  public tabs: any = [];
  public transactions: any = [];
  public total: number = 0;
  public loading: boolean = false;
  public pagination: any = {
    page: 1,
    limit: 10
  };
  public isFiltering: boolean = false;

  constructor(private router: Router, private service: AppService, private modalService: NgbModal, private toaster: ToasterService) {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions(params:any = {}) {
    this.transactions = [];
    this.loading = true;
    this.isFiltering = !!params.email;
    let query: any = {
      limit: this.pagination.limit,
      offset: (this.pagination.page - 1) * this.pagination.limit,
    };
    if (params.email) {
      query.email = params.email;
    }
    this.service.getTransactionsLog(query).subscribe((data: any) => {
      this.loading = false;
      if (data.success) {
        this.transactions = data.data && data.data.ledgers ? data.data.ledgers.rows : [];
        this.total = data.data && data.data.ledgers ? data.data.ledgers.count : 0;
      } else {
        this.toaster.pop('error', data.error && data.error.message ? data.error.message : 'Error when loading transactions');
      }
    }, err => {
      this.loading = false;
      this.toaster.pop('error', err.error && err.error.message ? err.error.message : 'Error when loading transactions');
    });
  }

  pageChange() {
    this.getTransactions();
  }

  clearFilter() {
    this.pagination = {
      page: 1,
      limit: 10
    };
    this.getTransactions();
  }
}
