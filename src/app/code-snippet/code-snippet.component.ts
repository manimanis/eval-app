import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

declare var $: any;

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit, AfterViewChecked {

  @Input() code = '';
  @Input() language = '';

  constructor(private _clipboardService: ClipboardService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    $('[data-toggle]').tooltip();
  }

  copyCode(btn) {
    this._clipboardService.copyFromContent(this.code);
  }

}
