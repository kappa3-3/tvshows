import { shallowMount } from '@vue/test-utils'
import ShowTile from '@/components/ShowTile.vue'
import sampleShow from '../stubs/sampleShow.json'

describe('The Category component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ShowTile, {
      propsData: {
        show: sampleShow
      },
      stubs: ['router-link']
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })
  it('should render the component on the page', () => {
    expect(!!wrapper).toBeTruthy()
  })
  it('should render data in html', async () => {
    const ratingSpan = wrapper.find('.tile-rating')
    expect(ratingSpan.html()).toContain('9.2');
  })
})
