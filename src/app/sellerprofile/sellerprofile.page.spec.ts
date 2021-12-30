import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SellerProfilePage } from './sellerprofile.page';

describe('sellerprofilePage', () => {
  let component: SellerProfilePage;
  let fixture: ComponentFixture<SellerProfilePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SellerProfilePage],
        imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
      }).compileComponents();

      fixture = TestBed.createComponent(SellerProfilePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
