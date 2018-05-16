import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserModuleRouting } from './user-module.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { LeafHouseComponent } from './components/leaf-house/leaf-house.component';
import { FinanceComponent } from './components/finance/finance.component';
import { FSetupComponent } from './components/f-setup/f-setup.component';
import { FinanceGuard } from '../services/finance-guard.service';


@NgModule({
  imports: [
    CommonModule,
    UserModuleRouting,
    FormsModule
  ],
  declarations: [
  	ProfileComponent, 
  	RepositoryComponent, 
  	UserMainComponent, 
  	NavbarComponent, 
  	NoticeBoardComponent, 
    LeafHouseComponent, FinanceComponent, FSetupComponent
  ],
  providers: [

      FinanceGuard
  ]
})
export class UserModule { }
