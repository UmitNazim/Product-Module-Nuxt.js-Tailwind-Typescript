import { shallowMount, config } from '@vue/test-utils';
import AtomImage from '@/components/AtomImage';

config.silent = true;
config.showDeprecationWarnings = false;

describe('AtomImage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtomImage);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Props', () => {
    describe('src', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.src).toEqual({ type: String, default: null });
      });
    });
    describe('alt', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.alt).toEqual({ type: String, default: '' });
      });
    });
    describe('lazy', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.lazy).toEqual({ type: Boolean, default: false });
      });
    });
    describe('width', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.width).toEqual({
          type: [Number, String],
          default: null,
        });
      });
    });
    describe('height', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.height).toEqual({
          type: [Number, String],
          default: null,
        });
      });
    });
  });

  describe('Computed', () => {
    describe('options', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.options).toEqual({
          alt: '',
          height: null,
          src: null,
          width: null,
        });
      });
      it('checks whether function returns correct content or not when props were changed.', async () => {
        const customProps = {
          src: 'custom-path',
          alt: 'logo',
          width: '100px',
          height: '200px',
          class: 'mt-2',
        };
        await wrapper.setProps(customProps);
        expect(wrapper.vm.options).toEqual(customProps);
      });
    });
  });
});
