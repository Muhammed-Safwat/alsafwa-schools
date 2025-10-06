import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResarchCenterSectionComponent } from './resarch-center-section.component';

describe('ResarchCenterSectionComponent', () => {
  let component: ResarchCenterSectionComponent;
  let fixture: ComponentFixture<ResarchCenterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResarchCenterSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResarchCenterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
