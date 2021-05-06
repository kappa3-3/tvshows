import { shallowMount } from '@vue/test-utils'
import DetailedView from '@/views/DetailedView.vue'

describe('The DetailedView component', () => {
  let wrapper
  const $route = {
    params: {
      id: '34'
    }
  }
  beforeEach(() => {
    wrapper = shallowMount(DetailedView, {
      mocks: {
        $route
      }
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })
  it('should render the component on the page', () => {
    expect(!!wrapper.vm).toBeTruthy()
  })
})
