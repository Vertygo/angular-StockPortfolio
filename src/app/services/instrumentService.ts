import { Injectable } from '@angular/core';
import { Holding } from './holding';

@Injectable()
export class InstrumentService {

    holdings: Holding[] = [
        {id: 1, instrumentName: 'Adidas AG', symbol: 'ADS', entryPrice: 12, marketValue: 1, position: 10, price: 15 },
        {id: 2, instrumentName: 'Apple', symbol: 'AAPL', entryPrice: 12, marketValue: 1, position: 10, price: 15 },
    ];

    constructor() { }

    getHoldings(): Promise<Holding[]> {
        return Promise.resolve(this.holdings);
    }

    addHolding(h: Holding) {
        this.holdings.concat(h);
    }
}


