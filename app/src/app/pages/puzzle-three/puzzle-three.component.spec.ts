import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleThreeComponent } from './puzzle-three.component';

describe('PuzzleThreeComponent', () => {
  let component: PuzzleThreeComponent;
  let fixture: ComponentFixture<PuzzleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
