import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Injectable()
export class PersonService {

  private PATH : string = this.appService.URL + "/person";

  constructor(private http: HttpClient, private appService: AppService) { }
  
  save(person){
    return this.http.post(this.PATH, person).toPromise();
  }

  update(personId, person){
    return this.http.put(this.PATH.concat('/', personId), person).toPromise();
  }

  delete(personId) {
    return this.http.delete(this.PATH.concat('/', personId)).toPromise();
  }

}
