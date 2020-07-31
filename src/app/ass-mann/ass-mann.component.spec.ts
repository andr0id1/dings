import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssMannComponent } from './ass-mann.component';

describe('AssMannComponent', () => {
  let component: AssMannComponent;
  let fixture: ComponentFixture<AssMannComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssMannComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssMannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
