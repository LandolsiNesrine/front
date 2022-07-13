import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFiltreComponent } from './profile-filtre.component';

describe('ProfileFiltreComponent', () => {
  let component: ProfileFiltreComponent;
  let fixture: ComponentFixture<ProfileFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFiltreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
