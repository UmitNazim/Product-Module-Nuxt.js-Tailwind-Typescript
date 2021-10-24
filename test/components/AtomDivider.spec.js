import { shallowMount, config } from '@vue/test-utils';
import AtomDivider from '@/components/AtomDivider';

config.silent = true;
config.showDeprecationWarnings = false;

describe('AtomDivider', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtomDivider);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Props', () => {
    describe('color', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.color).toEqual({ type: String, default: 'mid-grey' });
      });
    });
    describe('size', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.size).toMatchObject({ type: String, default: 'sm' });
      });
    });
  });

  describe('Computed', () => {
    describe('options', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.options).toEqual({
          class: { 'atom-divider': true, 'atom-divider__sm': true, 'bg-mid-grey': true },
        });
      });
      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({
          color: 'seas-hell',
          size: 'lg',
        });
        expect(wrapper.vm.options).toEqual({
          class: { 'atom-divider': true, 'atom-divider__lg': true, 'bg-seas-hell': true },
        });
      });
    });
  });
});
