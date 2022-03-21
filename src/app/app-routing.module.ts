import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CdsComponent } from './cd/cds.component';
import { DvdsComponent } from './dvd/dvds.component';
import { ModifyFormComponent } from './forms/modify-form.component';
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
  {path: 'modifyVinyl', component: ModifyFormComponent},
  {path: 'cd', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
