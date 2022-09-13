import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ListProceduresComponent } from './listProcedures/listProcedures.component';
import { ListTraineesComponent } from './listTrainees/listTrainees.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [

      { path: 'listTrainees', component: ListTraineesComponent },
      { path: 'listProcedures', component: ListProceduresComponent },
    ]
  },
  { path: '**', component: HomeComponent, pathMatch: 'full' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
