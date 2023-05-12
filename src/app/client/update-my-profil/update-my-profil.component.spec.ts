import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyProfilComponent } from './update-my-profil.component';

describe('UpdateMyProfilComponent', () => {
  let component: UpdateMyProfilComponent;
  let fixture: ComponentFixture<UpdateMyProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMyProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMyProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
