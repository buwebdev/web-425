import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  template: `
    <section class="w4-grid w4-grid-auth">
      <div class="w4-auth-intro">
        <p class="w4-eyebrow">Welcome back</p>
        <h1>Your next taco is just a sign-in away.</h1>
        <p>Sign in to continue to the Virtual Taco Stand and pick up where you left off.</p>
        <a routerLink="/menu" class="w4-link-arrow">Browse the menu <span aria-hidden="true">→</span></a>
      </div>

      <div class="w4-auth-panel">
        <form [formGroup]="signinForm" (ngSubmit)="signin()" class="w4-panel w4-form">
          <div class="w4-section-heading">
            <div class="w4-icon-circle" aria-hidden="true">VTS</div>
            <div>
              <h2>Complete the form below to sign in.</h2>
              <p>Enter your account credentials.</p>
            </div>
          </div>

          <fieldset>
            <legend>User Sign In</legend>

            <div class="w4-field">
              <label for="email">Email</label>
              <input formControlName="email" type="email" id="email" name="email" autocomplete="username" placeholder="you@example.com" />
              @if (signinForm.controls['email'].touched && signinForm.controls['email'].hasError('required')) {
                <small class="w4-error">Email is required.</small>
              }
              @if (signinForm.controls['email'].touched && signinForm.controls['email'].hasError('email')) {
                <small class="w4-error">Invalid email address.</small>
              }
            </div>

            <div class="w4-field">
              <label for="password">Password</label>
              <input formControlName="password" id="password" type="password" autocomplete="current-password" placeholder="Enter your password" />
              @if (signinForm.controls['password'].touched && signinForm.controls['password'].hasError('required')) {
                <small class="w4-error">Password is required.</small>
              }
              @if (signinForm.controls['password'].touched && signinForm.controls['password'].hasError('pattern')) {
                <small class="w4-error">Password must be at least 8 characters long and contain at least one uppercase letter and one number.</small>
              }
            </div>

            <input class="w4-btn w4-btn-primary w4-btn-block" type="submit" [disabled]="!signinForm.valid" value="Sign In" />
          </fieldset>
        </form>
      </div>
    </section>
  `
})
export class SigninComponent {
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)])]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  signin() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    if (this.authService.signin(email, password)) {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigate([returnUrl]);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
