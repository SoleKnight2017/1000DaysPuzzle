import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PuzzleOneComponent } from './pages/puzzle-one/puzzle-one.component';
import { PuzzleTwoComponent } from './pages/puzzle-two/puzzle-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PuzzleOneComponent,
    PuzzleTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
