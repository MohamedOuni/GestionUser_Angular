import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedialogueComponent } from './deletedialogue.component';

describe('DeletedialogueComponent', () => {
  let component: DeletedialogueComponent;
  let fixture: ComponentFixture<DeletedialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
