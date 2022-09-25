import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDataProfileComponent } from './log-data-profile.component';

describe('LogDataProfileComponent', () => {
  let component: LogDataProfileComponent;
  let fixture: ComponentFixture<LogDataProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogDataProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
