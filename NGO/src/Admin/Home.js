  import { useState } from 'react';
  import {useNavigate } from 'react-router-dom';

  const Home = () => {
    const [cards] = useState([
      { title: 'Card-1', text: 'hello' },
      { title: 'Card-2', text: 'hello' },
      { title: 'Card-3', text: 'hello' },
      { title: 'Card-4', text: 'hello' },
      { title: 'Card-5', text: 'hello' },
      { title: 'Card-6', text: 'hello' }
    ]);

    const navigate = useNavigate();

    const handleNavigateToDonors = () => {
      // Navigate to the Donors component
      navigate('/Donors');
    };

    const handleNavigateToOrganization = () => {
      // Navigate to the Organization component
      navigate('/admin/Organization');
    };

    const handleNavigateToPendingRequests = () => {
      // Navigate to the PendingRequests component
      navigate('/PendingRequests');
    };
    const handleNavigateToAccountManagement = () => {
     navigate('/AccountManagement');
    };
  
    const handleNavigateToSubmissions = () => {
      navigate('/Submissions');
     };

    return (
      <div>
        <section>
          <div className="container">
            <h1 className="head">Admin Dashboard</h1>
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  {card.title === 'Card-1' && (
                    <button className="btn" onClick={handleNavigateToDonors}>
                      Navigate to Donors
                    </button>
                  )}
                  {card.title === 'Card-2' && (
                    <button className="btn" onClick={handleNavigateToOrganization}>
                      Navigate to Organizations
                    </button>
                  )}
                  {card.title === 'Card-3' && (
                    <button className="btn" onClick={handleNavigateToPendingRequests}>
                      Navigate to Pending Requests
                    </button>
                  )}
                    {card.title === 'Card-4' && (
                    <button className="btn" onClick={handleNavigateToAccountManagement}>
                        Navigate to AccountManagement
                     
                    </button>
                  )}
                    {card.title === 'Card-5' && (
                    <button className="btn" onClick={handleNavigateToSubmissions}>
                      Navigate to Submissions
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default Home;

