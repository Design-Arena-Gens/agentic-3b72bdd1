"use client";
import CopyableBlock from "./CopyableBlock";

export default function Output({ data }: { data: any }) {
  const blocks = [
    { label: "Trending Topics + Virality Analysis", key: "topics" },
    { label: "Titles (3 variations)", key: "titles" },
    { label: "Hooks (3 variations)", key: "hooks" },
    { label: "Short-form Scripts (3)", key: "shortScripts" },
    { label: "Long-form Scripts (3)", key: "longScripts" },
    { label: "Visual Plan (B-roll + edits)", key: "visualPlan" },
    { label: "Voiceover (3 variations)", key: "voiceover" },
    { label: "Tags + Hashtags", key: "tags" },
    { label: "Posting Strategy", key: "posting" },
    { label: "Tools for Automation", key: "tools" },
    { label: "Copy-paste Master Doc", key: "flatText" },
  ];

  return (
    <div className="grid">
      <div className="section card"><span className="badge">Niche</span> &nbsp; {data.meta.niche} &nbsp; <span className="badge">Audience</span> &nbsp; {data.meta.audience} &nbsp; <span className="badge">Tone</span> &nbsp; {data.meta.tone}</div>
      {blocks.map((b) => (
        <CopyableBlock key={b.key} label={b.label} text={data[b.key]} />
      ))}
    </div>
  );
}
