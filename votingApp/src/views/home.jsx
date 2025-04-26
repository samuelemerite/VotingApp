import ServiceCard from '../components/ServiceCard';
import { apiAuth, apiUser, apiVote, apiResult } from '../services/api';

function Home() {
  return (
    <div>
      <h1>Microservices Dashboard</h1>
      <div className="grid">
        <ServiceCard title="Auth Service" service={apiAuth} />
        <ServiceCard title="User Service" service={apiUser} />
        <ServiceCard title="Vote Service" service={apiVote} />
        <ServiceCard title="Result Service" service={apiResult} />
      </div>
    </div>
  );
}

export default Home;
