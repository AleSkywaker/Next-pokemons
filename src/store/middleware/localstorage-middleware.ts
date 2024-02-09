import { Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any): Promise<any> => {
      next(action);
      if (action.type === 'pokemons/toggleFavorite'){
        const { pokemons } = state.getState() as RootState;
        localStorage.setItem('pokemons-items', JSON.stringify(pokemons) )
        return;
      }
    }
}