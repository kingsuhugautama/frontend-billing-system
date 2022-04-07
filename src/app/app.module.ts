import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePickerModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ComboBoxModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { CustomerBerandaComponent } from './pages/customer/customer-beranda/customer-beranda.component';
import { AdminBerandaComponent } from './pages/admin/admin-beranda/admin-beranda.component';
import { ValidatorComponent } from './component/form/validator/validator.component';
import { BaseLayoutComponent } from './component/layout/base-layout/base-layout.component';
import { AdminTicketComponent } from './pages/admin/admin-ticket/admin-ticket.component';
import { TabComponent } from './component/navigation/tab/tab.component';
import { TabLabelComponent } from './component/navigation/tab/tab-label/tab-label.component';
import { TabItemComponent } from './component/navigation/tab/tab-item/tab-item.component';
import { TabBodyComponent } from './component/navigation/tab/tab-body/tab-body.component';
import { OffcanvasFilterComponent } from './component/filter/offcanvas-filter/offcanvas-filter.component';
import { ActionButtonComponent } from './component/button/action-button/action-button.component';
import { TicketCardComponent } from './component/card/ticket-card/ticket-card.component';
import { AdminDetailTicketComponent } from './pages/admin/admin-ticket/admin-detail-ticket/admin-detail-ticket.component';
import { RecentActivityCardComponent } from './component/card/recent-activity-card/recent-activity-card.component';
import { PriorityCardComponent } from './component/card/priority-card/priority-card.component';
import { ChatSenderCardComponent } from './component/card/chat-sender-card/chat-sender-card.component';
import { ChatReceiverCardComponent } from './component/card/chat-receiver-card/chat-receiver-card.component';
import { ChatComponent } from './component/chat/chat.component';
import { ChatInputMessageComponent } from './component/chat/chat-input-message/chat-input-message.component';
import { CustomerDetailsCardComponent } from './component/card/customer-details-card/customer-details-card.component';
import { AssignToCardComponent } from './component/card/assign-to-card/assign-to-card.component';
import { AdminChatComponent } from './pages/admin/admin-chat/admin-chat.component';
import { CustomerTicketComponent } from './pages/customer/customer-ticket/customer-ticket.component';
import { CreateCustomerTicketComponent } from './pages/customer/customer-ticket/create-customer-ticket/create-customer-ticket.component';
import { CustomerRegistrationComponent } from './pages/customer/customer-registration/customer-registration.component';
import { CustomerServicesComponent } from './pages/customer/customer-services/customer-services.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        CustomerBerandaComponent,
        AdminBerandaComponent,
        ValidatorComponent,
        BaseLayoutComponent,
        AdminTicketComponent,
        TabComponent,
        TabLabelComponent,
        TabItemComponent,
        TabBodyComponent,
        OffcanvasFilterComponent,
        ActionButtonComponent,
        TicketCardComponent,
        AdminDetailTicketComponent,
        RecentActivityCardComponent,
        PriorityCardComponent,
        ChatSenderCardComponent,
        ChatReceiverCardComponent,
        ChatComponent,
        ChatInputMessageComponent,
        CustomerDetailsCardComponent,
        AssignToCardComponent,
        AdminChatComponent,
        CustomerTicketComponent,
        CreateCustomerTicketComponent,
        CustomerRegistrationComponent,
        CustomerServicesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        DatePickerModule,
        DateRangePickerModule,
        DropDownListModule,
        ComboBoxModule,
        PopoverModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
