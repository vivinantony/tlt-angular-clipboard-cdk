import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private clipboard: Clipboard) {}

  copyToClipboard() {
    const content = document.getElementById('content').innerHTML;
    this.clipboard.copy(content);
  }
}
