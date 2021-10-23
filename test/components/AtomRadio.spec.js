import { shallowMount, config } from '@vue/test-utils';
import AtomRadio from '../../src/components/AtomRadio';

config.silent = true;
config.showDeprecationWarnings = false;

describe('AtomRadio', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtomRadio);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Props', () => {
    describe('name', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.name).toEqual({ type: String, default: null });
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
        expect(wrapper.find('.atom-radio__input').attributes('id')).toEqual('waste-text');
      });
      it('checks html elements on-change event.', async () => {
        await wrapper.find('.atom-radio__input').setChecked();
        expect(wrapper.emitted('on-change')).toBeTruthy();
      });
    });
  });
});
