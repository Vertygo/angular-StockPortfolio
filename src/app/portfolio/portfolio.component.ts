import { Component, OnInit } from '@angular/core';
import { InstrumentService, Holding } from '../services/instrumentService';


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
        this.instrumentService.getInstruments().then(h => this.holdings = h);
    }
}

