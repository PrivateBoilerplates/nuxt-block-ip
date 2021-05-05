/* eslint-disable camelcase */
import { Store, ActionTree } from 'vuex'
import { $axios } from '@/utils/nuxt-instance'
import { initializeStores } from '~/utils/store-accessor'

const initializer = (store: Store<any>) => initializeStores(store)

export const plugins = [initializer]

export * from '@/utils/store-accessor'

const state = () => ({})
type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }, { req }) {
    const ip =
      process.env.NODE_ENV === 'production'
        ? req.headers['x-forwarded-for'].split(',').pop()
        : '187.62.76.23'

    console.log(ip)

    const { country_name } = await $axios.$get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=187f062c0c074f89b2a706343f6d69a8&ip=${ip}`
    )
    if (country_name !== 'Brazil') {
      dispatch('user/defineUserPermisson', false)
    }
  }
}
