import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadInfoPage } from './upload-info.page';

describe('UploadInfoPage', () => {
  let component: UploadInfoPage;
  let fixture: ComponentFixture<UploadInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
