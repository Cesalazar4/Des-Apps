import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostComponent } from './pages/post/post.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'posts', component: PostComponent },
    { path: 'form', component: FormularioComponent },
    { path: 'formulario', component: FormComponent },
    { path: '**', redirectTo: 'home' }
];
