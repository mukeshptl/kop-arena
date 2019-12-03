import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecentFixtureComponent } from './home-recent-fixture.component';

describe('HomeRecentFixtureComponent', () => {
  let component: HomeRecentFixtureComponent;
  let fixture: ComponentFixture<HomeRecentFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecentFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecentFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
