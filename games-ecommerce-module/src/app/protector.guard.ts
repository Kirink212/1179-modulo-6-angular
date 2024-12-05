import { CanActivateFn } from '@angular/router';

export const protectorGuard: CanActivateFn = (route, state) => {
  const condicao = false;
  return condicao;
};
