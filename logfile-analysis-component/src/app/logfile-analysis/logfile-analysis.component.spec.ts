import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogfileAnalysisComponent } from './logfile-analysis.component';

describe('LogfileAnalysisComponent', () => {
  let component: LogfileAnalysisComponent;
  let fixture: ComponentFixture<LogfileAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogfileAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogfileAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
