import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteLearningSectionComponent } from './remote-learning-section.component';

describe('RemoteLearningSectionComponent', () => {
  let component: RemoteLearningSectionComponent;
  let fixture: ComponentFixture<RemoteLearningSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteLearningSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteLearningSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
