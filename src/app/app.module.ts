import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './myComponents/footer/footer.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { ContactcardComponent } from './myComponents/contactcard/contactcard.component';
import { HomesliderComponent } from './myComponents/homeslider/homeslider.component';
import { CovidcardComponent } from './myComponents/covidcard/covidcard.component';
import { VaccinecardComponent } from './myComponents/vaccinecard/vaccinecard.component';
import { ServicecardComponent } from './myComponents/servicecard/servicecard.component';
import { CommentcardComponent } from './myComponents/commentcard/commentcard.component';
import { WhyuscardComponent } from './myComponents/whyuscard/whyuscard.component';
import { CoutercardComponent } from './myComponents/coutercard/coutercard.component';
import { ContentComponent } from './myComponents/content/content.component';
import { FaqComponent } from './myComponents/faq/faq.component';
import { FaqQuesComponent } from './myComponents/faq-ques/faq-ques.component';





import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HUApplicationItemComponent } from './myComponents/hu-application-item/hu-application-item.component';
import { HUApplicationListComponent } from './myComponents/hu-application-list/hu-application-list.component';
import { HUContactFormComponent } from './myComponents/hu-contact-form/hu-contact-form.component';
import { HUContactHomeComponent } from './myComponents/hu-contact-home/hu-contact-home.component';
import { HUContactItemComponent } from './myComponents/hu-contact-item/hu-contact-item.component';
import { HUContactcardComponent } from './myComponents/hu-contactcard/hu-contactcard.component';
import { HUDetailsFormComponent } from './myComponents/hu-details-form/hu-details-form.component';
import { HUDetailsHomeComponent } from './myComponents/hu-details-home/hu-details-home.component';
import { HUHeaderComponent } from './myComponents/hu-header/hu-header.component';
import { HUNavbarComponent } from './myComponents/hu-navbar/hu-navbar.component';
import { HUNavbarSideComponent } from './myComponents/hu-navbar-side/hu-navbar-side.component';
import { HUProfileComponent } from './myComponents/hu-profile/hu-profile.component';
import { HUUserComponent } from './myComponents/hu-user/hu-user.component';
import { HuApplicationItemAcComponent } from './myComponents/hu-application-item-ac/hu-application-item-ac.component';
import { HuApplicationItemRjComponent } from './myComponents/hu-application-item-rj/hu-application-item-rj.component';
import { HuWelcomeComponent } from './myComponents/hu-welcome/hu-welcome.component';
import { HuSelectComponent } from './myComponents/hu-select/hu-select.component';
import { HuPatientListComponent } from './myComponents/hu-patient-list/hu-patient-list.component';
import { HuPatientCardComponent } from './myComponents/hu-patient-card/hu-patient-card.component';
import { HuPharmifyFormComponent } from './myComponents/hu-pharmify-form/hu-pharmify-form.component';



import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatDialogModule} from '@angular/material/dialog';



import { HospialListComponent } from './myComponents/hospial-list/hospial-list.component';
import { HospitalContactComponent } from './myComponents/hospital-contact/hospital-contact.component';
import { HospitalDoctorsComponent } from './myComponents/hospital-doctors/hospital-doctors.component';
import { HospitalImageComponent } from './myComponents/hospital-image/hospital-image.component';
import { HospitalListItemComponent } from './myComponents/hospital-list-item/hospital-list-item.component';
import { HospitalLocationComponent } from './myComponents/hospital-location/hospital-location.component';
import { HospitalOverviewComponent } from './myComponents/hospital-overview/hospital-overview.component';
import { HospitalviewComponent } from './myComponents/hospitalview/hospitalview.component';
import { AboutusHomeComponent } from './myComponents/aboutus-home/aboutus-home.component';
import { ContactusHomeComponent } from './myComponents/contactus-home/contactus-home.component';
import { ErrorHomeComponent } from './myComponents/error-home/error-home.component';
import { ApplicationDocComponent } from './myComponents/application-doc/application-doc.component';
import { ApplicationDoctoHospitalComponent } from './myComponents/application-docto-hospital/application-docto-hospital.component';
import { ApplicationFormComponent } from './myComponents/application-form/application-form.component';
import { ApplicationHosComponent } from './myComponents/application-hos/application-hos.component';
import { ApplicationComponent } from './myComponents/application/application.component';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import { Contactcard2Component } from './myComponents/contactcard2/contactcard2.component';
import { SigninComponent } from './myComponents/signin/signin.component';
import { SignupComponent } from './myComponents/signup/signup.component';
import { DoctorViewComponent } from './myComponents/doctor-view/doctor-view.component';
import { DoctorPatientComponent } from './myComponents/doctor-patient/doctor-patient.component';
import { DoctorOverviewComponent } from './myComponents/doctor-overview/doctor-overview.component';
import { DoctorLocationComponent } from './myComponents/doctor-location/doctor-location.component';
import { DoctorListComponent } from './myComponents/doctor-list/doctor-list.component';
import { DoctorItemComponent } from './myComponents/doctor-item/doctor-item.component';
import { DoctorDetailsCardComponent } from './myComponents/doctor-details-card/doctor-details-card.component';
import { DoctorContactComponent } from './myComponents/doctor-contact/doctor-contact.component';
import { ClinicHomeComponent } from './myComponents/clinic-home/clinic-home.component';
import { ClinicFormComponent } from './myComponents/clinic-form/clinic-form.component';
import { ClinicCardComponent } from './myComponents/clinic-card/clinic-card.component';
import { ClinicDetailsComponent } from './myComponents/clinic-details/clinic-details.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {environment} from '../environments/environment'
import { NgxPaginationModule } from 'ngx-pagination';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HuSigninComponent } from './myComponents/hu-signin/hu-signin.component';
import { ApplicationStatusComponent } from './myComponents/application-status/application-status.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ContactcardComponent,
    CovidcardComponent,
    VaccinecardComponent,
    ServicecardComponent,
    CommentcardComponent,
    HomesliderComponent,
    WhyuscardComponent,
    CoutercardComponent,
    ContentComponent,
    FaqComponent,
    FaqQuesComponent,
    HospialListComponent,
    HospitalContactComponent,
    HospitalDoctorsComponent,
    HospitalImageComponent,
    HospitalListItemComponent,
    HospitalLocationComponent,
    HospitalOverviewComponent,
    HospitalviewComponent,
    AboutusHomeComponent,
    ContactusHomeComponent,
    ErrorHomeComponent,
    ApplicationDocComponent,
    ApplicationDoctoHospitalComponent,
    ApplicationFormComponent,
    ApplicationHosComponent,
    ApplicationComponent,
    AboutusComponent,
    Contactcard2Component,
    SigninComponent,
    SignupComponent,
    DoctorViewComponent,
    DoctorPatientComponent,
    DoctorOverviewComponent,
    DoctorLocationComponent,
    DoctorListComponent,
    DoctorItemComponent,
    DoctorDetailsCardComponent,
    DoctorContactComponent,
    ClinicHomeComponent,
    ClinicFormComponent,
    ClinicCardComponent,
    ClinicDetailsComponent,
    HUApplicationItemComponent,
    HUApplicationListComponent,
    HUContactFormComponent,
    HUContactHomeComponent,
    HUContactItemComponent,
    HUContactcardComponent,
    HUDetailsFormComponent,
    HUDetailsHomeComponent,
    HUHeaderComponent,
    HUNavbarComponent,
    HUNavbarSideComponent,
    HUProfileComponent,
    HUUserComponent,
    HuApplicationItemAcComponent,
    HuApplicationItemRjComponent,

    HuWelcomeComponent,
    HuSelectComponent,
    HuPatientListComponent,
    HuPatientCardComponent,
    HuPharmifyFormComponent,
    HuSigninComponent,
    ApplicationStatusComponent,
   
  ],
  
  imports: [
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: 'home', component: HomesliderComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'hospital', component: HospialListComponent},
      {path: 'doctors/:name', component: DoctorListComponent},
      {path:'status',component:ApplicationStatusComponent},
      {path: 'appointment/:docname/:docover/:docphoto/:hosname/:hosphoto/:hosadd/:docreg', component: ApplicationComponent},
      {path: 'contact', component: ContactusHomeComponent},
      {path: 'aboutus', component: AboutusHomeComponent},
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'hu-select/:hospname', component: HuWelcomeComponent},
      {path: 'hu-patient/:hospname/:docid' ,component:HuPatientListComponent},
      {path:'hu-sign-in',component:HuSigninComponent},
      {path: 'hospitaluser/:hospid/:docid/:patientid', component: HUUserComponent,
          children:[
            {path: 'hu-app-list/:hospid/:docid/:patientid', component: HUApplicationListComponent},
            {path: 'hu-pat-list/:hospid/:docid/:patientid', component: HuPatientListComponent},
            {path: 'hu-detail-form/:hospid/:docid/:patientid', component: HUDetailsFormComponent},
            {path: 'hu-contact-form/:hospid/:docid/:patientid', component: HUContactHomeComponent},
            {path: 'hu-profile/:hospid/:docid/:patientid', component: HUProfileComponent},      
          ]
        },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class AppModule { }
