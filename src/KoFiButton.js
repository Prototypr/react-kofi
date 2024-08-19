import React from "react";
export default function KoFiButton({
  color = "#00b4f7",
  id = "prototypr",
  label = "Support me on Ko-Fi",
  size = "w-10 h-10",
  radius="12px"
}) {
  return (
    <div className="flex  justify-start">
      <div class="btn-container">
        <a
          title={label}
          className={`${label?'kofi-button ':`rounded-full ${size?size:'w-10 h-10'} block flex justify-center`} rounded-full`}
          style={{ backgroundColor: color, borderRadius: radius }}
          href={"https://ko-fi.com/" + id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="kofitext">
            <img
              src="https://ko-fi.com/img/cup-border.png"
              class="kofiimg"
              alt="Ko-Fi button"
            />
            {label?label:null}
          </span>
        </a>
      </div>
    </div>
  );
}
