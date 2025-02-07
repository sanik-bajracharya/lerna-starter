import React from 'react';
import { storiesOf } from '@storybook/react';

import Counter from '..';

const stories = storiesOf('Counter', module);

stories.add('Secondary counter Example - Fix1', () => (
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
