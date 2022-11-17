import { defineStore } from 'pinia'

interface Istate {
  menu: RouteOptions[]
  query: Record<string, any>
}

const state: Istate = JSON.parse(sessionStorage.getItem('state') as string) || {
  menu: <RouteOptions[]>[],
  query: <Record<string, any>>{}
}

export const useMenuStore = defineStore('menu', {
  state: () => {
    return state
  }
})
