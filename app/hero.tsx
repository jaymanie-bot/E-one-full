"use client";
import {useState} from "react";
import {ArrowRight,ArrowUpRight,ChevronLeft,ChevronRight} from "lucide-react";
const slides=[
 {tag:"INJECTION MOULDING TECHNOLOGY",lead:"Precision injection.",accent:"Production at scale.",copy:"E-One partners with HWAMDA to supply injection moulding systems for PET preforms, thin-wall packaging and industrial plastic parts—matched to your mould and production target.",image:"hwamda/m8sii-press",caption:"HWAMDA M8-SII injection machinery",href:"/solutions/plastic-injection-cap-compression-machines",action:"Explore injection machines",position:"center",catalogue:true},
 {tag:"PRECISION MOULD MANUFACTURING",lead:"The right mould.",accent:"Built for your product.",copy:"With Heyan Moulds, E-One supplies precision tooling for PET preforms, bottle blowing, closures and handles, designed around your part and production machine.",image:"heyan/preform-mould",caption:"Heyan multi-cavity preform moulds",href:"/solutions/moulds",action:"Explore our moulds",position:"center",catalogue:true},
 {tag:"COMPLETE BEVERAGE LINES",lead:"One complete line.",accent:"Ready to produce.",copy:"With Best Crown, our principal beverage filling partner, plan processing, filling, labelling and packaging as one integrated production system.",image:"bestcrown/turnkey-conveying",caption:"Best Crown beverage turnkey solutions",href:"/solutions/turnkey-beverage",action:"Explore beverage lines",position:"center 56%",catalogue:false}
];
export default function Hero(){
 const [i,setI]=useState(0),s=slides[i];
 return <section className={s.catalogue?"hero hero--catalogue":"hero"}>
  <img className="heroimg" src={'/eone/'+s.image+'.webp'} alt={s.caption} fetchPriority="high" style={{objectPosition:s.position}}/>
  <div className="shade"/>
  <div className="wrap herowrap">
   <div className="heroCopy" aria-live="polite">
    <div className="eyebrow light"><i/>{s.tag}</div>
    <h1>{s.lead}<br/><em>{s.accent}</em></h1><p>{s.copy}</p>
    <div className="actions"><a href={s.href} className="btn orange">{s.action} <ArrowRight size={18}/></a><a href="/contact" className="btn ghost">Talk to an expert <ArrowUpRight size={17}/></a></div>
   </div>
   <div className="slidebar"><div className="slideid"><strong>0{i+1}</strong><span className="track"><i style={{left:(i*33.33)+"%"}}/></span><span>03</span><span className="caption">{s.caption}</span></div><div className="controls"><button aria-label="Previous slide" onClick={()=>setI((i+2)%3)}><ChevronLeft size={18}/></button><button aria-label="Next slide" onClick={()=>setI((i+1)%3)}><ChevronRight size={18}/></button></div></div>
  </div>
 </section>
}
