import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBerandaComponent } from './admin-beranda.component';

describe('AdminBerandaComponent', () => {
  let component: AdminBerandaComponent;
  let fixture: ComponentFixture<AdminBerandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBerandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
