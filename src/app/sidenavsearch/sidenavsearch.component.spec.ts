import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavsearchComponent } from './sidenavsearch.component';

describe('SidenavsearchComponent', () => {
  let component: SidenavsearchComponent;
  let fixture: ComponentFixture<SidenavsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
