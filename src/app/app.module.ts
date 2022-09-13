import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

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


@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,					
    BrowserModule,
    BrowserAnimationsModule,
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
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
