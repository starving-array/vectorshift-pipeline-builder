import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(
    data?.condition || 'equals'
  );

  return (
    <BaseNode
      title="Filter"
      inputs={[
        {
          id: `${id}-input`,
        },
      ]}
      outputs={[
        {
          id: `${id}-true`,
        },
        {
          id: `${id}-false`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>
          Condition:
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="equals">Equals</option>
            <option value="contains">Contains</option>
            <option value="greaterThan">Greater Than</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};