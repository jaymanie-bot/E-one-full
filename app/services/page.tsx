import {services,quoteUrl} from "../data";
import {ArrowUpRight} from "lucide-react";
export const metadata={title:"Engineering services"};
export default function Services(){return <main id="main" className="wrap inner"><a className="back" href="/">Home /</a><div className="eyebrow"><i/>AFTER-SALES SERVICES</div><h1>Engineering support<span>.</span></h1><p>Choose the support your production line needs.</p><div className="results">{services.map(([name,body],i)=><article key={name} id={['sales-support','maintenance','upgrade','spare-parts','flexible-support','quality','supply-chain','training'][i]}><h3>{name}</h3><p>{body}</p><a className="textlink" href={quoteUrl(name)}>Discuss this service <ArrowUpRight size={16}/></a></article>)}</div></main>}
