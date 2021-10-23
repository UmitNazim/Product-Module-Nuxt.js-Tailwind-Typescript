import { shallowMount } from '@vue/test-utils';
import AtomDivider from '../../src/components/AtomDivider';

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
      it('checks prop acceptable value type', () => {
        expect(wrapper.vm.$options.props.color).toEqual({ type: String, default: 'mid-grey' });
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
          class: { 'atom-divider': true, 'atom-divider__sm': 'sm', 'bg-mid-grey': 'mid-grey' },
        });
      });
      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({
          color: 'seas-hell',
          size: 'lg',
        });
        expect(wrapper.vm.options).toEqual({
          class: { 'atom-divider': true, 'atom-divider__lg': 'lg', 'bg-seas-hell': 'seas-hell' },
        });
      });
    });
  });
});
