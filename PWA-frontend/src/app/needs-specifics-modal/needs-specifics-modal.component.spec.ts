import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeedsSpecificsModalComponent } from './needs-specifics-modal.component';

describe('NeedsSpecificsModalComponent', () => {
  let component: NeedsSpecificsModalComponent;
  let fixture: ComponentFixture<NeedsSpecificsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsSpecificsModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeedsSpecificsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
