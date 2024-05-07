  import { useState } from 'react';
  import {useNavigate } from 'react-router-dom';

  const Home = () => {
    const [cards] = useState([
      { title: 'Donors', text: null },
      { title: 'Organizations', text: null},
      { title: 'Organizations Requests', text: null },
      { title: 'Card-4', text: 'hello' },
      //{ title: 'Card-5', text: 'hello' },
      //{ title: 'Card-6', text: 'hello' }
    ]);

    const navigate = useNavigate();

    const handleNavigateToDonors = () => {
      // Navigate to the Donors component
      navigate('/Admin/Donors');
    };

    const handleNavigateToOrganization = () => {
      // Navigate to the Organization component
      navigate('/Admin/Organization');
    };

    const handleNavigateToOrganizationRequests = () => {
      // Navigate to the OrganizationRequests component
      navigate('/Admin/OrganizationRequests');
    };
    const handleNavigateToAccountManagement = () => {
     navigate('/Admin/AccountManagement');
    };
  
    const handleNavigateToSubmissions = () => {
      navigate('/Admin/Submissions');
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
                  {card.title === 'Donors' && (
                    <button className="btn" onClick={handleNavigateToDonors}>
                      Navigate
                    </button>
                  )}
                  {card.title === 'Organizations' && (
                    <button className="btn" onClick={handleNavigateToOrganization}>
                      Navigate 
                    </button>
                  )}
                  {card.title === 'Organizations Requests' && (
                    <button className="btn" onClick={handleNavigateToOrganizationRequests}>
                      Navigate
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

