import { Component, OnInit, TemplateRef } from '@angular/core';
import { InstrumentService } from '../services/instrumentService';
import { Holding } from '../services/holding';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { DialogService, DialogCloseResult } from '@progress/kendo-angular-dialog';
import { NewHoldingComponent } from './newHolding.component';

@Component({
    moduleId: module.id,
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html',
    providers: [InstrumentService]

})
export class PortfolioComponent implements OnInit {
    holdings: Holding[];
    public opened = false;
    constructor(private instrumentService: InstrumentService, private dialogService: DialogService) {
          this.instrumentService.getHoldings().then(h => {
              this.holdings = h;
              this.load();
          });


    }

    ngOnInit(): void {
    }

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;
    private dialogRef;

    public addInstrument() {
        const childComp = this.dialogRef.content.instance;
        
        childComp.OnSubmit();
        this.load();
        this.dialogRef.close();
    }
    public close () {
        this.dialogRef.close();
    }

    public open(actionTemplate: TemplateRef<any>) {
       this.dialogRef = this.dialogService.open({
          title: 'NewHolding',
          // show component
          content: NewHoldingComponent,

          actions: actionTemplate
       });
    }

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

