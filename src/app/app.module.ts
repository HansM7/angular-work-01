import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvaSidebarComponent } from './canva-sidebar/canva-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    ContentWrapperComponent,
    ToolbarComponent,
    CanvaSidebarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
