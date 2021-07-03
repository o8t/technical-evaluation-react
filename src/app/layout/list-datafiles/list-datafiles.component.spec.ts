import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListDatafilesComponent } from './list-datafiles.component';

describe('ListDatafilesComponent', () => {
    let component: ListDatafilesComponent;
    let fixture: ComponentFixture<ListDatafilesComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ListDatafilesComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ListDatafilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
