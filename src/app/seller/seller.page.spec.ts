import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SellerPage } from './seller.page';

describe('SellerPage', () => {
  let component: SellerPage;
  let fixture: ComponentFixture<SellerPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SellerPage],
        imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
      }).compileComponents();

      fixture = TestBed.createComponent(SellerPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
