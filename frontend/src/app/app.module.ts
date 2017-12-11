import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppService} from './app.service';
import { PersonService} from './person.service';
import { DrawService } from './draw.service';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [AppService, PersonService, DrawService],
  bootstrap: [AppComponent]
})
export class AppModule { }
