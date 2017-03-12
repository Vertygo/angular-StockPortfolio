import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';

import { AppComponent } from './app.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { InstrumentService } from './services/instrumentService';
import { NewHoldingComponent } from './portfolio/newHolding.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  declarations: [
    AppComponent, PortfolioComponent, NewHoldingComponent
  ],
  entryComponents: [ NewHoldingComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule,
    RouterModule.forRoot(routes),
    DialogModule.forRoot()
  ],
  providers: [InstrumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
