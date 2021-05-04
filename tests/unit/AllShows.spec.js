import { shallowMount } from '@vue/test-utils'
import AllShows from '@/components/AllShows.vue'

describe('The AllShows component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AllShows);
  })
  afterEach(() => {
    wrapper.destroy();
  })
  it('should render the component on the page', () => {
    expect(!!wrapper.vm).toBeTruthy();
  })
  it('should hide the search results with hideSearch called', async () => {
    wrapper.vm.isSearch = true;
    await wrapper.vm.hideSearch();
    expect(wrapper.vm.isSearch).toBeFalsy();
  })
  it('should categorize shows correctly', async () => {
    wrapper.vm.shows = [{ id: 'a', genres: ['TestGenre'] }];
    
    wrapper.vm.genresList = ['TestGenre'];
    await wrapper.vm.categorizeShows();
    const sample = [{ id: 'TestGenre', shows: [{ id: 'a', genres: ['TestGenre'] }] }];
    expect(wrapper.vm.categorizedShows).toStrictEqual(sample);
  })
  it('should create genresList', async () => {
    wrapper.vm.shows = [
      { id: 'a', genres: ['TestGenre_1'] },
      { id: 'b', genres: ['TestGenre_2'] },
      { id: 'c', genres: ['TestGenre_3'] },
    ];
    wrapper.vm.genresList = ['TestGenre_1'];
    await wrapper.vm.getGenres();
    const sample = ['TestGenre_1', 'TestGenre_2', 'TestGenre_3',];
    expect(wrapper.vm.genresList).toStrictEqual(sample);
  })
  it('should show the tv show based on the search query', async () => {
    wrapper.vm.shows = [
      { id: 'a', name: 'Test Name 1', genres: ['TestGenre_1'] },
      { id: 'b', name: 'Test Name 2', genres: ['TestGenre_2'] },
      { id: 'c', name: 'Test Name 3', genres: ['TestGenre_3'] },
    ];
    wrapper.vm.isSearch = false;
    wrapper.vm.showQuery = 'test name 1';
    await wrapper.vm.searchShow();
    const sample = [{ id: 'a', name: 'Test Name 1', genres: ['TestGenre_1'] }];
    expect(wrapper.vm.searchedShows).toStrictEqual(sample);
  })
})
