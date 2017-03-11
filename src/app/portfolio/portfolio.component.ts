import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrumentService';
import { Holding } from '../services/holding';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
    moduleId: module.id,
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html',
    providers: [InstrumentService],
    styleUrls: [
        // load the default theme (use correct path to node_modules)
        '../../../node_modules/@progress/kendo-theme-default/dist/all.css'
    ],

})
export class PortfolioComponent implements OnInit {
    holdings: Holding[];

    constructor(private instrumentService: InstrumentService) {
          this.instrumentService.getHoldings().then(h => {
              this.holdings = h;
              this.load();
          });


    }

    ngOnInit(): void {


    }

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;




    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.load();
    }

    private load(): void {
        this.gridView = {
            data: orderBy(this.holdings, this.sort),
            total: this.holdings.length
        };
    }
}

