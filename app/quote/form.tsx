"use client";
import {useRef,useState} from "react";
import {ArrowRight,CheckCircle} from "lucide-react";
export default function Form({interest}:{interest:string}){
 const id=useRef(""),[busy,setBusy]=useState(false),[error,setError]=useState(""),[reference,setReference]=useState("");
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();if(busy)return;
  const values=Object.fromEntries(new FormData(e.currentTarget));setBusy(true);setError("");
  try{
   if (!id.current) id.current=crypto.randomUUID();
   const response=await fetch("/api/enquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...values,reference:id.current})});
   const result=await response.json() as {reference?:string,error?:string};if(!response.ok||!result.reference)throw Error(result.error||"Could not save this enquiry.");setReference(result.reference);
  }catch(err){setError(err instanceof Error?err.message:"Could not submit. Please try again.");}finally{setBusy(false);}
 }
 if(reference)return <div className="formbox success" role="status"><CheckCircle/><h2>Enquiry received<span>.</span></h2><p>Your request has been saved. Keep this reference for your records.</p><code>{reference}</code><a className="textlink" href="/machinery">Back to machinery <ArrowRight size={16}/></a></div>;
 return <form className="formbox" onSubmit={submit}><h2>Project details</h2><label>Full name<input name="name" autoComplete="name" required minLength={2} maxLength={100}/></label><label>Company<input name="company" autoComplete="organization" required minLength={2} maxLength={150}/></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254}/></label><label>Machine or service of interest<input name="interest" defaultValue={interest} placeholder="e.g. Bottled water filling line" required minLength={2} maxLength={180}/></label><label>Project requirements<textarea name="requirements" rows={4} placeholder="Include your product, container size and target output." required minLength={10} maxLength={3000}/></label><small>Your details will be stored with this quotation request.</small>{error&&<p role="alert">{error}</p>}<button className="btn orange" disabled={busy}>{busy?"Submitting…":"Submit enquiry"}<ArrowRight size={17}/></button></form>;
}
