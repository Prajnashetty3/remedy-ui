import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedySearchComponent } from './remedy-search.component';

describe('RemedySearchComponent', () => {
  let component: RemedySearchComponent;
  let fixture: ComponentFixture<RemedySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
