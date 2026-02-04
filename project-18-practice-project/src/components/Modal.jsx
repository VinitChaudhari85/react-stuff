import { createPortal } from "react-dom";
import { useImperativeHandle } from "react";
import { useRef } from "react";
import Button from "./Button"

export default function Modal({ children, ref, buttonCaption }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="backdrop:bg-stone-900/90 p-2 rounded-md shadow-md w-[35rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0" ref={dialog}>
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
