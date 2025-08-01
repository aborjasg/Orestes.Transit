import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureMaker } from './picture-maker';

describe('PictureMaker', () => {
  let component: PictureMaker;
  let fixture: ComponentFixture<PictureMaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureMaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureMaker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
