import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BsModalService } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GlobalService } from './global.service';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NumbersOnlyDirective } from './numbers-only.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [BsModalService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
