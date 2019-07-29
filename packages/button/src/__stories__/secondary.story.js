import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '..';

const stories = storiesOf('Button', module);

stories.add('Secondary Button', () => (
  <Button>
    {({ getProps }) => (
      <button {...getProps()} onClick={action('button')}>
        Example Button
      </button>
    )}
  </Button>
));
