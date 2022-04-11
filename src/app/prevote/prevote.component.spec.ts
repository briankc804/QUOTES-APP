import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevoteComponent } from './prevote.component';

describe('PrevoteComponent', () => {
  let component: PrevoteComponent;
  let fixture: ComponentFixture<PrevoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
