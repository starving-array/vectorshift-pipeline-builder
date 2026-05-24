import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(
    data?.endpoint || 'https://api.example.com'
  );

  const [method, setMethod] = useState(
    data?.method || 'GET'
  );

  return (
    <BaseNode
      title="API"
      inputs={[
        {
          id: `${id}-input`,
        },
      ]}
      outputs={[
        {
          id: `${id}-response`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>
          Endpoint:
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
          />
        </label>

        <label>
          Method:
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};