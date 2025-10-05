import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProgramsComponent } from './featured-programs.component';

describe('FeaturedProgramsComponent', () => {
  let component: FeaturedProgramsComponent;
  let fixture: ComponentFixture<FeaturedProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
