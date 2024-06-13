import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { DonateComponent } from './donate/donate.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ContactComponent,
    HeaderComponent,
    BlogComponent,
    EventsComponent,
    DonateComponent,
    AboutComponent,
    FooterComponent,
    VolunteerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
