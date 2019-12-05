import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
state: {
    sym_time: 0,
    provider_Tzm: 0,
    provider_To: 0,
    provider_status: '',
    provider_Fxm: 0,
    provider_failure: '',
    controller_Tzco: 0,
    controller_valve: '',
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
    updateSymulationTime(state, payload) {
        state.sym_time = payload
    },
    updateProvider_Tzm(state, payload) {
        state.provider_Tzm = payload
    },
    updateProvider_To(state, payload) {
        state.provider_To = payload
    },
    updateProvider_status(state, payload) {
        state.provider_status = payload
    },
    updateProvider_Fxm(state, payload) {
        state.provider_Fxm = payload
    },
    updateProvider_failure(state, payload) {
        state.provider_failure = payload
    },
    updateController_Tzco(state, payload) {
        state.controller_Tzco = payload
    },
    updateController_Tzcoref(state, payload) {
        state.controller_Tzcoref = payload
    },
    updateController_Valve(state, payload) {
        state.controller_valve = payload
    },
    updateController_Status(state, payload) {
        state.controller_status = payload
    },
    updateExchanger_MPC(state, payload) {
        state.exchanger_MPC = payload
    },
    updateExchanger_Supply(state, payload) {
        state.exchanger_supply = payload
    },
    updateExchanger_Status(state, payload) {
        state.exchanger_status = payload
    },
    updateBuilding_Fcob(state, payload) {
        state.building_Fcob = payload
    },
    updateBuilding_Tr(state, payload) {
        state.building_Tr = payload
    },
    updateBuilding_Th(state, payload) {
        state.building_Th = payload
    },
    updateBuilding_Status(state, payload) {
        state.building_status = payload
    },
},
    getters: {
        getSymulationTime(state) {
          return state.sym_time
        },
        getProvider_Fxm(state){
            return state.provider_Fxm
        },
        getProvider_To(state){
            return state.provider_To
        },
        getProvider_Tzm(state){
            return state.provider_Tzm
        },
        getProvider_failure(state){
            return state.provider_failure
        },
        getProvider_status(state){
            return state.provider_status
        },
        getController_Tzco(state) {
            return state.controller_Tzco
        },
        getController_Tzcoref(state) {
            return state.controller_Tzcoref
        },
        getController_Valve(state) {
            return state.controller_valve
        },
        getController_Status(state) {
            return state.controller_status
        },
        getExchanger_MPC(state) {
            return state.exchanger_MPC
        },
        getExchanger_Supply(state) {
            return state.exchanger_supply
        },
        getExchanger_Status(state) {
            return state.exchanger_status
        },
        getBuilding_Fcob(state) {
            return state.building_Fcob
        },
        getBuilding_Th(state) {
            return state.building_Th
        },
        getBuilding_Tr(state) {
            return state.building_Tr
        },
        getBuilding_Status(state) {
            return state.building_status
        }
    }
})
