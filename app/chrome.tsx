"use client";
import { useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Menu,
  Send,
  X,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/2349113805354?text=Hello%20E-One%20Machinery%2C%20I%20would%20like%20to%20discuss%20a%20machinery%20project.";

export function Brand() {
 return <a className="brand" href="/" aria-label="E-One Machinery home"><img src="/eone/logo.webp" alt="E-One Machinery and Service Limited"/></a>;
}
export function Header(){
 const [open,setOpen]=useState(false);
 return <header className="header" id="top"><div className="wrap nav"><Brand/><nav className={open?"open":""} aria-label="Main navigation" onClick={()=>setOpen(false)}><a href="/machinery">Machinery</a><a href="/solutions">Solutions</a><a href="/services">Services</a><a href="/about">About us</a><a href="/insight">Insight</a><a href="/contact">Contact</a></nav><a className="btn topcta" href="/quote">Request a quote <ArrowUpRight size={16}/></a><button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>;
}

function WhatsAppMark(){
 return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.1 17.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-2-.9-3.3-3-3.4-3.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6s0-.4-.1-.6-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4M16 27.1c-2 0-4-.5-5.7-1.6l-.4-.2-4.2 1.1 1.1-4.1-.3-.4A11 11 0 1 1 16 27.1m0-24A13 13 0 0 0 4.8 22.6L3 29l6.6-1.7A13 13 0 1 0 16 3.1"/></svg>;
}

function FacebookMark(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.6 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.3V10H8v3h2.5v8h3.1Z"/></svg>}
function InstagramMark(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor"/></svg>}
function LinkedinMark(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 8.3h3.1V19H5.2V8.3Zm1.6-5.2a1.8 1.8 0 1 1 0 3.7 1.8 1.8 0 0 1 0-3.7ZM10.5 8.3h3v1.5h.1c.4-.8 1.5-1.9 3.2-1.9 3.4 0 4 2.2 4 5.2V19h-3.1v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V19h-3.2V8.3Z"/></svg>}
function YoutubeMark(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M21 8.1a3 3 0 0 0-2.1-2.2C17.1 5.4 12 5.4 12 5.4s-5.1 0-6.9.5A3 3 0 0 0 3 8.1a31 31 0 0 0-.5 3.9A31 31 0 0 0 3 16a3 3 0 0 0 2.1 2.1c1.8.5 6.9.5 6.9.5s5.1 0 6.9-.5A3 3 0 0 0 21 16a31 31 0 0 0 .5-4 31 31 0 0 0-.5-3.9Z"/><path fill="currentColor" d="m10 15.3 5.2-3.3L10 8.7v6.6Z"/></svg>}

function NewsletterForm(){
 const [busy,setBusy]=useState(false);
 const [message,setMessage]=useState("");
 const [success,setSuccess]=useState(false);

 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(busy)return;
  const form=e.currentTarget;
  const values=Object.fromEntries(new FormData(form));
  setBusy(true);setMessage("");setSuccess(false);
  try{
   const response=await fetch("/api/newsletter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values)});
   const result=await response.json() as {ok?:boolean,error?:string};
   if(!response.ok||!result.ok)throw Error(result.error||"Could not save your subscription.");
   form.reset();setSuccess(true);setMessage("You’re on the list. Watch your inbox for E-One updates.");
  }catch(err){setMessage(err instanceof Error?err.message:"Could not subscribe. Please try again.");}
  finally{setBusy(false);}
 }

 return <form className="newsletter-form" onSubmit={submit}>
  <div className="newsletter-fields">
   <label><span>First name</span><input name="name" autoComplete="given-name" placeholder="Your name" required minLength={2} maxLength={80}/></label>
   <label><span>Email address</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254}/></label>
  </div>
  <button type="submit" disabled={busy}>{busy?"Joining…":"Join newsletter"}<Send size={15}/></button>
  <small>Industry insight and E-One updates. Unsubscribe at any time.</small>
  {message&&<p className={success?"newsletter-status success-text":"newsletter-status error-text"} role={success?"status":"alert"}>{success&&<CheckCircle2 size={16}/>} {message}</p>}
 </form>;
}

export function Footer(){
 const year=new Date().getFullYear();
 return <>
  <footer className="site-footer">
   <div className="wrap footer-main">
    <section className="footer-about" aria-labelledby="footer-about-title">
     <Brand/>
     <h2 id="footer-about-title">Engineering production that performs.</h2>
     <p>E-One Machinery is a Nigerian engineering company supplying beverage, packaging and plastic injection systems, registered under RC 1637460.</p>
    </section>
    <section className="footer-offices" aria-labelledby="footer-offices-title">
     <h3 id="footer-offices-title">Our offices</h3>
     <div><strong>Nigeria</strong><address>Km 1.5, Lagos–Ibadan Expressway,<br/>after Sagamu Interchange, Ogun State.</address></div>
     <div><strong>China</strong><address>Zhangjiagang, Jiangsu Province.</address></div>
    </section>
    <section className="footer-links" aria-labelledby="footer-links-title">
     <h3 id="footer-links-title">Explore</h3>
     <nav aria-label="Footer navigation"><a href="/machinery">Machinery</a><a href="/solutions">Production solutions</a><a href="/services">Services</a><a href="/about">About E-One</a><a href="/insight">Insight</a><a href="/contact">Contact</a></nav>
     <h3>Help & contact</h3>
     <nav aria-label="Help links"><a href="/quote">Request a quotation</a><a href="https://calendar.app.google/cmayUJcakiPoiq348" target="_blank" rel="noreferrer">Book an appointment</a><a href="https://e-onemachinery.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy policy</a></nav>
    </section>
    <section className="footer-newsletter" aria-labelledby="newsletter-title">
     <span className="footer-kicker">E-ONE INDUSTRY BRIEF</span>
     <h3 id="newsletter-title">Useful ideas for better production.</h3>
     <p>Get practical insight on beverage manufacturing, packaging technology and machinery care.</p>
     <NewsletterForm/>
    </section>
   </div>
   <div className="footer-bar">
    <div className="wrap footer-bar-inner">
     <p>© {year} E-One Machinery. All rights reserved.</p>
     <p className="footer-bar-note">Liquid packaging • Injection moulding • After-sales support</p>
     <div className="footer-social" aria-label="E-One social media">
      <a href="https://web.facebook.com/profile.php?id=61553644560351&mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" rel="noreferrer" aria-label="E-One on Facebook"><FacebookMark/></a>
      <a href="https://instagram.com/eone_machinery1" target="_blank" rel="noreferrer" aria-label="E-One on Instagram"><InstagramMark/></a>
      <a href="https://linkedin.com/company/e-one-machinery-and-services/" target="_blank" rel="noreferrer" aria-label="E-One on LinkedIn"><LinkedinMark/></a>
      <a href="https://youtube.com/@eonemachinery" target="_blank" rel="noreferrer" aria-label="E-One on YouTube"><YoutubeMark/></a>
      <a className="back-to-top" href="#top" aria-label="Back to top"><ArrowUp size={20}/></a>
     </div>
    </div>
   </div>
  </footer>
  <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat with E-One Machinery on WhatsApp"><WhatsAppMark/><span>Chat with E-One</span></a>
 </>;
}
