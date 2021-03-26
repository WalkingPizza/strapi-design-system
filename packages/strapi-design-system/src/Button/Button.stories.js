import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from './Button';

export const Default = () => {
  return <Button>Hello world</Button>;
};

Default.parameters = {
  design: {
    type: 'figma',
    url: process.env.FIGMA_BUTTON_URL,
  },
};

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
};