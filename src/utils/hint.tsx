import { type ReactNode, useRef } from "react";

import { Button, Modal } from "@olinfo/react-components";

export function Hint({
  label = "Mostra suggerimento",
  children,
}: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="w-full flex justify-center my-2">
      <Button onClick={() => ref.current?.showModal()}>{label}</Button>
      <Modal ref={ref} title="Suggerimento">
        {children}
      </Modal>
    </div>
  );
}
