import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISidebarMenuModel } from 'src/app/component/layout/base-layout/base-layout.component';
import { AuthenticationModel } from 'src/app/model/authentication/authentication.model';
import { UtilityService } from '../utility/utility.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private router: Router,
        private utilityService: UtilityService
    ) { }

    onLogin(data: any): void {
        if (data.username.includes('@admin')) {
            this.utilityService.onShowingCustomAlert('success', 'Success', 'Login Berhasil')
                .then(() => {
                    const fakeResponse: AuthenticationModel = {
                        id_user: 1,
                        user_name: data.username,
                        full_name: 'Lalisa Manobal',
                        id_role: 2,
                        nama_role: 'Admin',
                        is_verified: true
                    };

                    this.onHandlingAuthentication(fakeResponse);
                })
        } else {
            this.utilityService.onShowingCustomAlert('success', 'Success', 'Login Berhasil')
                .then(() => {
                    const fakeResponse: AuthenticationModel = {
                        id_user: 1,
                        user_name: data.username,
                        full_name: 'Kim Jisoo',
                        id_role: 1,
                        nama_role: 'Customer',
                        is_verified: true
                    };

                    this.onHandlingAuthentication(fakeResponse);
                })
        }
    }

    onRegister(data: any): void {
        this.utilityService.onShowingCustomAlert('success', 'Register Berhasil', 'Mohon Lengkapi Data Anda')
            .then(() => {
                const fakeResponse: AuthenticationModel = {
                    id_user: 1,
                    user_name: data.username,
                    no_identitas: data.no_identitas,
                    full_name: data.full_name,
                    id_role: 1,
                    nama_role: 'Customer',
                    is_verified: false
                };

                this.onHandlingAuthentication(fakeResponse);
            })
    }

    onHandlingAuthentication(data: AuthenticationModel): void {
        localStorage.setItem('UserData', JSON.stringify(data));

        let sidebarMenu: ISidebarMenuModel[] = [];

        // ** Customer
        if (data.id_role == 1) {
            sidebarMenu = [
                {
                    id: 'overview',
                    caption: 'Overview',
                    icon: 'fas fa-layer-group fa-sm',
                    url: 'customer/beranda'
                },
                {
                    id: 'update_profile',
                    caption: 'Profile',
                    icon: 'fas fa-id-badge fa-sm',
                    url: 'customer/profile'
                },
                {
                    id: 'services',
                    caption: 'Services',
                    icon: 'fas fa-laptop-house fa-sm',
                    url: 'customer/services'
                },
                {
                    id: 'chat',
                    caption: 'Chat',
                    icon: 'fas fa-comments fa-sm',
                    url: 'customer/chat'
                },
                {
                    id: 'ticket',
                    caption: 'Ticket',
                    icon: 'fas fa-ticket-alt fa-sm',
                    url: 'customer/ticket'
                },
            ];
        }

        // ** Admin and DevOps
        if (data.id_role > 1) {
            sidebarMenu = [
                {
                    id: 'overview',
                    caption: 'Overview',
                    icon: 'fas fa-layer-group fa-sm',
                    url: 'admin/beranda'
                },
                {
                    id: 'chat',
                    caption: 'Chat',
                    icon: 'fas fa-comments fa-sm',
                    url: 'admin/chat'
                },
                {
                    id: 'ticket',
                    caption: 'Ticket',
                    icon: 'fas fa-ticket-alt fa-sm',
                    url: 'admin/ticket'
                },
            ];
        }

        localStorage.setItem('SidebarMenu', JSON.stringify(sidebarMenu));

        this.router.navigateByUrl(data.id_role > 1 ? 'admin/beranda' : 'customer/beranda');
    }
}
