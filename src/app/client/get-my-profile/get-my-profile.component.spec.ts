import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyProfileComponent } from './get-my-profile.component';

describe('GetMyProfileComponent', () => {
  let component: GetMyProfileComponent;
  let fixture: ComponentFixture<GetMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
