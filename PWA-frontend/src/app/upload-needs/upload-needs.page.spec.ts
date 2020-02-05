import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadNeedsPage } from './upload-needs.page';

describe('UploadNeedsPage', () => {
  let component: UploadNeedsPage;
  let fixture: ComponentFixture<UploadNeedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadNeedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadNeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
