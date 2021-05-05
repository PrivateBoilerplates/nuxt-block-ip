import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import User from '@/store/user'

/* eslint-disable import/no-mutable-exports */
let user: User

const initializeStores = (store: Store<any>): void => {
  user = getModule(User, store)
}

export { initializeStores, user }
