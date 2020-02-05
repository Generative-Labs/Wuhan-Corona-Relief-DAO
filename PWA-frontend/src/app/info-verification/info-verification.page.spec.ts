import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoVerificationPage } from './info-verification.page';

describe('InfoVerificationPage', () => {
  let component: InfoVerificationPage;
  let fixture: ComponentFixture<InfoVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVerificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
