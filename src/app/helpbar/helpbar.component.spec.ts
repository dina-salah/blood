import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpbarComponent } from './helpbar.component';

describe('HelpbarComponent', () => {
  let component: HelpbarComponent;
  let fixture: ComponentFixture<HelpbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
