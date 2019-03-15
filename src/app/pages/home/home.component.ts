import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service';
import { ToasterService } from 'angular2-toaster';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
  public dataSet: any = [];
  public tabs: any = [];
  public tabHeadersContent: any = {};
  public loading: boolean = false;
  public pagination: any = {
    page: 1,
    limit: 10
  };
  public hasError: boolean = false;

  constructor(private router: Router, private service: AppService, private modalService: NgbModal, private toaster: ToasterService) {}

  ngOnInit() {
    this.getTabs();
  }

  getTabs(params:any = {}) {
    this.tabs = [];
    this.loading = true;
    this.hasError = false;
    let query: any = {
      limit: this.pagination.limit,
      offset: (this.pagination.page - 1) * this.pagination.limit,
    };
    this.service.getListTabs(query).subscribe((resp: any) => {
      const dataSet = resp.Dataset[0];
      this.tabs = Object.keys(dataSet);
      this.tabs.forEach(tabName => {
        let tabContent = dataSet[tabName];
        if (tabContent.length) {
          let tab = tabContent[0];
          this.tabHeadersContent[tabName] = Object.keys(tab);
        }
      });
      this.dataSet = dataSet;
      this.loading = false;
    }, err => {
      this.hasError = true;
      this.loading = false;
      this.toaster.pop('error', err.error && err.error.message ? err.error.message : 'Error when loading data');
    });
  }

  pageChange() {
    this.getTabs();
  }

  clearFilter() {
    this.pagination = {
      page: 1,
      limit: 10
    };
    this.getTabs();
  }
}
