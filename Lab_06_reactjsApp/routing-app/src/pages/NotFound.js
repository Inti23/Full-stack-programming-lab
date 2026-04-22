import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page notfound">
      <div className="notfound-num">404</div>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <button className="btn btn-primary" onClick={() => navigate('/')}>← Back to Home</button>
    </div>
  );
}

export default NotFound;