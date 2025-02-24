import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutCompleteComponent } from './logout-complete.component';

describe('LogoutCompleteComponent', () => {
  let component: LogoutCompleteComponent;
  let fixture: ComponentFixture<LogoutCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
