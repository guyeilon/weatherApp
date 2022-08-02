import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SwitchButton from '../Common/SwitchButton';

export default {
	title: 'weatherApp/Switcher',
	component: SwitchButton,

	argTypes: {},
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = args => <SwitchButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
