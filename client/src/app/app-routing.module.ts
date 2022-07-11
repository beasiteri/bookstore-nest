import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: BookstoreComponent, pathMatch: 'full'},
  { path: 'customers', component: BookstoreComponent, pathMatch: 'full'},
  { path: 'invoices', component: BookstoreComponent, pathMatch: 'full'},
  { path: 'agenda', component: EventsComponent, pathMatch: 'full'},
  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo:'/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
