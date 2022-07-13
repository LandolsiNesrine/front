import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFiltreComponent } from './users-filtre.component';

describe('UsersFiltreComponent', () => {
  let component: UsersFiltreComponent;
  let fixture: ComponentFixture<UsersFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersFiltreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
