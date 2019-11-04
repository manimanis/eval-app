import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-paste-code',
  templateUrl: './paste-code.component.html',
  styleUrls: ['./paste-code.component.css']
})
export class PasteCodeComponent implements OnInit {

  code = '';
  generatedCode = '';

  constructor(private _clipboardService: ClipboardService) { }

  ngOnInit() {
  }

  generateCode() {
    this.generatedCode = this.code
      .split('')
      .map(car => {
        switch (car) {
          case '\n':
            return '\\n';
          case '\\':
            return '\\\\';
          case '"':
              return '\\"';
          default:
            return car;
        }
      })
      .join('');
    this.copyCode(null);
    this.code = '';
  }

  copyCode(btn) {
    this._clipboardService.copyFromContent(this.generatedCode);
  }

}
