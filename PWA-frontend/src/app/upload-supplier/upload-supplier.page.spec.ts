import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadSupplierPage } from './upload-supplier.page';

describe('UploadSupplierPage', () => {
  let component: UploadSupplierPage;
  let fixture: ComponentFixture<UploadSupplierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSupplierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadSupplierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
