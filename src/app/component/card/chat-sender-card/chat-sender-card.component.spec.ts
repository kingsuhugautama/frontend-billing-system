import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSenderCardComponent } from './chat-sender-card.component';

describe('ChatSenderCardComponent', () => {
  let component: ChatSenderCardComponent;
  let fixture: ComponentFixture<ChatSenderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSenderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSenderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
