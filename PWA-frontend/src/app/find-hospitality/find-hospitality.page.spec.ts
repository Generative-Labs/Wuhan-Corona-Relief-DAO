import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindHospitalityPage } from './find-hospitality.page';

describe('FindHospitalityPage', () => {
  let component: FindHospitalityPage;
  let fixture: ComponentFixture<FindHospitalityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHospitalityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindHospitalityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
