import { type ReactNode, useRef } from "react";

import { Button, Modal } from "@olinfo/react-components";

export function Hint({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="w-full flex justify-center">
      <Button onClick={() => ref.current?.showModal()}>Mostra suggerimento</Button>
      <Modal ref={ref} title="Suggerimento">
        {children}
      </Modal>
    </div>
  );
}
