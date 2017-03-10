import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrumentService';
import { Holding } from '../services/holding';


@Component({
    moduleId: module.id,
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html',
    providers: [InstrumentService]
})
export class PortfolioComponent implements OnInit {
    holdings: Holding[];

    constructor(private instrumentService: InstrumentService) { }

    ngOnInit(): void {
        this.instrumentService.getHoldings().then(h => this.holdings = h);
    }
}

