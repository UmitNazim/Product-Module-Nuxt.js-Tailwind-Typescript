import { colors } from './_shared';

export default {
  title: 'AtomDivider',
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
  template: '<atom-divider v-bind="$props">Button</atom-divider>',
});

export const Divider = Template.bind({});
Divider.args = {
  color: 'mid-grey',
  size: 'sm',
};
