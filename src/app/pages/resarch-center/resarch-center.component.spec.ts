import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResarchCenterComponent } from './resarch-center.component';

describe('ResarchCenterComponent', () => {
  let component: ResarchCenterComponent;
  let fixture: ComponentFixture<ResarchCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResarchCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResarchCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
