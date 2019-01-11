import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit/edit.component';
import { TableComponent } from './edit/table/table.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DetilViewComponent } from './detil-view/detil-view.component';

const appRouters: Routes = [
  { path: 'Users', component: TableComponent },
  { path: 'Users/Add', component: NewUserComponent },
  { path: 'Users/Edit/:edit', component: EditComponent },
  { path: 'Users/Detail/:user', component: DetilViewComponent },
  { path: '', redirectTo: "Users", pathMatch: 'full' },
  { path: '**', redirectTo: "Users", pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    TableComponent,
    NewUserComponent,
    DetilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRouters),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
