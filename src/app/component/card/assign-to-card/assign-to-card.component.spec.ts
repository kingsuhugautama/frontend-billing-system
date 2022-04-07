import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToCardComponent } from './assign-to-card.component';

describe('AssignToCardComponent', () => {
  let component: AssignToCardComponent;
  let fixture: ComponentFixture<AssignToCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignToCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignToCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
