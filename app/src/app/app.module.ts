import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PuzzleOneComponent } from './pages/puzzle-one/puzzle-one.component';
import { PuzzleTwoComponent } from './pages/puzzle-two/puzzle-two.component';
import { PuzzleThreeComponent } from './pages/puzzle-three/puzzle-three.component';
import { PrizeComponent } from './pages/prize/prize.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PuzzleOneComponent,
    PuzzleTwoComponent,
    PuzzleThreeComponent,
    PrizeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
