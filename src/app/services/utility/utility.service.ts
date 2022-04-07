import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() { }

    // ** Showing Alert with Timer
    onShowingCustomAlert(icon: any, title: string, message: string, customClass?: string): Promise<any> {
        return Swal.fire({
            icon,
            title,
            text: message,
            showCloseButton: false,
            showConfirmButton: true,
            customClass: {
                popup: customClass
            }
        });
    }

    onShowingMultipleMessageAlert(icon: any, title: string, message: any): Promise<any> {
        let text = "";

        message.forEach((item: any) => {
            text += `<li class="text-danger mb-1">${item}</li>`;
        });

        return Swal.fire({
            icon,
            title,
            html: `<ul>${text}</ul>`,
            showCloseButton: false,
            showConfirmButton: true,
            customClass: {
                popup: 'swal-wide',
                htmlContainer: 'text-justify'
            }
        })
    }

    onShowCustomAlertWithTimer(icon: any, title: string, message: string, timer?: number): Promise<any> {
        return Swal.fire({
            icon,
            title,
            text: message,
            timer,
            showCloseButton: false,
            showConfirmButton: false
        });
    }

    onShowLoading(): Promise<any> {
        let timerInterval: any;

        return Swal.fire({
            title: 'Loading...',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCancelButton: false,
            willOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b: any = content.querySelector('b');

                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((alertResponse) => {
            if (alertResponse.dismiss === Swal.DismissReason.timer) {

            }
        });
    }

    onShowingConfirmationAlert(icon: any, title: string, message: string, actionYes: () => any, actionNo: () => any): Promise<any> {
        return Swal.fire({
            icon,
            title,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
        }).then((result) => {
            if (result.isConfirmed) {
                actionYes();
            } else if (result.isDenied) {
                actionNo();
            }
        });
    }

    onShowLoadingBeforeSend(): void {
        Swal.fire({
            title: 'Loading...',
            showCancelButton: false,
            showConfirmButton: false,
            showDenyButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });
    }

    // ** Generate Custom Hex Color for Border
    onGenerateCustomColor(): any {
        const numberHex = (Math.random() * 0xfffff * 1000000).toString(16);

        return '#' + numberHex.slice(0, 6);
    }
}
