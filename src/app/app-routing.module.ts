import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {TutorialFullComponent} from "./componentes/tutorial-full/tutorial-full.component";
import {AddTutorialComponent} from "./componentes/add-tutorial/add-tutorial.component";
const routes: Routes = [
  { path: 'tareas', component: TutorialFullComponent },
  { path: 'agregar-tarea', component: AddTutorialComponent },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' }, // Redirige a 'tareas' por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
