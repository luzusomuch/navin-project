import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppService } from './service';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { FilterQueryPipePipe } from './pipes/filter-query-pipe.pipe';
import { GetArrayLengthPipe } from './pipes/get-array-length-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterQueryPipePipe,
    GetArrayLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    ToasterModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    UiSwitchModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
