import Form from './Form';

export default {
  title: 'components/Form',
  component: Form,
  argTypes: {handleChange: {action: 'handleChange'}},
};

const Template = args => <Form {...args} />;

export const Default = Template.bind({});
