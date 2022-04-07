import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    formAuthentication!: FormGroup;

    // ** true for Sign In, false for Register
    formAuthenticationState: boolean = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.onSetFormAuthenticationAttribute();
    }

    onSetFormAuthenticationAttribute(): any {
        this.formAuthentication = this.formBuilder.group({
            full_name: ['', []],
            no_identitas: ['', []],
            user_name: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onTogglingSeePassword(ElementId: string): void {
        const elem = (document.getElementById(ElementId) as HTMLInputElement);

        const elemIcon = (document.getElementById(ElementId + 'Icon') as HTMLElement);

        if (elem.type === 'password') {
            elem.type = 'text';
            elemIcon.classList.remove('fa-eye');
            elemIcon.classList.add('fa-eye-slash');
        } else {
            elem.type = 'password';
            elemIcon.classList.remove('fa-eye-slash');
            elemIcon.classList.add('fa-eye');
        }
    }

    onClickButtonSignIn(formAuthentication: any): void {
        console.log(formAuthentication);

        if (formAuthentication.username !== '' && formAuthentication.password !== '') {
            if (this.formAuthenticationState) {
                console.log('Login')
                this.authenticationService.onLogin(formAuthentication);
            } else {
                console.log('Register')
                this.authenticationService.onRegister(formAuthentication);
            };
        }

        if (formAuthentication.username === '' && formAuthentication.password === '') {
            this.utilityService.onShowingCustomAlert(
                'error',
                'Oops',
                'Sign In Failed'
            );
        }
    }

    onToggleButtonState(value: boolean): void {
        this.formAuthenticationState = !value;
    }

    get full_name(): any { return this.formAuthentication.get('full_name'); }
    get no_identitas(): any { return this.formAuthentication.get('no_identitas'); }
    get user_name(): any { return this.formAuthentication.get('user_name'); }
    get password(): any { return this.formAuthentication.get('password'); }
}
