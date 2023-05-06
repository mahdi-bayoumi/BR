import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { CompaniesComponent } from './companies/companies.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { HeaderComponent } from './header/header.component';
import { LoginhomepageComponent } from './loginhomepage/loginhomepage.component';
import { OffersComponent } from './offers/offers.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { ServicesComponent } from './services/services.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path: "home",pathMatch:"full",redirectTo:"home"},
  {path:"login",component:LoginComponent},
  {path:"businesses",component:BusinessesComponent},
  {path:"cardpayment",component:CardpaymentComponent},
  {path:"companies",component:CompaniesComponent},
  {path:"connection",component:ConnectionsComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"footer",component:FooterComponent},
  {path:"freelancer",component:FreelancerComponent},
  {path:"getstarted",component:GetstartedComponent},
  {path:"header",component:HeaderComponent},
  {path:"loginhomepage",component:LoginhomepageComponent},
  {path:"offers",component:OffersComponent},
  {path:"partnership",component:PartnershipComponent},
  {path:"profile",component:ProfileComponent},
  {path:"security",component:SecurityComponent},
  {path:"services",component:ServicesComponent},
  {path:"setting",component:SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routingcomponent=[HomeComponent,LoginComponent,BusinessesComponent,CardpaymentComponent,CompaniesComponent,ConnectionsComponent,ContactusComponent,FooterComponent,FreelancerComponent,GetstartedComponent,HeaderComponent,HomeComponent,LoginComponent,LoginhomepageComponent,OffersComponent,PartnershipComponent,ProfileComponent,SecurityComponent,ServicesComponent,SettingComponent];