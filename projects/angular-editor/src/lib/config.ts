export interface CustomClass {
  name: string;
  class: string;
  tag?: string;
}
export interface Font {
  name: string;
  class: string;
}
export interface iconProperty {
  title: string;
  identifier: string;
  visibility: boolean;
  class: string;
  tabIndex?: number;
}
export interface iconGroup {
  groupName?: string;
  groupClass?: string;
  iconSet: iconProperty[];
}

export class AngularEditorConfig {
  editable?: boolean = true;
  spellcheck?: boolean;
  height?: 'auto' | string;
  minHeight?: '0' | string;
  maxHeight?: 'auto' | string;
  width?: 'auto' | string;
  minWidth?: '0' | string;
  translate?: 'yes' | 'now' | string;
  enableToolbar?: boolean;
  showToolbar?: boolean;
  placeholder?: string;
  defaultParagraphSeparator?: string;
  defaultFontName?: string;
  defaultFontSize?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | string;
  uploadUrl?: string;
  fonts?: Font[] = [
    { class: 'arial', name: 'Arial' },
    { class: 'times-new-roman', name: 'Times New Roman' },
    { class: 'calibri', name: 'Calibri' },
    { class: 'comic-sans-ms', name: 'Comic Sans MS' }
  ];
  customClasses?: CustomClass[];
  sanitize?: boolean;
  toolbarPosition?: 'top' | 'bottom' = 'top';

  /*Custom Attribute add by vasanth  */
  iconAvailibility: 'all' | 'specific' | 'none';
  iconGroup?: iconGroup[];


}
/*Sample default value */
/*
export const angularEditorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '0',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  iconAvailibility : 'all',
  fonts: [
    {class: 'arial', name: 'Arial'},
    {class: 'times-new-roman', name: 'Times New Roman'},
    {class: 'calibri', name: 'Calibri'},
    {class: 'comic-sans-ms', name: 'Comic Sans MS'}
  ],
  uploadUrl: 'v1/image',
  sanitize: true,
  toolbarPosition: 'top',
};
*/