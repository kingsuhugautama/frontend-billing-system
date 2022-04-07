import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBerandaComponent } from './pages/admin/admin-beranda/admin-beranda.component';
import { AdminChatComponent } from './pages/admin/admin-chat/admin-chat.component';
import { AdminDetailTicketComponent } from './pages/admin/admin-ticket/admin-detail-ticket/admin-detail-ticket.component';
import { AdminTicketComponent } from './pages/admin/admin-ticket/admin-ticket.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { CustomerBerandaComponent } from './pages/customer/customer-beranda/customer-beranda.component';
import { CustomerRegistrationComponent } from './pages/customer/customer-registration/customer-registration.component';
import { CustomerServicesComponent } from './pages/customer/customer-services/customer-services.component';
import { CustomerTicketComponent } from './pages/customer/customer-ticket/customer-ticket.component';

const routes: Routes = [
    { path: '', component: AuthenticationComponent, data: { title: '' } },
    { path: 'registrasi', component: CustomerRegistrationComponent, data: { title: 'Customer Registration' } },
    {
        path: 'customer', children: [
            { path: 'beranda', component: CustomerBerandaComponent, data: { title: 'Beranda' } },
            { path: 'profile', component: CustomerRegistrationComponent, data: { title: 'Profile' } },
            { path: 'services', component: CustomerServicesComponent, data: { title: 'Services' } },
            { path: 'ticket', component: CustomerTicketComponent, data: { title: 'Ticket' } },
        ]
    },
    {
        path: 'admin', children: [
            { path: 'beranda', component: AdminBerandaComponent, data: { title: 'Beranda' } },
            { path: 'chat', component: AdminChatComponent, data: { title: 'Chat' } },
            { path: 'ticket', component: AdminTicketComponent, data: { title: 'Ticket' } },
            { path: 'ticket-detail', component: AdminDetailTicketComponent, data: { title: 'Ticket Detail' } },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
