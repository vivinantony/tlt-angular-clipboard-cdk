import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ClipboardModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
