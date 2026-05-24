import { Handle, Position } from 'reactflow';

export const BaseNode = ({
    title,
    children,
    inputs = [],
    outputs = [],
}) => {
    return (
        <div
            style={{
                width: 260,
                minHeight: 120,
                border: '1px solid #334155',
                borderRadius: '14px',
                backgroundColor: '#0f172a',
                padding: '16px',
                color: '#f8fafc',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                fontSize: '14px',
            }}
        >
            {/* Input Handles */}
            {inputs.map((input, index) => (
                <Handle
                    key={input.id}
                    type="target"
                    position={Position.Left}
                    id={input.id}
                    style={{
                        top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
                    }}
                />
            ))}

            {/* Title */}
            <div
                style={{
                    fontWeight: 'bold',
                    marginBottom: '14px',
                    fontSize: '16px',
                    borderBottom: '1px solid #334155',
                    paddingBottom: '8px',
                }}
            >
                {title}
            </div>

            {/* Node Content */}
            <div>{children}</div>

            {/* Output Handles */}
            {outputs.map((output, index) => (
                <Handle
                    key={output.id}
                    type="source"
                    position={Position.Right}
                    id={output.id}
                    style={{
                        top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
                    }}
                />
            ))}
        </div>
    );
};