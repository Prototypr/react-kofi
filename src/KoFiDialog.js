import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const KoFiDialog = ({
  color = "#00b4f7",
  textColor = "#fff",
  id = "prototypr",
  label = "Support me",
  padding = 0,
  width = 400,
  backgroundColor = "#fff",
  iframe,
  buttonRadius = "8px",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <div
          title={label}
          className="kofi-button w-fit text-sm hover:shadow-md transition transition-all duration-400 cursor-pointer px-3 h-[28px] flex flex-col justify-center"
          style={{ backgroundColor: color, borderRadius: buttonRadius }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="kofitext gap-1 flex my-auto items-center">
            <img
              src="https://ko-fi.com/img/cup-border.png"
              className="kofiimg"
              alt="Ko-Fi button"
            />
            <div
              className="flex my-auto text-xs items-center"
              style={{ color: textColor }}
            >
              {label}
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-[9999]" />
        <Dialog.Content
          style={{
            padding: padding,
            width: width,
            backgroundColor: backgroundColor,
          }}
          className="fixed  h-[712px] overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg z-[9999]"
        >
          <div className="relative w-full h-full">
            <div className="flex flex-col h-full z-10 justify-center items-center kofi-button">
              <div className="gap-1 flex my-auto items-center">
                <div className="flex flex-col gap-2">
                  <img
                    src="https://ko-fi.com/img/cup-border.png"
                    className="kofiimg !h-[auto] !w-[32px] !mx-auto animate-[kofi-wiggle_3s_infinite]"
                    alt="Ko-Fi button"
                  />
                  <div className="mx-auto text-sm text-gray-600">
                    Loading...
                  </div>
                </div>
              </div>
            </div>
            <div className="z-20 absolute top-0 left-0 w-full h-full">
              {iframe ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                  }}
                  dangerouslySetInnerHTML={{ __html: iframe }}
                />
              ) : (
                <iframe
                  id="kofiframe"
                  src={`https://ko-fi.com/${id}/?hidefeed=true&widget=true&embed=true&preview=true`}
                  style={{
                    border: "none",
                    width: "100%",
                    background: "transparent",
                  }}
                  height="712"
                  title="prototypr"
                />
              )}
            </div>
          </div>
          <Dialog.Close asChild>
            <button className="absolute z-30 top-2 bg-gray-200 right-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <Cross2Icon className="w-4 h-4 text-gray-500" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default KoFiDialog;
