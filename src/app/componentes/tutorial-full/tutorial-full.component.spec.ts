import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialFullComponent } from './tutorial-full.component';

describe('TutorialFullComponent', () => {
  let component: TutorialFullComponent;
  let fixture: ComponentFixture<TutorialFullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialFullComponent]
    });
    fixture = TestBed.createComponent(TutorialFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
