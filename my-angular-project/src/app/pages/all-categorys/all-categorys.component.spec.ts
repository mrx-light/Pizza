import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategorysComponent } from './all-categorys.component';

describe('AllCategorysComponent', () => {
  let component: AllCategorysComponent;
  let fixture: ComponentFixture<AllCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCategorysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
