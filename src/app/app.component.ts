import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Navin Project';
  public config: ToasterConfig = new ToasterConfig({
    showCloseButton: true, 
    tapToDismiss: false, 
    timeout: 0,
    positionClass: 'toast-center'
  });

  constructor(private router: Router, private modalService: NgbModal) {}
}
