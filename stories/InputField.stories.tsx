import React from 'react';
import { InputField } from '../src/components/InputField';


const props = {
  title: 'Example/InputField',
  component: InputField
};

export default props

const Template = (args) => <InputField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};

export const Hover = () => <InputField />
Hover.parameters = { pseudo: { hover: true } }

export const Focus = () => <InputField />
Focus.parameters = { pseudo: { focus: true } }
