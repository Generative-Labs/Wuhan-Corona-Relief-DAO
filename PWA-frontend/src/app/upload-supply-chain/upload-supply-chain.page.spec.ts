import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadSupplyChainPage } from './upload-supply-chain.page';

describe('UploadSupplyChainPage', () => {
  let component: UploadSupplyChainPage;
  let fixture: ComponentFixture<UploadSupplyChainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSupplyChainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadSupplyChainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
