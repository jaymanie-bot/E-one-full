import source from "../source-content.json";
import {ArrowRight, ArrowUpRight} from "lucide-react";
import { partners, principalPartners } from "../partners";

export const metadata={title:"About E-One"};
export default function About(){return <main id="main" className="wrap inner">
  <a className="back" href="/">Home /</a>
  <div className="split detail">
    <div>
      <div className="eyebrow"><i/>ABOUT E-ONE</div>
      <h1>Nigeria’s engineering company<span>.</span></h1>
      <p>E-One Machinery supplies beverage production and plastics equipment, with offices in Ogun State, Nigeria, and Zhangjiagang, China. Our engineering team works with specialist technology partners to configure machinery, precision tooling and complete production lines around each manufacturer's requirements.</p>
      <a className="btn dark" href="/quote">Discuss your project <ArrowUpRight size={16}/></a>
    </div>
    <img src="/eone/business-discussion.webp" alt="A machinery project consultation"/>
  </div>
  <div className="specs">{source.statements.map((s,i)=><div key={s}><h2>{i?"Our vision":"Our mission"}</h2><p>{s}</p></div>)}</div>
  <section className="section about-partners" aria-labelledby="principal-partners">
    <div className="eyebrow"><i/>OUR TECHNOLOGY PARTNERS</div>
    <h2 id="principal-partners">Specialists behind each solution<span>.</span></h2>
    <p className="lede">E-One brings together the right equipment, tooling and integration expertise for your production project.</p>
    <div className="principal-partner-grid">
      {principalPartners.map((key)=>{
        const partner=partners[key];
        return <article key={key}><img src={partner.logo} alt={partner.name} loading="lazy"/><div className="eyebrow">{partner.role}</div><h3>{partner.name}</h3><p>{partner.description}</p><a className="textlink" href={partner.href}>Explore solution <ArrowRight size={16}/></a></article>;
      })}
    </div>
    <div className="additional-partner"><img src={partners.yizumi.logo} alt="Yizumi" loading="lazy"/><div><strong>Yizumi</strong><span>Also part of E-One’s technology partner network.</span></div></div>
  </section>
</main>}
