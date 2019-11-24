import { Component, OnInit } from '@angular/core';

declare var Prism: any;

@Component({
  selector: 'app-code-beautify',
  templateUrl: './code-beautify.component.html',
  styleUrls: ['./code-beautify.component.css']
})
export class CodeBeautifyComponent implements OnInit {

  rawCode = '';
  beautifiedCode = '';
  languageCode = 'language-algorithm';

  constructor() { }

  ngOnInit() {
  }

  beautifyCode() {
    this.beautifiedCode = this.rawCode;
    const destination = document.querySelector('#destination');
    const codeElem = destination.querySelector('code');
    codeElem.className = this.languageCode;
    codeElem.textContent = this.beautifiedCode;
    Prism.highlightElement(codeElem);
  }

}
