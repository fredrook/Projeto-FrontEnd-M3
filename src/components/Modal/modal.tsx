import { ModalWrapper } from "./modalCSS";
import { IAuthProvider } from "../../interface/IAuthProvider";

const Modal =({ children }: IAuthProvider) => {
  return <ModalWrapper>{children}</ModalWrapper>;
}

export { Modal };