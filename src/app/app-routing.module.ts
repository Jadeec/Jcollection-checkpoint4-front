import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CdComponent } from './cd/cd.component';
import { CdsComponent } from './cd/cds.component';
import { DvdComponent } from './dvd/dvd.component';
import { DvdsComponent } from './dvd/dvds.component';
import { CreationFormComponent } from './forms/creation-form.component';
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
  {path: 'modifyMedia', component: ModifyFormComponent},
  {path: 'createMedia', component: CreationFormComponent},
  {path: 'cd', component: CardComponent},
  {path: 'vinyl/:vinylId', component: VinylComponent},
  {path: 'dvd/:dvdId', component: DvdComponent},
  {path: 'cd/:cdId', component: CdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
