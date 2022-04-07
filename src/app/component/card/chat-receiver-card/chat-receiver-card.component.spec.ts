import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatReceiverCardComponent } from './chat-receiver-card.component';

describe('ChatReceiverCardComponent', () => {
  let component: ChatReceiverCardComponent;
  let fixture: ComponentFixture<ChatReceiverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatReceiverCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatReceiverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
