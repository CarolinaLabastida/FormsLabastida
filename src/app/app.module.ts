import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { IndexComponent } from './Student/index/index.component';
import { CreateComponent } from './Student/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorHelperModule } from './shared/form-error-helper/form-error-helper.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    HomeComponent,
    PageWrapperComponent,
    IndexComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormErrorHelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
