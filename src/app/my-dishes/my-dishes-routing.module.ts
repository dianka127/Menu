import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDishesComponent } from './my-dishes.component';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  {
    path: '',
    component: MyDishesComponent,
  },
  {
    path: 'dish/:id',
    component: DishComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDishesRoutingModule {}
