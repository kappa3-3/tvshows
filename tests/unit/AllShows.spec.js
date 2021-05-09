import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AllShows from '@/components/AllShows.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('The AllShows component', () => {
  let wrapper
  let actions
  let state
  let store
  let getters

  beforeEach(() => {
    state = {
      tvshows: [],
      genresList: [],
      categorizedShows: []
    }
    actions = {
      retrieveAllShows: jest.fn()
    }
    getters = {
      getCategorisedShows: jest.fn(),
      getTvShows: jest.fn()
    }
    store = new Vuex.Store({
      state,
      actions,
      getters,
      namespaced: true
    })
    wrapper = shallowMount(AllShows, {
      store,
      localVue
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })
  it('should render the component on the page', () => {
    expect(!!wrapper.vm).toBeTruthy()
  })
  it('should hide the search results with hideSearch called', async () => {
    wrapper.vm.isSearch = true
    await wrapper.vm.hideSearch()
    expect(wrapper.vm.isSearch).toBeFalsy()
  })
})
