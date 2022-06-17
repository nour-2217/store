import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: '',
    redirectTo: 'tools',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
