import { colors } from './_shared';

export default {
  title: 'OrganismCard',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<organism-card  v-bind="$props"/>',
});

export const Card = Template.bind({});
Card.args = {
  color: 'seas-hell',
  shadow: false,
  hover: false,
  flat: false,
  noPadding: false,
};
