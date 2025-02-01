import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperdiffComponent } from './superdiff.component';

describe('SuperdiffComponent', () => {
  let component: SuperdiffComponent;
  let fixture: ComponentFixture<SuperdiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperdiffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperdiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
