import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent }   from './profile/profile.component';
import { BlogComponent }      from './blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  // RouterModule.forRoot(routes, { useHash: true })
  imports: [ RouterModule.forRoot(routes)  // .../#/home/
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
