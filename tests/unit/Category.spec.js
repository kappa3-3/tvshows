import { shallowMount } from '@vue/test-utils'
import Category from '@/components/Category.vue'
import thrillerCategory from '../stubs/thrillerCategory.json'

describe('The Category component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Category, {
      propsData: {
        category: thrillerCategory
      }
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })
  it('should render the component on the page', () => {
    expect(!!wrapper).toBeTruthy()
  })
  it('should hide the search results with hideSearch called', async () => {
    await wrapper.vm.sortShows(thrillerCategory.shows)
    const highestRating = wrapper.vm.sortedCategory[0].rating.average
    expect(highestRating).toStrictEqual(9.2)
  })
})
