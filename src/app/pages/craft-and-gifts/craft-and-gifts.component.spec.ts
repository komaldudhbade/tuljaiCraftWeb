import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftAndGiftsComponent } from './craft-and-gifts.component';

describe('CraftAndGiftsComponent', () => {
  let component: CraftAndGiftsComponent;
  let fixture: ComponentFixture<CraftAndGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftAndGiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftAndGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
