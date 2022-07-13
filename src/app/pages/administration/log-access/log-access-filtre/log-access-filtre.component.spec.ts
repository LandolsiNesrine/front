import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAccessFiltreComponent } from './log-access-filtre.component';

describe('LogAccessFiltreComponent', () => {
  let component: LogAccessFiltreComponent;
  let fixture: ComponentFixture<LogAccessFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAccessFiltreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAccessFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
