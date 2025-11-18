"use client";
import { useState } from 'react';

export default function CopyableBlock({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }
  return (
    <div className="section card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <h3>{label}</h3>
        <button className="copy" onClick={copy}>{copied? 'Copied' : 'Copy'}</button>
      </div>
      <div className="code">{text}</div>
    </div>
  );
}
