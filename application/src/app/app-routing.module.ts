import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhrasesComponent } from './phrases/phrases.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'phrases', component: PhrasesComponent },
  { path: 'detail/:id', component: PhraseDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
