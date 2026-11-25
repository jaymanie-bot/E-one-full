"use client";

import {useRef} from "react";

const customers = [
  {name: "Goje Spring Water", image: "/eone/customers/goje-spring-water.webp"},
  {name: "1828 Water", image: "/eone/customers/1828-water.webp"},
  {name: "Aquadana Table Water", image: "/eone/customers/aquadana-table-water.webp"},
  {name: "Sona Premium Table Water", image: "/eone/customers/sona-premium-table-water.webp"},
  {name: "Adore Vegetable Oil", image: "/eone/customers/adore-vegetable-oil.webp"},
  {name: "IBCON Global Resources", image: "/eone/customers/ibcon-global-resources.webp"},
  {name: "Imperial Beverages Limited", image: "/eone/customers/imperial-beverages.webp"},
];

function CustomerSet({duplicate=false}:{duplicate?:boolean}){
  return <div className="customer-set" aria-hidden={duplicate || undefined}>{customers.map(customer=><article className="customer-slide" key={`${duplicate?"copy":"original"}-${customer.name}`}><img src={customer.image} alt={duplicate?"":customer.name} loading="lazy" draggable={false}/><span>{customer.name}</span></article>)}</div>;
}

export default function CustomerCarousel(){
  const viewportRef=useRef<HTMLDivElement>(null);
  const dragRef=useRef({active:false,startX:0,startScroll:0});

  return <div ref={viewportRef} className="customer-carousel" aria-label="E-One customers. Swipe to browse customer logos." role="region" tabIndex={0} onPointerDown={event=>{if(event.pointerType!=="mouse")return;dragRef.current={active:true,startX:event.clientX,startScroll:event.currentTarget.scrollLeft};event.currentTarget.setPointerCapture(event.pointerId)}} onPointerMove={event=>{if(!dragRef.current.active)return;event.currentTarget.scrollLeft=dragRef.current.startScroll-(event.clientX-dragRef.current.startX)}} onPointerUp={event=>{dragRef.current.active=false;if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId)}} onPointerCancel={()=>{dragRef.current.active=false}} onKeyDown={event=>{if(event.key==="ArrowRight"||event.key==="ArrowLeft"){event.preventDefault();viewportRef.current?.scrollBy({left:event.key==="ArrowRight"?280:-280,behavior:"smooth"})}}}><div className="customer-track"><CustomerSet/><CustomerSet duplicate/></div></div>;
}
