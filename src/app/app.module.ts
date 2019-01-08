import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit/edit.component';
import { TableComponent } from './edit/table/table.component';

const appRouters: Routes = [
  {path: 'Users' , component: TableComponent},
  {path: 'Users/Edit/:edit' , component: EditComponent},
  {path: '' , redirectTo: "Users" , pathMatch: 'full'},
  {path: '**' , redirectTo: "Users" , pathMatch:'full'}
] 




@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
