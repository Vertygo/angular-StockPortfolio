import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
    moduleId: module.id,
    selector: 'app-stats',
    templateUrl: 'stats.component.html'
})
export class StatsComponent implements OnInit {
    private pieData: any = [
    { category: 'Eaten', value: 0.42 },
    { category: 'Not eaten', value: 0.58 }];

    constructor() { }

    ngOnInit() { }
}
