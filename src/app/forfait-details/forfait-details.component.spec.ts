import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitDetailsComponent } from './forfait-details.component';

describe('ForfaitDetailsComponent', () => {
  let component: ForfaitDetailsComponent;
  let fixture: ComponentFixture<ForfaitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
