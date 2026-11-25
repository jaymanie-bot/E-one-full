import {redirect} from "next/navigation";
export default async function Legacy({searchParams}:{searchParams:Promise<{service?:string}>}){const {service}=await searchParams;redirect("/services"+(service?"#"+encodeURIComponent(service):""));}
