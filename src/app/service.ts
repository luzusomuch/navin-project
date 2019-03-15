import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  redeem() {
    return this.http.post(`${window.apiEndpoint}/api/v1/drawings/redeem`, {});
  }

  transferMoney(drawingId, uuid, password) {
    return this.http.post(`${window.apiEndpoint}/api/v1/drawings/${drawingId}/winners/${uuid}/pay-prize`, { password });
  }

  getTransactionsLog(params) {
    return this.http.get(`https://stagingapi.grand.co/api/v1/ledger/list`, {
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWJlODgwNTktMzNiZC00NTE1LWIyYmUtODZmNzJjZjZkNTc2IiwiaWF0IjoxNTUxNzc0NTU4LCJleHAiOjE1NTE4MTA1NTh9.rAtsfqiZfQUO2ch9U3LrJvCW1VlbD4z6xn5mS1UzPUE'
      },
      params
    });
  }
}