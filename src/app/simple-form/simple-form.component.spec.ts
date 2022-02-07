import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { SimpleFormComponent } from './simple-form.component';
import { SimpleFormService } from './simple-form.service';
import { SimpleFormServiceMock } from '../mocks/simple-form.service.mock';

fdescribe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        SimpleFormComponent 
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: SimpleFormService, useClass: SimpleFormServiceMock }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SimpleFormComponent);
      component = fixture.componentInstance;

      //selecionador o form com By.css para pegar o elemento conforme seletor css
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a title as "Simple form to test"', async () => {
    expect(component.title).toEqual('Simple form to test');
  });

  it('should set formSubmitted to true', async () => {
    component.onSubmit();
    expect(component.formSubmitted).toBeTruthy();
  });

  it('should call the onSubmit method', async () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form should be invalid', async () => {
    component.form.controls['name'].setValue('');
    component.form.controls['email'].setValue('');
    expect(component.form.valid).toBeFalsy();
  })

  it('form should be valid', async () => {
    component.form.controls['name'].setValue('asaas');
    component.form.controls['email'].setValue('asd@asd.com');
    expect(component.form.valid).toBeTruthy();
  })
});
