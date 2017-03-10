import { Component, OnInit } from '@angular/core';
import { Holding } from '../services/holding';

@Component({
    moduleId: module.id,
    selector: 'app-new-holding',
    templateUrl: 'NewHolding.component.html'
})
export class NewHoldingComponent implements OnInit {

    holding = new Holding();
    constructor() { }

    ngOnInit() { }
}

