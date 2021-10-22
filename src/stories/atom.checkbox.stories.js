export default {
  title: 'AtomCheckbox',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<atom-checkbox v-bind="$props">Button</atom-checkbox>',
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Label',
};
