import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from './components/user-main/user-main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent }from './components/repository/repository.component';
import { LeafHouseComponent } from './components/leaf-house/leaf-house.component';
import { FinanceComponent } from './components/finance/finance.component';
import { CashInventoryComponent } from './components/cash-inventory/cash-inventory.component';
import { FSetupComponent } from './components/f-setup/f-setup.component';
import { CiSetupComponent } from './components/ci-setup/ci-setup.component';
import { AuthGuard } from '../services/auth-guard.service';
import { FinanceGuard } from '../services/finance-guard.service';



const route :Routes = [

	{
		path: 'user', component: UserMainComponent,
		
			canActivate: [AuthGuard],

		children: [

			{
				path:'', redirectTo: 'cash-inventory', pathMatch: 'full'
			},
			{
				path:'profile', component: ProfileComponent
			},
			{
				path:'repository', component: RepositoryComponent
			},
			{
				path: 'cash-inventory', component: CashInventoryComponent
			},
			{
				path: 'ci/setup', component : CiSetupComponent ,
				canActivate : [FinanceGuard]
			}
		]
	}
]

export const UserModuleRouting: ModuleWithProviders = RouterModule.forRoot(route);