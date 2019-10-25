import Component from '@/components/album/track-list'
import TrackListItem from '@/components/album/track-list-item'
import factory from '@/tests/factory'

describe('components/album/track-list', () => {
  it('lists the correct number of tracks', async done => {
    const wrapper = await mount(Component, {
      propsData: {
        album: factory('album')
      }
    })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll(TrackListItem)).toHaveLength(2)
      done()
    })
  })
})
