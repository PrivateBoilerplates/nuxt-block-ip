import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'user', stateFactory: true, namespaced: true })
export default class User extends VuexModule {
  private isUserAllowed: boolean = true

  public get $isUserAllowed() {
    return this.isUserAllowed
  }

  @Mutation
  private SET_USER_IS_ALLOWED(condition: boolean) {
    this.isUserAllowed = condition
  }

  @Action
  public defineUserPermisson(condition: boolean) {
    this.context.commit('SET_USER_IS_ALLOWED', condition)
  }
}
