import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteLearningComponent } from './remote-learning.component';

describe('RemoteLearningComponent', () => {
  let component: RemoteLearningComponent;
  let fixture: ComponentFixture<RemoteLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
