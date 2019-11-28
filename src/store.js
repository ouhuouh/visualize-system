import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
state: {
    provider_Tzm: 0,
    provider_To: 0,
    provider_status: '',
    provider_Fxm: 0,
    provider_failure: '',
    controller_Tzco: 0,
    controller_valve: 0,
    controller_Tzcoref: 0,
    controller_status: '',
    exchanger_MPC: 0,
    exchanger_supply: 0,
    exchanger_status: '',
    building_Th: 0,
    building_Tpcob: 0,
    building_Tr: 0,
    building_Fcob: 0,
    building_status: ''
},
mutations: {
    updateProvider_Tzm(state, payload) {
        state.provider_Tzm = payload
    },
    updateProvider_To(state, payload) {
        state.provider_Tzm = payload
    },
    updateProvider_status(state, payload) {
        state.provider_status = payload
    },
    updateProvider_Fxm(state, payload) {
        state.provider_Fxm = payload
    },
    updateProvider_failure(state, payload) {
        state.provider_failure = payload
    }
},
    getters: {
        getProvider_Fxm(){
            return this.state.provider_Fxm
        },
        getProvider_To(){
            return this.state.provider_To
        },
        getProvider_Tzm(){
            return this.state.provider_Tzm
        },
        getProvider_failure(){
            return this.state.provider_failure
        },
        getProvider_status(){
            return this.state.provider_status
        }
    }
})
