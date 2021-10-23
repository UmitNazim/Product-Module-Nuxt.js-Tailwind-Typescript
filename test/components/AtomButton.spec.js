import { shallowMount, config } from '@vue/test-utils';
import AtomButton from '@/components/AtomButton';

config.silent = true;
config.showDeprecationWarnings = false;

describe('AtomButton', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtomButton);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Props', () => {
    describe('type', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.type).toMatchObject({ type: String, default: 'button' });
      });
    });
    describe('size', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.size).toMatchObject({ type: String, default: 'sm' });
      });
    });
    describe('bgColor', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.bgColor).toEqual({ type: String, default: 'regent-grey' });
      });
    });
    describe('color', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.color).toEqual({ type: String, default: 'seas-hell' });
      });
    });
    describe('block', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.block).toEqual({ type: Boolean, default: false });
      });
    });
    describe('disabled', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.disabled).toEqual({ type: Boolean, default: false });
      });
    });
    describe('flat', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.flat).toEqual({ type: Boolean, default: false });
      });
    });
  });

  describe('Computed', () => {
    describe('options', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.options).toEqual({
          class: {
            'text-seas-hell': true,
            'bg-regent-grey': true,
            'atom-button__sm': true,
            'w-full': false,
            'atom-button__disabled': false,
            'rounded-none': false,
          },
          disabled: false,
          type: 'button',
        });
      });
      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({
          type: 'submit',
          bgColor: 'red',
          color: 'blue',
          size: 'lg',
          block: true,
          disabled: true,
          flat: true,
        });
        expect(wrapper.vm.options).toEqual({
          class: {
            'text-blue': true,
            'bg-red': true,
            'atom-button__lg': true,
            'w-full': true,
            'atom-button__disabled': true,
            'rounded-none': true,
          },
          disabled: true,
          type: 'submit',
        });
      });
    });
  });
});
