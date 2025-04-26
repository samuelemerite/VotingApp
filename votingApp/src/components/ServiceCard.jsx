import { useState } from 'react';
import './serviceCard.css';

function ServiceCard({ title, service }) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setMessage('');
    setError('');
    setLoading(true);
    try {
      const response = await service.get('/');
      setMessage(response.data.message || 'Success!');
    } catch (err) {
      setError(err.response?.data?.message || 'Service unreachable!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={load} disabled={loading} aria-busy={loading}>
        {loading ? 'Loading...' : 'Ping'}
      </button>
      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default ServiceCard;
