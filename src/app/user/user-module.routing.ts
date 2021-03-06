import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from './components/user-main/user-main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent }from './components/repository/repository.component';
import { LeafHouseComponent } from './components/leaf-house/leaf-house.component';


const route :Routes = [

	{
		path: 'user', component: UserMainComponent,

		children: [

			{
				path:'', redirectTo: 'leaf-house', pathMatch: 'full'
			},
			{
				path:'profile', component: ProfileComponent
			},
			{
				path:'repository', component: RepositoryComponent
			},
			{
				path: 'leaf-house', component: LeafHouseComponent
			}
		]
	}
]

export const UserModuleRouting: ModuleWithProviders = RouterModule.forRoot(route);