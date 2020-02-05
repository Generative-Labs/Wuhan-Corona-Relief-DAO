import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAndAdoptNeedsPage } from './view-and-adopt-needs.page';

describe('ViewAndAdoptNeedsPage', () => {
  let component: ViewAndAdoptNeedsPage;
  let fixture: ComponentFixture<ViewAndAdoptNeedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAndAdoptNeedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAndAdoptNeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
