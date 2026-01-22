import React from "react";

function Content({ type }) {
  if (type === "MK") {
    return (
      <div className="mt-3">
        <p className="mb-2">
          Mechanical keyboards use individual mechanical switches for each key,
          where a physical mechanism is responsible for registering a keystroke.
          Each switch contains metal contact leaves that close a circuit when
          the key is pressed, sending an electrical signal to the computer. This
          direct physical contact is what gives mechanical keyboards their
          distinct feel and feedback. Because the actuation relies on a solid
          mechanical structure, these keyboards offer consistent performance,
          durability, and a satisfying typing experience. The variety of switch
          designs allows users to choose between smooth, tactile, or clicky
          feedback based on preference.
        </p>
      </div>
    );
  }

  if (type === "HE") {
    return (
      <div className="mt-3">
        <p className="mb-2">
          The HE keyboards, also known as magnetic switch keyboards. Their basic
          structure is the same as a mechanical keyboards. The difference is
          that the magnetic shaft just removes the metal leaves, with a magnet
          instead of the magnetic shaft center of the leaf. Through the
          installation of Hall sensors on the PCB (able to detect the magnetic
          field and convert its changes into an electrical signal) to achieve
          the trigger. The idea is that when you hit the keyboard, a change in
          the magnetic field is detected and converted into an electrical
          signal. The computer then recognizes this signal change as a
          keystroke, which speeds up the response.
        </p>
      </div>
    );
  }

  return null;
}

export default Content;