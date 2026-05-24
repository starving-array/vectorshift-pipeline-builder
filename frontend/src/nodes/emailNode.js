import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const EmailNode = ({ id, data }) => {
  const [recipient, setRecipient] = useState(
    data?.recipient || 'user@example.com'
  );

  return (
    <BaseNode
      title="Email"
      inputs={[
        {
          id: `${id}-input`,
        },
      ]}
      outputs={[
        {
          id: `${id}-sent`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>
          Recipient:
          <input
            type="email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};