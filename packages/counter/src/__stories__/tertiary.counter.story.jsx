import React from 'react';
import { storiesOf } from '@storybook/react';

import Counter from '..';

const stories = storiesOf('Counter', module);

stories.add('Tertiary counter Example - Fix 1 - Feat 2', () => (
  <Counter>
    {({ increase, decrease, count }) => (
      <div>
        <button onClick={decrease}>-</button>
        <div>{count}</div>
        <button onClick={increase}>+</button>
      </div>
    )}
  </Counter>
));
