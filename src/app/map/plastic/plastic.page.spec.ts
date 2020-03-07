import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlasticPage } from './plastic.page';

describe('PlasticPage', () => {
  let component: PlasticPage;
  let fixture: ComponentFixture<PlasticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasticPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlasticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
