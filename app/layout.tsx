import type { Metadata, Viewport } from "next";
import "./globals.css";
import {Header,Footer} from "./chrome";
export const metadata:Metadata={title:{default:"E-One Machinery | Industrial Engineering",template:"%s | E-One Machinery"},description:"Explore beverage production lines, injection moulding machines and packaging systems from E-One Machinery in Nigeria."};
export const viewport:Viewport={width:"device-width",initialScale:1};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}
