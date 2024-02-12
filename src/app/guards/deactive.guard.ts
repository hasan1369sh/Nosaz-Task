import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface ICanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}
export const deactivateGuard: CanDeactivateFn<ICanComponentDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate();
};
