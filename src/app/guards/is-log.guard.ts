import { CanActivateFn, Router } from '@angular/router';
import { IsLoggedInService } from '../services/is-logged-in.service';
import { inject } from '@angular/core';

export const isLogGuard: CanActivateFn = (route, state) => {
  const isLoggedInUser: IsLoggedInService = inject(IsLoggedInService);
  const router: Router = inject(Router);

  if (!isLoggedInUser.isLoggedIn) {
    router.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};
