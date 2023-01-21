import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DirectivesDeepDriveComponent } from './directives-deep-drive/directives-deep-drive.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServicesDependancyInjectionComponent } from './services-dependancy-injection/services-dependancy-injection.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import {AccountService} from "./services/account.service";
import {LoggingService} from "./services/logging.service";
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import ShoppingListService from "./shopping-list/shopping-list.service";

import {AppRoutingModule} from "./app-routing.module";
import {RoutingComponent} from "./routing/routing.component";
import {HomeComponent} from "./routing/home/home.component";
import {ServersComponent} from "./routing/servers/servers.component";
import {UserComponent} from "./routing/users/user/user.component";
import {EditServerComponent} from "./routing/servers/edit-server/edit-server.component";
import {UsersComponent} from "./routing/users/users.component";
import {ServerComponent} from "./routing/servers/server/server.component";
import {ServersService} from "./routing/servers/servers.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DirectivesDeepDriveComponent,
    DropdownDirective,
    ServicesDependancyInjectionComponent,
    AccountComponent,
    NewAccountComponent,
    RecipeBookComponent,

    RoutingComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    UserComponent,
    UsersComponent,
    EditServerComponent,



    // AppRoutingModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    AppRoutingModule
  ],
  providers: [AccountService,LoggingService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
