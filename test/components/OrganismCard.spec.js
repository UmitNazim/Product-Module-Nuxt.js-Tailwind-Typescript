import { shallowMount, config } from '@vue/test-utils';
import OrganismCard from '@/components/OrganismCard';

config.silent = true;
config.showDeprecationWarnings = false;

describe('OrganismCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(OrganismCard, {
      mocks: {
        $t: (msg) => msg,
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
        expect(wrapper.vm.$options.props.color).toEqual({ type: String, default: 'white' });
      });
    });
    describe('flat', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.flat).toEqual({ type: Boolean, default: false });
      });
    });
    describe('shadow', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.shadow).toEqual({ type: Boolean, default: false });
      });
    });
    describe('noPadding', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.noPadding).toEqual({ type: Boolean, default: false });
      });
    });
    describe('hover', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.noPadding).toEqual({ type: Boolean, default: false });
      });
    });
    describe('title', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.title).toEqual({ type: String, default: null });
      });
    });
  });

  describe('Computed', () => {
    describe('options', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.options).toEqual({
          class: {
            'organism-card': true,
            'bg-white': true,
            'organism-card--shadow': false,
            'organism-card--hover': false,
            'rounded-0': false,
            'p-0': false,
          },
        });
      });
      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({
          color: 'red',
          flat: true,
          shadow: true,
          noPadding: true,
          hover: true,
        });
        expect(wrapper.vm.options).toEqual({
          class: {
            'organism-card': true,
            'bg-red': true,
            'organism-card--shadow': true,
            'organism-card--hover': true,
            'rounded-0': true,
            'p-0': true,
          },
        });
      });
    });
  });

  describe('Html', () => {
    describe('title', () => {
      it('checks html content was rendered or not when title prop has no data.', () => {
        expect(wrapper.find('.organism-card__title').exists()).toBeFalsy();
      });
      it('checks html content was rendered or not when title prop has data.', async () => {
        wrapper.setProps({ title: 'waste-text' });
        await wrapper.vm.$nextTick();
        expect(wrapper.find('.organism-card__title').exists()).toBeTruthy();
        expect(wrapper.find('.organism-card__title').text()).toEqual('waste-text');
      });
    });
  });
});
