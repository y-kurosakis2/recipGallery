export const state = () => ({
  // title: undefined,
  // img: undefined,
  topicInfo: [],
})

export const getters = {
  // title: (state) => {
  //   return state.title
  // },
  // img: (state) => {
  //   return state.img
  // },
  topicInfo: (state) => {
    return state.topicInfo
  },
}

export const mutations = {
  setTopicInfo(state, topicInfo) {
    console.log("aaa")
    state.topicInfo = topicInfo
  },

}
