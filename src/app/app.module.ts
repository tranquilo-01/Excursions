import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcursionListComponent } from './excursion-list/excursion-list.component';
import { ExcursionTileComponent } from './excursion-list/excursion-tile/excursion-tile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateExcursionComponent } from './create-excursion/create-excursion.component';
import { NavBasketComponent } from './navbar/nav-basket/nav-basket.component';
import { FilterExcPipe } from './pipes/filter-exc.pipe';
import { FilterComponent } from './excursion-list/filter/filter.component';
import { BasketComponent } from './basket/basket.component';
import { ExcursionDetailsComponent } from './excursion-details/excursion-details.component';
import { BoughtExcursionsComponent } from './bought-excursions/bought-excursions.component';
import { BoughtFilterComponent } from './bought-excursions/bought-filter/bought-filter.component';
import { FilterBoughtPipe } from './pipes/filter-bought.pipe';
import { ExcursionReviewComponent } from './excursion-details/excursion-review/excursion-review.component';
// import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { DBServiceService } from './services/dbservice.service';
import { ExcursionsResolverService } from './services/excursions-resolver.service';
import { ExcursionsData } from './services/excursions-data.service';
import { ExcFilterData } from './models/excFilterData.model';
import { BasketService } from './services/basket.service';
import { BoughtExcursionsService } from './services/bought-excursions.service';
import { BoughtFilterService } from './services/bought-filter.service';
import { PhotosService } from './services/photos.service';
import { PhotoResolverService } from './services/photo-resolver.service';
import { RevievsService } from './services/revievs.service';
import { ReviewResolverService } from './services/review-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { NavUserComponent } from './navbar/nav-user/nav-user.component';
import { BasketResolverService } from './services/basket-resolver.service';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserDetailsComponent } from './admin-view/user-details/user-details.component';
import { ExcursionManagerComponent } from './excursion-manager/excursion-manager.component';
import { ManagerExcursionDetailsComponent } from './excursion-manager/manager-excursion-details/manager-excursion-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcursionListComponent,
    ExcursionTileComponent,
    NavbarComponent,
    CreateExcursionComponent,
    NavBasketComponent,
    FilterExcPipe,
    FilterComponent,
    BasketComponent,
    ExcursionDetailsComponent,
    BoughtExcursionsComponent,
    BoughtFilterComponent,
    FilterBoughtPipe,
    ExcursionReviewComponent,
    AuthComponent,
    NavUserComponent,
    AdminViewComponent,
    UserDetailsComponent,
    ExcursionManagerComponent,
    ManagerExcursionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDl4RuTnW3GLGSRxK2KAusgqwMpuXGtAaE'
    // })
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    DBServiceService,
    ExcursionsResolverService,
    PhotoResolverService,
    ExcursionsData,
    BasketService,
    ExcFilterData,
    BoughtExcursionsService,
    BoughtFilterService,
    PhotosService,
    RevievsService,
    ReviewResolverService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
