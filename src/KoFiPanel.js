import React from "react";

export default function KoFiPanel({ id = "prototypr" }) {
  return (
    <iframe
      id="kofiframe"
      src={`https://ko-fi.com/${id}/?hidefeed=true&widget=true&embed=true&preview=true`}
      style={{
        border: 'none',
        width: '100%',
        padding: '4px',
        background: '#f9f9f9'
      }}
      height="712"
      title={id}
    />
  );
}
