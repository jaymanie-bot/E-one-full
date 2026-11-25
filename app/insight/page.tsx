import {ArrowUpRight} from "lucide-react";
export const metadata={title:"Engineering insights"};
const articles=[
 ["blog-after-sales","After-sales support in beverage machinery","Maintenance","after-sales-support-in-beverage-machinery"],
 ["blog-local-manufacturing","Building Nigeria through local beverage manufacturing","Manufacturing","role-of-local-beverage-manufacturing"],
 ["blog-air-conveyor","Air conveyor systems for high-speed bottling","Bottling technology","air-conveyor-systems"]
];
export default function Insight(){return <main id="main" className="wrap inner"><a className="back" href="/">Home /</a><div className="eyebrow"><i/>E-ONE INSIGHT</div><h1>From the production floor<span>.</span></h1><p>Engineering guides and industry perspectives from E-One Machinery.</p><div className="cards linecards">{articles.map(([image,title,topic,slug])=><a className="family" key={slug} href={"https://e-onemachinery.com/"+slug+"/"}><div className="photo"><img src={"/eone/"+image+".webp"} alt=""/></div><div className="eyebrow articleTopic">{topic}</div><div className="cardHead"><h3>{title}</h3><ArrowUpRight size={18}/></div></a>)}</div></main>}
