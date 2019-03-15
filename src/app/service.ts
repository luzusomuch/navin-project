import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const serviceApiKey = "6d5d56f7cf494134a96cc6910549341a";
const headers = {
  'x-authentication': serviceApiKey
};

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getListTabs(params: any = {}) {
    return this.http.get(`assets/sample.json`, {headers, params});
  }
}