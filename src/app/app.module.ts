import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BodyComponent } from './body/body.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { DataService } from './data.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { LoginComponent } from './login/login.component';
import { LangComponent } from './lang/lang.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { BackendService } from './backend.service';
import { SignupComponent } from './signup/signup.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [AppComponent, BodyComponent, PaymentComponent, LoginComponent, LangComponent, SignupComponent, LoadingSpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MDBBootstrapModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAYFYkvU55crLtL2Hzn7VI_8G3jCs00IlQ',
      libraries: ['places']
    }),
    AgmCoreModule.forRoot(),
    NgbModule,
    AppRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthGuard, BackendService],
  bootstrap: [AppComponent],
})
export class AppModule { }
