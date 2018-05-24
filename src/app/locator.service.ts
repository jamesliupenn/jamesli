import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


const URL = environment.googleMapUrl;
const API_KEY = environment.googleApiKey;

@Injectable()
export class LocatorService {

	whereIsJames = {
		latitude: 37.773972, 
		longitude: -122.431297
	};

	constructor(
		private http: Http
		) { }

	getMap() {
		return this.http.get(URL + "key=" + API_KEY);
	}

	getDistance(coords): Observable <Array<Object>> {
		return this.http.get(URL + "key=" + API_KEY)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}
