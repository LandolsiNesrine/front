import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDataFiltreComponent } from './log-data-filtre.component';

describe('LogDataFiltreComponent', () => {
  let component: LogDataFiltreComponent;
  let fixture: ComponentFixture<LogDataFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogDataFiltreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
