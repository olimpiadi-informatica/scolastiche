import { type ReactNode, useRef } from "react";

import { Button, Modal } from "@olinfo/react-components";

export function Hint({
  label = "suggerimento",
  children,
}: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="w-full flex justify-center my-2">
      <Button onClick={() => ref.current?.showModal()}>Mostra {label}</Button>
      <Modal ref={ref} title={label.charAt(0).toUpperCase() + label.slice(1)}>
        {children}
      </Modal>
    </div>
  );
}
