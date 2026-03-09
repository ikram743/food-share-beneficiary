import React from 'react';
import { Link } from 'react-router-dom';
import './FoodWasteImpact.css';

const FoodWasteImpact: React.FC = () => {
  // Statistics from research
  const algeriaStats = [
    { value: "900M", label: "Baguettes per year", description: "What Algeria wastes annually, costing an estimated $320 million" },
    { value: "100M", label: "Baguettes during Ramadan", description: "Waste spikes dramatically during the holy month" },
    { value: "12-15M", label: "Tons of waste/year", description: "Household, inert and other categories of waste" },
    { value: "+5%", label: "Increase during Ramadan", description: "Consumption and waste increase significantly" }
  ];

  const globalStats = [
    { value: "$540B", label: "Global cost in 2026", description: "The financial cost of food waste worldwide" },
    { value: "17%", label: "Of total production", description: "Percentage of food wasted each year" },
    { value: "1.03B", label: "Tons per year", description: "Total volume of food wasted globally" },
    { value: "61%", label: "In households", description: "Most waste happens at home" }
  ];

  const categoryStats = [
    { category: "Meat", value: "$94B", percentage: "19%" },
    { category: "Fresh produce", value: "$88B", percentage: "16%" },
    { category: "Prepared meals", value: "$80B", percentage: "15%" },
    { category: "Dairy", value: "$79B", percentage: "14%" },
    { category: "Bakery", value: "$67B", percentage: "12%" }
  ];

  return (
    <div className="food-waste-page">
      {/* Hero section */}
      <section className="fw-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to home
          </Link>
          <h1>Food Waste Impact</h1>
          <p className="fw-subtitle">A silent crisis that requires immediate action</p>
          <div className="fw-quote">
            <i className="fas fa-quote-left"></i>
            <p>Every saved Food can feed a family in need</p>
          </div>
        </div>
      </section>

      {/* Algeria Section */}
      <section className="fw-section algeria-section">
        <div className="container">
          <h2>🇩🇿 In Algeria: An alarming crisis</h2>
          <p className="section-intro">
            The Ministry of Commerce and Export Promotion has launched a national awareness campaign 
            entitled: "Let's unite to fight waste and promote responsible consumption."
          </p>
          
          <div className="stats-grid">
            {algeriaStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="info-box">
            <h3>Why this waste?</h3>
            <p>
              The main causes identified are overconsumption during Ramadan, lack of awareness, 
              and inefficient inventory management in businesses. The Minister of Environment, 
              Kaouther Krikou, emphasized the importance of rationalizing consumption and reducing food waste.
            </p>
          </div>
        </div>
      </section>

      {/* Global Section */}
      <section className="fw-section global-section">
        <div className="container">
          <h2>🌍 Worldwide: A planetary problem</h2>
          <p className="section-intro">
            According to a United Nations report, <strong>17% of global food production</strong> is wasted each year.
            The global financial cost is expected to reach <strong>$540 billion by 2026</strong>.
          </p>

          <div className="stats-grid">
            {globalStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>

          <h3 className="subsection-title">Losses by food category</h3>
          <div className="category-grid">
            {categoryStats.map((item, index) => (
              <div key={index} className="category-card">
                <h4>{item.category}</h4>
                <div className="category-value">{item.value}</div>
                <div className="category-percentage">{item.percentage} of total</div>
              </div>
            ))}
          </div>

          <div className="info-box">
            <h3>Main causes</h3>
            <ul className="causes-list">
              <li><i className="fas fa-times-circle"></i> <strong>51%</strong> of businesses cite poor inventory management and overstocking</li>
              <li><i className="fas fa-times-circle"></i> <strong>56%</strong> admit to having no visibility on losses during transport</li>
              <li><i className="fas fa-times-circle"></i> <strong>61%</strong> of businesses lack visibility on their waste</li>
              <li><i className="fas fa-times-circle"></i> <strong>61%</strong> of global waste occurs in households</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="fw-section solutions-section">
        <div className="container">
          <h2>💡 Solutions and initiatives</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Solidarity and donations</h3>
              <p>Minister Tayeb Zitouni emphasized the importance of solidarity with people in need to fight waste.</p>
            </div>
            <div className="solution-card">
              <i className="fas fa-recycle"></i>
              <h3>Recycling and recovery</h3>
              <p>More than <strong>5,000 operators</strong> work in recycling in Algeria, including over 1,900 specialized in household waste.</p>
            </div>
            <div className="solution-card">
              <i className="fas fa-utensils"></i>
              <h3>Consumption rationalization</h3>
              <p>National campaign "Ramadan: Moderation and sustainability for future generations" to promote responsible consumption.</p>
            </div>
            <div className="solution-card">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>FoodShare</h3>
              <p>Our platform connects businesses with associations to redistribute surplus in real-time.</p>
            </div>
          </div>

          <div className="cta-box">
            <h3>Ready to make a difference?</h3>
            <p>Join our community and participate in the fight against food waste today.</p>
            <div className="cta-buttons">
              <Link to="/register?type=business" className="btn-outline">I am a business</Link>
              <Link to="/register?type=association" className="btn-primary">I am an association</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with sources */}
      <section className="fw-footer">
        <div className="container">
          <p className="sources">
            <i className="fas fa-book"></i> Sources: Algerian Ministry of Commerce, United Nations, Avery Dennison, Ecofin Agency
          </p>
          <Link to="/" className="back-home">
            ← Back to home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FoodWasteImpact;