import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PuzzleOneComponent } from './pages/puzzle-one/puzzle-one.component';
import { PuzzleTwoComponent } from './pages/puzzle-two/puzzle-two.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const title: string = "1000 Days Puzzle";

const routes: Routes = [
    { path: '', component: PuzzleOneComponent, title: title },
    { path: 'iloveyou', component: PuzzleTwoComponent, title: title },
    { path: 'NotFound', component: PageNotFoundComponent, title: title },
    { path: '**', redirectTo: '/NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
