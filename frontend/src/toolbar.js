import { DraggableNode } from './draggableNode';

const nodes = [
  { type: 'customInput', label: 'Input' },
  { type: 'llm', label: 'LLM' },
  { type: 'customOutput', label: 'Output' },
  { type: 'text', label: 'Text' },
  { type: 'api', label: 'API' },
  { type: 'delay', label: 'Delay' },
  { type: 'filter', label: 'Filter' },
  { type: 'email', label: 'Email' },
  { type: 'math', label: 'Math' },
];

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: '12px' }}>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        {nodes.map((node) => (
          <DraggableNode
            key={node.type}
            type={node.type}
            label={node.label}
          />
        ))}
      </div>
    </div>
  );
};