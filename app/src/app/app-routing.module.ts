import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PuzzleOneComponent } from './pages/puzzle-one/puzzle-one.component';
import { PuzzleTwoComponent } from './pages/puzzle-two/puzzle-two.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: PuzzleOneComponent },
    { path: 'iloveyou', component: PuzzleTwoComponent },
    { path: 'NotFound', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
