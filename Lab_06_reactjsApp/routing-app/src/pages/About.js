import './About.css';

function About() {
  const timeline = [
    { year: '2019', title: 'Founded in Lahore', desc: 'Started as a 3-person design studio focused on UI products.' },
    { year: '2020', title: 'First 1,000 Customers', desc: 'Launched our flagship product line and hit our first milestone.' },
    { year: '2022', title: 'Global Expansion', desc: 'Opened distribution centers in Europe and Southeast Asia.' },
    { year: '2024', title: 'Award-Winning Platform', desc: 'Named "Best Design E-Commerce" by Design Weekly Magazine.' },
  ];

  const stats = [
    { n: '45+', l: 'Team Members' },
    { n: '120K', l: 'Happy Customers' },
    { n: '98%', l: 'Satisfaction Rate' },
  ];

  return (
    <div className="page section-wrap">
      <span className="section-tag">About Us</span>
      <h2 className="section-title">Built by creators,<br />for creators.</h2>
      <p className="section-sub">Nexora started as a small studio in 2019 with a single belief: great design should be accessible to everyone. Today we serve thousands of customers worldwide.</p>

      <div className="about-grid">
        <ul className="timeline">
          {timeline.map(t => (
            <li key={t.year}>
              <div className="timeline-year">{t.year}</div>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </li>
          ))}
        </ul>

        <div>
          <p className="about-text">We believe the best products come from the intersection of craft, function, and empathy. Our team of 45+ designers, engineers, and strategists work together to create experiences that people genuinely love.</p>
          <p className="about-text">Every product we make goes through rigorous quality checks, community testing, and iterative design sprints before it ever reaches your hands. We don't ship until we're proud of it.</p>
          <div className="stat-row">
            {stats.map(s => (
              <div className="stat-box" key={s.l}>
                <div className="stat-num">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;