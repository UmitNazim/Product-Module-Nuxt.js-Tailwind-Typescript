import { shallowMount, config } from '@vue/test-utils';
import AtomLoader from '../../src/components/AtomLoader';

config.silent = true;
config.showDeprecationWarnings = false;

describe('AtomLoader', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtomLoader);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Props', () => {
    describe('color', () => {
      it('checks prop acceptable value type', () => {
        expect(wrapper.vm.$options.props.color).toEqual({ type: String, default: 'navy-blue' });
      });
    });
    describe('size', () => {
      it('checks prop acceptable value type', () => {
        expect(wrapper.vm.$options.props.size).toMatchObject({ type: String, default: 'sm' });
      });
    });
  });

  describe('Computed', () => {
    describe('options', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.options).toEqual({
          class: {
            'atom-loader__bounce': true,
            'atom-loader__sm': true,
            'bg-navy-blue': true,
          },
        });
      });
      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({
          color: 'red',
          size: 'lg',
        });
        expect(wrapper.vm.options).toEqual({
          class: {
            'atom-loader__bounce': true,
            'bg-red': true,
            'atom-loader__lg': true,
          },
        });
      });
    });
  });
});
