import { useMemo, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  // Extract variables like {{variable}}
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    const matches = [...currText.matchAll(regex)].map(
      (match) => match[1]
    );

    return [...new Set(matches)];
  }, [currText]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
      }))}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>
          Text:
        </label>

        <TextareaAutosize
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          minRows={3}
          style={{
            width: '100%',
            resize: 'none',
            padding: '8px',
            boxSizing: 'border-box',
            borderRadius: '6px',
          }}
        />
      </div>
    </BaseNode>
  );
};