/** @format */

import { defineStore } from 'pinia';

interface UseMenu {
  menu: RouteOptions[];
  query: Record<string, any>;
}

const state =
  <UseMenu>JSON.parse(sessionStorage.getItem('state') as string) || <UseMenu>{};

export const useMenuStore = defineStore('menu', {
  state: () => {
    return state;
  }
});
