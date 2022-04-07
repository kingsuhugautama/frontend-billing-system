import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBerandaComponent } from './customer-beranda.component';

describe('CustomerBerandaComponent', () => {
  let component: CustomerBerandaComponent;
  let fixture: ComponentFixture<CustomerBerandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBerandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
