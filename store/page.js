// import firebase from "firebase/compat"
// import { doc, updateDoc } from 'firebase/firestore'

export const state = () => ({
  notFirstPage: false
})

export const getters = {
  notFirstPage: (state) => {
    return state.notFirstPage
  },
}

export const mutations = {
  setNotFirstPage(state, fBoolean) {
    console.log("ページを初めて開いたか" + fBoolean)
    state.notFirstPage = fBoolean
  },
}
