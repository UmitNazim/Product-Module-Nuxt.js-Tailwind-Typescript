import { shallowMount, config } from '@vue/test-utils';
import AtomCheckbox from '@/components/AtomCheckbox';

config.silent = true;
config.showDeprecationWarnings = false;

describe('AtomCheckbox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtomCheckbox);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Props', () => {
    describe('value', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.value).toEqual({ type: Boolean, default: false });
      });
    });
    describe('label', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.label).toEqual({ type: String, default: null });
      });
    });
  });

  describe('Data', () => {
    describe('proxy', () => {
      it('checks data default value.', () => {
        expect(wrapper.vm.proxy).toBeFalsy();
      });
    });
  });

  describe('Html', () => {
    describe('input', () => {
      it('checks html elements id attribute.', async () => {
        wrapper.setProps({ label: 'waste-text' });
        await wrapper.vm.$nextTick();
        expect(wrapper.find('.atom-checkbox__input').attributes('id')).toEqual('waste-text');
      });
      it('checks html elements change event.', async () => {
        await wrapper.find('.atom-checkbox__input').setChecked();
        expect(wrapper.emitted('input')).toBeTruthy();
      });
    });
  });
});
