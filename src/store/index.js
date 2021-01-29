import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    drawer: false,
    items: [
      {
        text: '首頁',
        href: '/',
      },
      {
        text: '關於聽海',
        href: '/#about'
      },
      {
        text: '房型介紹',
        href: '',
      },
      {
        text: '民宿服務',
        href: '',
      },
      {
        text: '相關連結',
        href: '',
      }

    ],
  },
  getters: {
    categories: state => {
      const categories = []

      // for (const article of state.articles) {
      //   if (
      //     !article.category ||
      //     categories.find(category => category.text === article.category)
      //   ) continue

      //   const text = article.category

      //   categories.push({
      //     text,
      //     href: '#!',
      //   })
      // }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {

  },
})
