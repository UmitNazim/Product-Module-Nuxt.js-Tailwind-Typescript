import { colors } from './_shared';

export default {
  title: 'AtomLoader',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<atom-loader v-bind="$props"/>',
});

export const Loader = Template.bind({});
Loader.args = {
  color: 'mid-grey',
  size: 'sm',
};
