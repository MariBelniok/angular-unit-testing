import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class SimpleFormServiceMock {

  constructor(private http: HttpClient) { }

  public getText() {
    return this.http.get(``)
      .pipe(
        map(() => {
          return "simula 'isso é um teste'"
        })
      )
  }
}
