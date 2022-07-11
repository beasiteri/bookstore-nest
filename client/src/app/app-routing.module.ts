import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: BooksComponent, pathMatch: 'full'},
  { path: 'customers', component: CustomersComponent, pathMatch: 'full'},
  { path: 'invoices', component: InvoicesComponent, pathMatch: 'full'},
  { path: 'agenda', component: EventsComponent, pathMatch: 'full'},
  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo:'/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
