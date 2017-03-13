import { Component, OnInit } from '@angular/core';
import { Instrument } from '../services/instrument';
import { InstrumentService } from '../services/instrumentService';
import { SortDescriptor } from '@progress/kendo-data-query/dist/es/sort-descriptor';
import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/data.collection';
import { orderBy } from '@progress/kendo-data-query/dist/es/array.operators';

@Component({
    moduleId: module.id,
    selector: 'app-instruments',
    templateUrl: 'instruments.component.html'
})
export class InstrumentsComponent implements OnInit {
        
    errorMessage: any;    
    instruments: Instrument[];

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;
    private dialogRef;


    constructor(private instrumentService: InstrumentService) { 
        this.load();
    }

    
    ngOnInit() { }

    load(){
        this.instrumentService.getInstruments().subscribe(
            inst => {
                this.instruments = inst;
                this.loadGrid();
            },
            error => this.errorMessage = <any> error);       

    }

    loadGrid(){
         this.gridView = {
            data: orderBy(this.instruments, this.sort),
            total: this.instruments.length
        };
    }
}