import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlassPage } from './glass.page';

describe('GlassPage', () => {
  let component: GlassPage;
  let fixture: ComponentFixture<GlassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
