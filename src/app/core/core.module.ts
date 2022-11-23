import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent
  ],
  exports:[
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }
