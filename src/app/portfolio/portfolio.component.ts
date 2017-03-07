import { Component, OnInit } from '@angular/core';

export class Holding {
  id: number;
  name: string;
}


@Component({
    moduleId: module.id,
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html'
})
export class PortfolioComponent implements OnInit {
    constructor() { }

    holdings: Holding[] = [
        {id: 1, name: 'Milan'},
        {id: 2, name: 'Boris'},
    ];

    ngOnInit() { }
}

