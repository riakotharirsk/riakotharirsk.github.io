import { ArrowUpRight, Download, FileText } from 'lucide-react';
import './styles.css';

const linkedin = 'https://www.linkedin.com/in/ria-kothari';

type Project = { title: string; type: string; summary: string; tags: string[]; file: string; fileLabel: string };
type Article = { number: string; title: string; summary: string; link?: string; linkLabel?: string; source?: string };

const projects: Project[] = [
  { title: 'Private-company investment analysis', type: 'Investment analysis', summary: 'Operating review with OAR, DCF, and LBO perspectives.', tags: ['OAR', 'DCF', 'LBO'], file: '/work-samples/private-company-investment-analysis-oar-dcf-lbo.pdf', fileLabel: 'Open PDF' },
  { title: 'Distribution waterfall model', type: 'Private equity modeling', summary: 'Scenario-based distribution mechanics across splits, catch-ups, and IRR hurdles.', tags: ['Waterfalls', 'IRR hurdles'], file: '/work-samples/distribution-waterfall-model.xlsx', fileLabel: 'Download Excel' },
  { title: 'Apple financial model', type: 'Public markets modeling', summary: 'Forecasts, ratio analysis, WACC, DCF, relative valuation, risk, and DuPont analysis.', tags: ['Forecasting', 'WACC', 'DCF'], file: '/work-samples/apple-financial-model.xlsx', fileLabel: 'Download Excel' }
];

const articles: Article[] = [
  { number: '01', title: 'Overview of Infrastructure Investing', summary: 'Why infrastructure can offer resilience, inflation protection, and long-term cash flow through the forces of decarbonization, digitization, and deglobalization.' },
  { number: '02', title: 'Private Equity Exit Readiness', summary: 'Why PE firms need to prepare 12–24 months ahead of a sale, with data readiness, equity-story granularity, and finance talent at the center.', link: 'https://lnkd.in/dKdz8hYR', linkLabel: 'View LinkedIn article' },
  { number: '03', title: 'Evergreen Funds: Expanding Access to Private Equity', summary: 'How evergreen vehicles change the structure, performance, liquidity, and operational model of private-market investing.' },
  { number: '04', title: 'Alternative Investments: Where Value Creation Is Moving', summary: 'A look across private credit, private equity, infrastructure, real estate, and hedge funds amid higher rates and slower exits.' },
  { number: '05', title: 'Breaking Down Co-investments in Private Equity', summary: 'The structure, benefits, risks, and conditions that drive co-investment opportunities for institutional investors.' },
  { number: '06', title: 'The CHIPS Act and the Return of U.S. Semiconductor Manufacturing', summary: 'Why domestic chip manufacturing declined, what the CHIPS and Science Act is changing, and how the U.S. is rebuilding capacity.' },
  { number: '07', title: 'Starbucks Bets on a New Leader', summary: 'What Brian Niccol’s appointment meant for Starbucks, Chipotle, investor confidence, and the importance of leadership in a turnaround.' },
  { number: '08', title: 'Can Juniper Stay Ahead of the Institutional Imperatives?', summary: 'A perspective on whether Juniper Networks can stay committed to its strategy while enterprise networking moves toward AI.', source: '/work-samples/hpe-juniper-writeup.docx' }
];

function App() {
  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top"><span className="mark">RK/</span><span>Ria Kothari</span></a>
      <nav><a href="#projects">Projects</a><a href="#articles">Articles</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></nav>
    </header>

    <main id="top">
      <section className="intro">
        <p className="eyebrow">Finance & investment analysis</p>
        <h1>Selected projects<br />and <em>articles.</em></h1>
        <p className="intro-copy">A simple collection of financial modeling, valuation, private equity, and investment-analysis work by Ria Kothari.</p>
      </section>

      <section className="content-section" id="projects">
        <div className="section-title"><span>01</span><h2>Projects</h2></div>
        <div className="project-list">{projects.map((project) => <article className="project-row" key={project.title}>
          <div className="project-main"><p className="small-label">{project.type}</p><h3>{project.title}</h3><p>{project.summary}</p></div>
          <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <a className="action-link" href={project.file} target="_blank" rel="noreferrer">{project.fileLabel} <Download size={14} /></a>
        </article>)}</div>
      </section>

      <section className="content-section articles-section" id="articles">
        <div className="section-title"><span>02</span><h2>Articles</h2></div>
        <p className="section-note">Selected writing on private markets, infrastructure, public companies, and strategic judgment.</p>
        <div className="article-list">{articles.map((article) => <article className="article-row" key={article.number}>
          <span className="article-number">{article.number}</span>
          <div className="article-main"><h3>{article.title}</h3><p>{article.summary}</p></div>
          <div className="article-actions">{article.link ? <a className="action-link" href={article.link} target="_blank" rel="noreferrer">{article.linkLabel} <ArrowUpRight size={14} /></a> : article.source ? <a className="action-link" href={article.source} target="_blank" rel="noreferrer"><FileText size={14} /> Source writeup <Download size={14} /></a> : <a className="profile-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={14} /></a>}</div>
        </article>)}</div>
      </section>
    </main>

    <footer className="footer"><span><span className="mark">RK/</span> Finance & investment analysis</span><a href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={14} /></a></footer>
  </div>;
}

export default App;
