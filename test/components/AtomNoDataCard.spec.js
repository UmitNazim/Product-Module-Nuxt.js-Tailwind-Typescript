import { shallowMount, config } from '@vue/test-utils';
import AtomNoDataCard from '../../src/components/AtomNoDataCard';
import OrganismCard from '../../src/components/OrganismCard';

config.silent = true;
config.showDeprecationWarnings = false;

describe('AtomNoDataCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtomNoDataCard, {
      stubs: {
        OrganismCard,
      },
    });
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Props', () => {
    describe('color', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.color).toEqual({ type: String, default: 'snow-drift' });
      });
    });
    describe('description', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.description).toEqual({ type: String, default: null });
      });
    });
  });

  describe('Html', () => {
    describe('description', () => {
      it('checks html content was rendered or not when title prop has no data.', () => {
        expect(wrapper.find('.atom-no-data-card__title').exists()).toBeFalsy();
      });
      it('checks html content was rendered or not when title prop has data.', async () => {
        wrapper.setProps({ description: 'waste-text' });
        await wrapper.vm.$nextTick();
        expect(wrapper.find('.atom-no-data-card__title').exists()).toBeTruthy();
        expect(wrapper.find('.atom-no-data-card__title').text()).toEqual('waste-text');
      });
    });
  });
});
