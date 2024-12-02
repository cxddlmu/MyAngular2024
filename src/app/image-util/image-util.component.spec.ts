import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUtilComponent } from './image-util.component';

describe('ImageUtilComponent', () => {
  let component: ImageUtilComponent;
  let fixture: ComponentFixture<ImageUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUtilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
