import { LineCards } from "../lines";

export const metadata = {
  title: "Production solutions",
  description: "Explore E-One’s total injection machines, precision moulds and turnkey lines for bottled water and carbonated drinks.",
};

export default function Solutions() {
  return (
    <main id="main" className="wrap inner">
      <a className="back" href="/">Home /</a>
      <div className="eyebrow"><i />ENGINEERING SOLUTIONS</div>
      <h1>Production solutions<span>.</span></h1>
      <p className="lede">Explore complete injection lines, precision moulds and turnkey beverage production systems. Find the configuration, capacity and equipment that suit your product.</p>
      <LineCards />
      <div className="solution-index-link">
        <a className="btn outline-dark" href="/machinery">Browse individual machines</a>
      </div>
    </main>
  );
}
