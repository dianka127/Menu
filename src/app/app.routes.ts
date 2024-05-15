import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'my-dishes',
    loadChildren: () =>
      import('./my-dishes/my-dishes.module').then(module => module.MyDishesModule),
  },
  {
    path: 'my-dishes/dish',
    loadChildren: () =>
      import('./dish/dish.module').then(module => module.DishModule),
  },

];
