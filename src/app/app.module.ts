import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { LoginhomepageComponent } from './loginhomepage/loginhomepage.component';
import { ConnectionsComponent } from './connections/connections.component';
import { OffersComponent } from './offers/offers.component';
import { SecurityComponent } from './security/security.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompaniesComponent,
    FreelancerComponent,
    BusinessesComponent,
    ServicesComponent,
    ContactusComponent,
    LoginComponent,
    GetstartedComponent,
    PartnershipComponent,
    CardpaymentComponent,
    LoginhomepageComponent,
    ConnectionsComponent,
    OffersComponent,
    SecurityComponent,
    ProfileComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
