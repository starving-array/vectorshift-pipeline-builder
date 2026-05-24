import { useState } from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        'http://127.0.0.1:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);

      setResult({
        error: 'Failed to parse pipeline',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        marginTop: '20px',
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#2563eb',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        {loading ? 'Parsing...' : 'Submit'}
      </button>

      {result && (
        <div
          style={{
            padding: '16px',
            border: '1px solid #d1d5db',
            borderRadius: '10px',
            minWidth: '250px',
            backgroundColor: '#f9fafb',
          }}
        >
          {result.error ? (
            <div>{result.error}</div>
          ) : (
            <>
              <div>
                <strong>Nodes:</strong> {result.num_nodes}
              </div>

              <div>
                <strong>Edges:</strong> {result.num_edges}
              </div>

              <div>
                <strong>Is DAG:</strong>{' '}
                {result.is_dag ? 'Yes' : 'No'}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};