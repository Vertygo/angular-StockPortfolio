import { Injectable } from '@angular/core';

@Injectable()
export class InstrumentService {

    holdings: Holding[] = [
        {id: 1, instrumentName: 'Adidas AG', symbol: 'ADS', entryPrice: 12, marketValue: 1, position: 10, price: 15 },
        {id: 2, instrumentName: 'Apple', symbol: 'AAPL', entryPrice: 12, marketValue: 1, position: 10, price: 15 },
    ];

    constructor() { }

    getInstruments(): Promise<Holding[]> {
        return Promise.resolve(this.holdings);
    }
}

export class Holding {
  id: number;
  instrumentName: string;
  symbol: string;
  position: number;
  price: number;
  entryPrice: number;
  marketValue: number;

}
