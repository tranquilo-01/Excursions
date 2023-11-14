import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AuthComponent } from './auth/auth.component';
import { BasketComponent } from './basket/basket.component';
import { BoughtExcursionsComponent } from './bought-excursions/bought-excursions.component';
import { CreateExcursionComponent } from './create-excursion/create-excursion.component';
import { ExcursionDetailsComponent } from './excursion-details/excursion-details.component';
import { ExcursionListComponent } from './excursion-list/excursion-list.component';
import { ExcursionManagerComponent } from './excursion-manager/excursion-manager.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { ManagerGuardGuard } from './guards/manager-guard.guard';
import { UserGuardGuard } from './guards/user-guard.guard';
import { HomeComponent } from './home/home.component';
import { BasketResolverService } from './services/basket-resolver.service';
import { BoughtResolverService } from './services/bought-resolver.service';
import { ExcursionsResolverService } from './services/excursions-resolver.service';
import { PhotoResolverService } from './services/photo-resolver.service';
import { ReviewResolverService } from './services/review-resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: [BasketResolverService] },
  {
    path: 'excursion-list',
    component: ExcursionListComponent,
    resolve: [ExcursionsResolverService, BasketResolverService],
  },
  {
    path: 'create-excursion',
    component: CreateExcursionComponent,
    canActivate: [ManagerGuardGuard],
  },
  { path: 'basket', component: BasketComponent, canActivate: [UserGuardGuard] },
  {
    path: 'bought-excursions',
    component: BoughtExcursionsComponent,
    resolve: [BoughtResolverService],
    canActivate: [UserGuardGuard],
  },
  {
    path: 'excursion-list/excursion/:id',
    component: ExcursionDetailsComponent,
    resolve: [
      ExcursionsResolverService,
      PhotoResolverService,
      ReviewResolverService,
      BoughtResolverService,
    ],
    canActivate: [UserGuardGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'admin-view',
    component: AdminViewComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: 'excursion-manager',
    component: ExcursionManagerComponent,
    canActivate: [ManagerGuardGuard],
    resolve: [ExcursionsResolverService, PhotoResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
