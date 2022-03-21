import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdsComponent } from './cd/cds.component';
import { DvdsComponent } from './dvd/dvds.component';
import { HomeComponent } from './home/home.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { VinylsComponent } from './vinyl/vinyls.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'vinyls', component: VinylsComponent},
  {path: 'cds', component: CdsComponent},
  {path: 'dvds', component: DvdsComponent},
  {path: 'vinyl', component: VinylComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
