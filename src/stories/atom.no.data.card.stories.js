import { colors } from './_shared';

export default {
  title: 'AtomNoDataCard',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<atom-no-data-card v-bind="$props"/>',
});

export const NoDataCard = Template.bind({});
NoDataCard.args = {
  color: 'seas-hell',
  description: 'This is a description',
};
