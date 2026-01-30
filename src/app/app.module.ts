import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { QuickAccessBtnComponent } from './shared/components/quick-access-btn/quick-access-btn.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    QuickAccessBtnComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
