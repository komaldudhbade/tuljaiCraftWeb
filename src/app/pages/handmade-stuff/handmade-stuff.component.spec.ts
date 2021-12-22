import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadeStuffComponent } from './handmade-stuff.component';

describe('HandmadeStuffComponent', () => {
  let component: HandmadeStuffComponent;
  let fixture: ComponentFixture<HandmadeStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandmadeStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandmadeStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
