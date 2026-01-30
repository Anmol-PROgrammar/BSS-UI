import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessBtnComponent } from './quick-access-btn.component';

describe('QuickAccessBtnComponent', () => {
  let component: QuickAccessBtnComponent;
  let fixture: ComponentFixture<QuickAccessBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickAccessBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickAccessBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
