import type {Metadata} from "next";
import {ArrowUpRight,CalendarDays,MapPin,MessageSquareText,Phone} from "lucide-react";
import Form from "../quote/form";

export const metadata:Metadata={
 title:"Contact",
 description:"Contact E-One Machinery for injection machines, precision moulds, complete beverage lines, technical support and project enquiries."
};

export default function ContactPage(){
 return <main id="main">
  <section className="contact-hero">
   <div className="wrap contact-hero-grid">
    <div>
     <a className="back" href="/">← Home</a>
     <div className="eyebrow light"><i/>CONTACT E-ONE</div>
     <h1>How can we help you<span>?</span></h1>
     <p>Tell us what you want to produce, your target output and where your facility is located. Our team will help you identify the right injection machine, mould or complete beverage line.</p>
    </div>
    <div className="contact-hero-image"><img src="/eone/business-discussion.webp" alt="E-One engineering consultation"/></div>
   </div>
  </section>

  <section className="wrap contact-options section">
   <article>
    <CalendarDays size={27}/><div><span>BUSINESS DISCUSSION</span><h2>Book a consultation.</h2><p>Discuss a new production project, machine selection or a factory expansion with the E-One team.</p><a className="textlink" href="https://calendar.app.google/cmayUJcakiPoiq348" target="_blank" rel="noreferrer">Book an appointment <ArrowUpRight size={17}/></a></div>
   </article>
   <article>
    <MessageSquareText size={27}/><div><span>GENERAL ENQUIRY</span><h2>Send your requirements.</h2><p>Share your product, packaging format and production target. Your enquiry will be saved for the team to review.</p><a className="textlink" href="#contact-form">Complete the form <ArrowUpRight size={17}/></a></div>
   </article>
  </section>

  <section className="contact-details">
   <div className="wrap contact-details-grid">
    <div className="contact-copy">
     <div className="eyebrow"><i/>DIRECT CONTACT</div>
     <h2>Speak with our team<span>.</span></h2>
     <p>For machinery, mould, line-planning and after-sales enquiries, contact E-One directly or visit our Nigeria office.</p>
     <div className="contact-list">
      <a href="tel:+2349113805354"><Phone size={21}/><span><small>PHONE</small><strong>+234 911 380 5354</strong></span></a>
      <div><MapPin size={21}/><span><small>NIGERIA OFFICE</small><strong>Km 1.5, Lagos–Ibadan Expressway, after Sagamu Interchange, Ogun State, Nigeria.</strong></span></div>
      <div><MapPin size={21}/><span><small>CHINA OFFICE</small><strong>Zhangjiagang, Jiangsu Province, China.</strong></span></div>
     </div>
    </div>
    <div id="contact-form"><Form interest="General enquiry"/></div>
   </div>
  </section>
 </main>;
}
