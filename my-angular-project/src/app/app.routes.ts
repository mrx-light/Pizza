import { Routes } from '@angular/router';
import { MainRouteComponent } from './pages/main-route/main-route.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AccountComponent } from './pages/account/account.component';
import { CareerComponent } from './pages/career/career.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';

export const routes: Routes = [
  { path: '', component: MainRouteComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'account', component: AccountComponent },
  { path: 'career', component: CareerComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'delivery', component: DeliveryComponent },

];
