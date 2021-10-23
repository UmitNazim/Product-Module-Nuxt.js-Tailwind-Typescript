import { shallowMount, config } from '@vue/test-utils';
import MoleculeContentLoader from '@/components/MoleculeContentLoader';

config.silent = true;
config.showDeprecationWarnings = false;

describe('MoleculeContentLoader', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MoleculeContentLoader);
  });

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Props', () => {
    describe('type', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.type).toMatchObject({ type: String, default: 'product' });
      });
    });
  });

  describe('Html', () => {
    describe('content-loader', () => {
      it('checks html element was rendered or not when type prop has value as category.', async () => {
        wrapper.setProps({ type: 'category' });
        await wrapper.vm.$nextTick();
        expect(wrapper.find('.molecule-content-loader__category').exists()).toBeTruthy();
      });
      it('checks html element was rendered or not when type prop has value as product.', async () => {
        wrapper.setProps({ type: 'product' });
        await wrapper.vm.$nextTick();
        expect(wrapper.find('.molecule-content-loader__product').exists()).toBeTruthy();
      });
    });
  });
});
