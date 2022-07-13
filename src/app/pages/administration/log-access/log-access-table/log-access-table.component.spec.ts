import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAccessTableComponent } from './log-access-table.component';

describe('LogAccessTableComponent', () => {
  let component: LogAccessTableComponent;
  let fixture: ComponentFixture<LogAccessTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAccessTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAccessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
