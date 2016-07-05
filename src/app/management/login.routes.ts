import { AuthGuard }          from './auth.guard';
import { AuthService }        from './auth.service';
import { LoginComponent }     from './login.component';
import { UserAdminComponent }     from './user-admin.component';

export const LoginRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: UserAdminComponent }
];

export const AUTH_PROVIDERS = [AuthGuard, AuthService];

