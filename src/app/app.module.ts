import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PaginationModule} from 'ngx-bootstrap/pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListTraineesComponent } from './listTrainees/listTrainees.component';
import { ListProceduresComponent } from './listProcedures/listProcedures.component';
import { AuthGuard } from './_guards/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { NavMenuComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProcedureListResolver } from './_resolvers/procedure-list.resolver';
import { AccountService } from './_services/account.service';
import { CommonService } from './_services/common.service';
import { HospitalService } from './_services/hospital.service';
import { ProcedureService } from './_services/procedure.service';
import { UserService } from './_services/user.service';


@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,					
    BrowserModule,
    BrowserAnimationsModule,
    PaginationModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-right'}),
   ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AboutComponent,
    ListTraineesComponent,
    ListProceduresComponent,
    
   
  ],
  providers: [
    AccountService,
    CommonService,
    HospitalService,
    ProcedureService,
    UserService,
    AuthGuard, 
    ProcedureListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
