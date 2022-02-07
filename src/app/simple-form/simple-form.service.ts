import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class SimpleFormService {

  constructor(private http: HttpClient) { }

  public getText() {
    return this.http.get(``)
      .pipe(
        map(() => {
          return "isso é um teste"
        })
      )
  }

}
