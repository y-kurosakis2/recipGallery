// import firebase from "firebase/compat"
// import { doc, updateDoc } from 'firebase/firestore'

export const state = () => ({
  title: undefined,
  img: undefined,
  recipInfo: [],
})

export const getters = {
  title: (state) => {
    return state.title
  },
  img: (state) => {
    return state.img
  },
  recipInfo: (state) => {
    return state.recipInfo
  },
}

export const mutations = {
  setRecipInfo(state, recipInfo) {
    console.log("aaa")
    state.recipInfo = recipInfo
  },

}
