import Hero from "./hero";
import {LineCards} from "./lines";
import {ArrowRight,ArrowUpRight} from "lucide-react";
import CustomerCarousel from "./customer-carousel";
import source from "./source-content.json";

export default function Home(){return <main id="main"><Hero/>
<div className="partnerstrip"><div className="wrap partners"><span className="eyebrow">TECHNOLOGY PARTNERS</span><img src="/eone/partner-1.webp" alt="Heyan Technology"/><img src="/eone/partner-2.webp" alt="Yizumi"/><img className="wensui-partner" src="/eone/wensui.webp" alt="Wensui"/><img className="bestcrown-partner" src="/eone/bestcrown/logo.webp" alt="Best Crown"/></div></div>
<section className="wrap section"><div className="eyebrow"><i/>OUR SOLUTIONS</div><div className="secthead"><h2>Find your production solution<span>.</span></h2><a className="textlink" href="/solutions">View all solutions <ArrowRight size={18}/></a></div><LineCards/></section>
<section className="service"><div className="wrap"><div className="eyebrow"><i/>OUR PROCESS</div><div className="secthead"><h2>From concept to commissioning<span>.</span></h2></div><div className="steps">{source.steps.map(([title,body],i)=><div key={title}><small>0{i+1}</small><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>
<section className="customer-section"><div className="wrap"><div className="customer-heading"><div><div className="eyebrow"><i/>TRUSTED IN PRODUCTION</div><h2>Our customers<span>.</span></h2></div><p>Manufacturers across Nigeria trust E-One machinery, engineering and after-sales support to keep production moving.</p></div><CustomerCarousel/></div></section>
<section className="wrap section split support"><img src="/eone/blog-after-sales.webp" alt="Engineer at a production control panel" loading="lazy"/><div><div className="eyebrow"><i/>AFTER-SALES SERVICES</div><h2>Support on the production floor<span>.</span></h2><p>Get help with maintenance, spare parts, upgrades and the day-to-day operation of your equipment.</p><a className="btn dark" href="/services">Explore services <ArrowUpRight size={17}/></a></div></section></main>}
