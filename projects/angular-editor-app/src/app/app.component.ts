import {Component, OnInit} from '@angular/core';
/* updated to Import Interface from the local lib */
import {AngularEditorConfig} from '../../../angular-editor/src/lib/config';
//import {AngularEditorConfig} from 'angular-editor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  form: FormGroup;

  htmlContent1 = '';
  htmlContent2 = '';

  config: Partial<AngularEditorConfig> = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: true,
    toolbarPosition: 'bottom',
    iconAvailibility : 'all',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    iconGroup : [
      {
        groupName: 'Staging Group',
        groupClass : '',
        iconSet  :[
          {
            title: 'Undo',
            identifier : 'undo',
            visibility: true,
            class: 'fa fa-undo',
            tabIndex: 1
          },{
            title: 'Redo',
            identifier : 'redo',
            visibility: true,
            class: 'fa fa-repeat',
            tabIndex: 2
          }
        ] 
      },
      {
        groupName: ' Group 2',
        groupClass : '',
        iconSet  :[
          {
            title: 'Bold',
            identifier : 'bold',
            visibility: true,
            class: 'fa fa-bold',
            tabIndex: 3
          },{
            title: 'Italic',
            identifier : 'italic',
            visibility: true,
            class: 'fa fa-italic',
            tabIndex: 4
          }
        ] 
      }
    ]
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      signature: ['test2', Validators.required]
    });
    console.log(this.htmlContent1);
  }
  executeCommand(command: string) {
    console.log(command)
  }

  onChange(event) {
    console.log('changed');
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  onChange2(event) {
    console.warn(this.form.value);
  }
}
