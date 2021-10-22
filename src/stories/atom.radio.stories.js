export default {
  title: 'AtomRadio',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<atom-radio v-bind="$props"/>',
});

export const Radio = Template.bind({});
Radio.args = {
  label: 'Label',
};
