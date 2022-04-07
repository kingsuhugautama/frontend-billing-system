import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailTicketComponent } from './admin-detail-ticket.component';

describe('AdminDetailTicketComponent', () => {
  let component: AdminDetailTicketComponent;
  let fixture: ComponentFixture<AdminDetailTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
