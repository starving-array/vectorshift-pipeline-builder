import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState(
    data?.delay || 5
  );

  return (
    <BaseNode
      title="Delay"
      inputs={[
        {
          id: `${id}-input`,
        },
      ]}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>
          Delay (sec):
          <input
            type="number"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};