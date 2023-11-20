import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';

var angulaMaterialModules = [
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatDividerModule,
  MatCheckboxModule,
  FormsModule,
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MarkdownModule.forRoot(), angulaMaterialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
