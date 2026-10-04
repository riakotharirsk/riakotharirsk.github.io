import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react';
import './styles.css';

const linkedin = 'https://www.linkedin.com/in/ria-kothari';
const email = 'riakothari.rskfin@gmail.com';
const phone = '5853058201';

type Project = { title: string; type: string; summary: string; file: string; fileLabel: string };
type Article = { number: string; title: string; summary: string; link: string; linkLabel: string };

const projects: Project[] = [
  { title: 'ABC Ltd simple LBO model', type: 'Private equity analysis', summary: 'Built a hypothetical CIM, income statement, DCF, and LBO model to understand Sources & Uses, leverage, MOIC, and IRR.', file: '/work-samples/private-company-investment-analysis-oar-dcf-lbo.pdf', fileLabel: 'Open PDF' },
  { title: 'Distribution waterfall model', type: 'Private equity modeling', summary: 'Modeled how distributions flow through return of capital, preferred return, catch-up, and LP/GP splits across American and European waterfalls.', file: '/work-samples/distribution-waterfall-model.xlsx', fileLabel: 'Download Excel' },
  { title: 'Apple financial model', type: 'Public markets modeling', summary: 'Forecasted Apple’s financials and applied ratio analysis, WACC, regression beta, intrinsic growth, DCF, relative valuation, and risk analysis.', file: '/work-samples/apple-financial-model.xlsx', fileLabel: 'Download Excel' },
  { title: 'HPE–Juniper acquisition analysis', type: 'Investment analysis internship', summary: 'Analyzed the acquisition through 30+ business, financial, and growth questions and contributed to a detailed investment report during an internship at Golden Door.', file: '/work-samples/hpe-juniper-writeup.docx', fileLabel: 'Open writeup' }
];

const articles: Article[] = [
  { number: '01', title: 'Overview of Infrastructure Investing', summary: 'Why infrastructure can offer resilience, inflation protection, and long-term cash flow through the forces of decarbonization, digitization, and deglobalization.', link: 'https://www.linkedin.com/posts/activity-7355749027327488000-qEwB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChOc8oBOZOslw3aWIVhGGYp6bBd3MuH2AA', linkLabel: 'Open article' },
  { number: '02', title: 'Private Equity Exit Readiness', summary: 'Why PE firms need to prepare 12–24 months ahead of a sale, with data readiness, equity-story granularity, and finance talent at the center.', link: 'https://www.linkedin.com/posts/activity-7351421507039834112-5TqH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChOc8oBOZOslw3aWIVhGGYp6bBd3MuH2AA', linkLabel: 'Open article' },
  { number: '03', title: 'Evergreen Funds: Expanding Access to Private Equity', summary: 'How evergreen vehicles change the structure, performance, liquidity, and operational model of private-market investing.', link: 'https://www.linkedin.com/posts/activity-7338737918536040449-pOLR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChOc8oBOZOslw3aWIVhGGYp6bBd3MuH2AA', linkLabel: 'Open article' },
  { number: '04', title: 'Alternative Investments: Where Value Creation Is Moving', summary: 'A look across private credit, private equity, infrastructure, real estate, and hedge funds amid higher rates and slower exits.', link: 'https://www.linkedin.com/posts/activity-7332451291924795392-cMLY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChOc8oBOZOslw3aWIVhGGYp6bBd3MuH2AA', linkLabel: 'Open article' },
  { number: '05', title: 'Breaking Down Co-investments in Private Equity', summary: 'The structure, benefits, risks, and conditions that drive co-investment opportunities for institutional investors.', link: 'https://www.linkedin.com/posts/activity-7315735284090847233-HPbo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChOc8oBOZOslw3aWIVhGGYp6bBd3MuH2AA', linkLabel: 'Open article' },
  { number: '06', title: 'The CHIPS Act and the Return of U.S. Semiconductor Manufacturing', summary: 'Why domestic chip manufacturing declined, what the CHIPS and Science Act is changing, and how the U.S. is rebuilding capacity.', link: 'https://www.linkedin.com/posts/activity-7267302967068815361-_yxB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChOc8oBOZOslw3aWIVhGGYp6bBd3MuH2AA', linkLabel: 'Open article' },
  { number: '07', title: 'Starbucks Bets on a New Leader', summary: 'What Brian Niccol’s appointment meant for Starbucks, Chipotle, investor confidence, and the importance of leadership in a turnaround.', link: 'https://www.linkedin.com/posts/activity-7229333381027684352-0hfR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAChOc8oBOZOslw3aWIVhGGYp6bBd3MuH2AA', linkLabel: 'Open article' }
];

function App() {
  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top"><span className="mark">RK/</span><span>Ria Shailen Kothari</span></a>
      <nav><a href="#projects">Projects</a><a href="#articles">Articles</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></nav>
    </header>
    <main id="top">
      <section className="intro">
        <p className="eyebrow">Alternative investments · Financial markets</p>
        <h1>Ria Shailen<br /><em>Kothari.</em></h1>
        <div className="intro-copy">
          <p>My career is driven by a passion for the financial markets and delivering exceptional value to clients.</p>
          <p>I am currently a <strong>Senior Analyst in Alternative Investments at Goldman Sachs</strong>, supporting private equity transactions. I am a Master of Finance ’24 graduate from Simon Business School with 4+ years of professional experience in finance, strategic decision making, financial analysis, and client relationships.</p>
        </div>
        <div className="contact-strip"><a href={`mailto:${email}`}><Mail size={15} /> {email}</a><a href={`tel:${phone}`}><Phone size={15} /> (585) 305-8201</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
      </section>
      <section className="content-section" id="projects">
        <div className="section-title"><span>01</span><h2>Projects</h2></div>
        <div className="project-list">{projects.map((project) => <article className="project-row" key={project.title}>
          <div className="row-header"><div><p className="small-label">{project.type}</p><h3>{project.title}</h3></div><a className="action-link" href={project.file} target="_blank" rel="noreferrer">{project.fileLabel} <Download size={14} /></a></div>
          <p className="row-summary">{project.summary}</p>
        </article>)}</div>
      </section>
      <section className="content-section articles-section" id="articles">
        <div className="section-title"><span>02</span><h2>Articles</h2></div>
        <p className="section-note">Selected writing on private markets, infrastructure, public companies, and strategic judgment.</p>
        <div className="article-list">{articles.map((article) => <article className="article-row" key={article.number}>
          <div className="row-header"><div className="article-heading"><span className="article-number">{article.number}</span><h3>{article.title}</h3></div><a className="action-link" href={article.link} target="_self">{article.linkLabel} <ArrowUpRight size={14} /></a></div>
          <p className="row-summary">{article.summary}</p>
        </article>)}</div>
      </section>
    </main>
    <footer className="footer"><span><span className="mark">RK/</span> Finance & investment analysis</span><a href={`mailto:${email}`}>Contact Ria <ArrowUpRight size={14} /></a></footer>
  </div>;
}

export default App;
