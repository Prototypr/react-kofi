import React, { useEffect } from "react";

export default function KoFiWidget({
  attachOnScroll = false,
  id = "prototypr",
  label = "Support me",
  color = "#00b9fe",
  textColor = "#fff",
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      //if there's no ko-fi button added
      if (!window.kofiWidgetOverlay) {
        if (attachOnScroll) {
          //attach scroll listener, so ko-fi scripts and button can be added on scroll
          window.addEventListener("scroll", kofiScrollListener, false);
          // Remove event listener on unmount
          return () => {
            window.removeEventListener("scroll", kofiScrollListener, false);
          };
        } else {
          openKofi();
        }
      }
    }
  }, []);

  /**
   * kofiScrollListener
   * Detect if scrolled past halfway, and add button
   */
  function kofiScrollListener() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight / 2) {
      openKofi();
    }
  }

  /**
   * openKofi
   * called from the scroll listener - adds all the ko-fi scripts
   * also removes the scroll listener, so it only happens once
   */
  function openKofi() {
    if (attachOnScroll) {
      window.removeEventListener("scroll", kofiScrollListener, false);
    }
    var kofiLoaderScript = document.createElement("script");
    kofiLoaderScript.setAttribute(
      "src",
      "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
    );
    kofiLoaderScript.setAttribute("type", "text/javascript");
    document.head.appendChild(kofiLoaderScript);

    kofiLoaderScript.onload = () => {
      var kofiButtonScript = document.createElement("script");
      kofiButtonScript.setAttribute("type", "text/javascript");
      kofiButtonScript.innerHTML = `
                window.kofiWidgetOverlay = kofiWidgetOverlay
                kofiWidgetOverlay.draw('${id}', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': '${label}',
                    'floating-chat.donateButton.background-color': '${color}',
                    'floating-chat.donateButton.text-color': '${textColor}'
                });
            `;
      document.head.appendChild(kofiButtonScript);
    };
  }
  /**
   * closeKofi
   * Removes the Ko-fi widget scripts from the document
   */
  function closeKofi() {
    // Remove the overlay widget script
    const overlayScript = document.querySelector(
      'script[src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"]'
    );
    if (overlayScript) {
      overlayScript.remove();
    }

    // Remove the button script
    const buttonScript = document.querySelector("script:not([src])");
    if (
      buttonScript &&
      buttonScript.innerHTML.includes("kofiWidgetOverlay.draw")
    ) {
      buttonScript.remove();
    }

    // Remove any Ko-fi elements from the DOM
    const kofiElements = document.querySelectorAll(
      '[class^="floatingchat-container-"]'
    );
    kofiElements.forEach(element => element.remove());

    // Clean up any global variables or event listeners if necessary
    if (window.kofiWidgetOverlay) {
      delete window.kofiWidgetOverlay;
    }
  }

  return null;
}
