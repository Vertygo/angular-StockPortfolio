import { Component, OnInit } from '@angular/core';
import { Holding } from '../services/holding';
import { InstrumentService} from '../services/instrumentService';

@Component({
    moduleId: module.id,
    selector: 'app-new-holding',
    templateUrl: 'NewHolding.component.html'
})
export class NewHoldingComponent {

  holding = new Holding();

    constructor(private instrumentService: InstrumentService){}
   

   


    newHolding() {
        this.holding = new Holding();
    }

    OnSubmit() {
        this.instrumentService.addHolding(this.holding);
        this.holding = new Holding();
     }
}

