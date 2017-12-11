import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from './app.service';

@Injectable()
export class DrawService {
	
	private PATH : string = this.appService.URL + "/draw";
	
	constructor(private http: HttpClient, private appService: AppService) { }
	
	make(people){
		return this.http.post(this.PATH, people, {headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text'}).toPromise();
	}
	
}
