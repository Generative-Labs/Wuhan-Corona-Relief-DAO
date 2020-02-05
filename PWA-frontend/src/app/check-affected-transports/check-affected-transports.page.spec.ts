import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckAffectedTransportsPage } from './check-affected-transports.page';

describe('CheckAffectedTransportsPage', () => {
  let component: CheckAffectedTransportsPage;
  let fixture: ComponentFixture<CheckAffectedTransportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAffectedTransportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckAffectedTransportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
