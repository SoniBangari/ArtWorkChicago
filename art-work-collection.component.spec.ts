import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWorkCollectionComponent } from './art-work-collection.component';

describe('ArtWorkCollectionComponent', () => {
  let component: ArtWorkCollectionComponent;
  let fixture: ComponentFixture<ArtWorkCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtWorkCollectionComponent]
    });
    fixture = TestBed.createComponent(ArtWorkCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
