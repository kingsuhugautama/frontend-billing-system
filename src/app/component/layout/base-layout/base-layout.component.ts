import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/model/authentication/authentication.model';

export interface ISidebarMenuModel {
    id: string;
    caption: string;
    icon: string;
    url: string;
}

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

    SidebarMenu: ISidebarMenuModel[] = [];

    UserData: AuthenticationModel;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.onCheckActivePage();

        const sidebarMenu = JSON.parse(localStorage.getItem('SidebarMenu'));
        this.onSetSidebarMenu(sidebarMenu);

        this.UserData = JSON.parse(localStorage.getItem('UserData'));
    }

    onSetSidebarMenu(data: ISidebarMenuModel[]): void {
        this.SidebarMenu = data;
    }

    onClickSidebarItem(data: ISidebarMenuModel): void {
        this.router.navigateByUrl(data.url);

        localStorage.setItem('activePage', JSON.stringify(data));

        setTimeout(() => {
            this.SidebarMenu.filter((item) => {
                if (item.id !== data.id) {
                    const sidebarItem = document.getElementById(`${item.id}sidebarItem`) as HTMLElement;

                    if (sidebarItem.classList.contains('isActive')) {
                        sidebarItem.classList.remove('isActive');
                    };
                }
            });

            const elem = document.getElementById(`${data.id}sidebarItem`) as HTMLElement;
            elem.classList.add('isActive');

        }, 250);
    }

    onCheckActivePage(): void {
        const activePage = JSON.parse(localStorage.getItem('activePage'));

        if (activePage) {
            setTimeout(() => {
                const elem = document.getElementById(`${activePage.id}sidebarItem`) as HTMLElement;
                elem.classList.add('isActive');
            }, 250);
        }
    }
}
