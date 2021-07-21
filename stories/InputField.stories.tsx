import React from 'react';
import { InputField } from '../src/components/InputField';


const props = {
  title: 'Example/InputField',
  component: InputField
};

export default props

const Template = (args) => <div><InputField {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  
};

export const Hover = () => <div><InputField /></div>
Hover.parameters = { pseudo: { hover: true } }

export const Focus = () => <div><InputField /></div>
Focus.parameters = { pseudo: { focus: true } }
