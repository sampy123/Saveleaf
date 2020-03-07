import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaperPage } from './paper.page';

describe('PaperPage', () => {
  let component: PaperPage;
  let fixture: ComponentFixture<PaperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
