import { Injectable } from '@angular/core';
import { Holding } from './holding';
import { Instrument } from './instrument';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class InstrumentService {

      private heroesUrl = 'http://localhost:9001/api/instruments';  // URL to web API

    holdings: Holding[] = [
        {id: 1, instrumentName: 'Adidas AG', symbol: 'ADS', entryPrice: 12, marketValue: 1, position: 10, price: 15 },
        {id: 2, instrumentName: 'Apple', symbol: 'AAPL', entryPrice: 12, marketValue: 1, position: 10, price: 15 },
    ];

    constructor (private http: Http) {}

    getHoldings(): Promise<Holding[]> {
        return Promise.resolve(this.holdings);
    }

    addHolding(h: Holding) {
        h.id = this.holdings.length + 1;
        this.holdings.push(h);
    }


    getInstruments(): Observable<Instrument[]>{
         return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

    }

     private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}


