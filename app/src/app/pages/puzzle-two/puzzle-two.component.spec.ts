import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleTwoComponent } from './puzzle-two.component';

describe('PuzzleTwoComponent', () => {
  let component: PuzzleTwoComponent;
  let fixture: ComponentFixture<PuzzleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
