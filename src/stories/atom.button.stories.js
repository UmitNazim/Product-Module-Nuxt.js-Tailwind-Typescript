import { colors } from './_shared';

export default {
  title: 'AtomButton',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
    bgColor: {
      control: { type: 'select' },
      options: colors,
    },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<atom-button v-bind="$props">Button</atom-button>',
});

export const Button = Template.bind({});
Button.args = {
  color: 'white',
  bgColor: 'navy-blue',
  size: 'sm',
  block: false,
  disabled: false,
  flat: false,
  type: 'button',
};
