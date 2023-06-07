// import firebase from "firebase/compat"
// import { doc, updateDoc } from 'firebase/firestore'

export const state = () => ({
  title: undefined,
  img: undefined,
  recipInfo: [],
  topicRecipInfo: [],
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
  topicRecipInfo: (state) => {
    return state.topicRecipInfo
  },
}

export const mutations = {
  setRecipInfo(state, recipInfo) {
    console.log("aaa")
    state.recipInfo = recipInfo
  },
  setTopicRecipInfo(state, topicRecipInfo) {
    state.topicRecipInfo = topicRecipInfo
    console.log(topicRecipInfo)
  },

}
