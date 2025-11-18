"use client";
import { useMemo, useState } from "react";
import { generateAll } from "../lib/generator";
import Output from "../components/Output";

export default function Page() {
  const [niche, setNiche] = useState("");
  const [audience, setAudience] = useState("India");
  const [tone, setTone] = useState("Energetic & Relatable");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const canGenerate = useMemo(() => niche.trim().length > 2, [niche]);

  async function onGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!canGenerate) return;
    setLoading(true);
    try {
      const data = generateAll({ niche, audience, tone });
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  function onDownload() {
    if (!result) return;
    const blob = new Blob([result.flatText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `yt-agent-${niche.replace(/\s+/g,'-').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid">
      <form className="card form" onSubmit={onGenerate}>
        <div>
          <div className="label">Niche (required)</div>
          <input className="input" placeholder="e.g. Fitness, Crypto, Cooking, Study Hacks" value={niche} onChange={e=>setNiche(e.target.value)} />
        </div>
        <div className="row">
          <div>
            <div className="label">Primary Audience</div>
            <input className="input" placeholder="e.g. India, US-GenZ, Working Professionals" value={audience} onChange={e=>setAudience(e.target.value)} />
          </div>
          <div>
            <div className="label">Tone</div>
            <select className="select" value={tone} onChange={e=>setTone(e.target.value)}>
              <option>Energetic & Relatable</option>
              <option>Educational & Crisp</option>
              <option>Bold & Contrarian</option>
              <option>Storytelling & Emotional</option>
            </select>
          </div>
        </div>
        <div className="actions">
          <button className="btn" type="submit" disabled={!canGenerate || loading}>{loading ? 'Generating...' : 'Generate Plan (Hinglish)'}</button>
          <button className="btn secondary" type="button" onClick={onDownload} disabled={!result}>Download .txt</button>
        </div>
      </form>

      {result && <Output data={result} />}
    </div>
  );
}
