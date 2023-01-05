import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }
    button[type="submit"] {
      height: 58px;
      border: 0;
      background-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;

      &:hover {
        background-color: ${({ theme }) => theme["green-700"]};
        transition: background-color 0.2s ease-out;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  line-height: 0;
  border-radius: 2px;

  color: ${({ theme }) => theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface Props {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<Props>`
  background-color: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-100"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  border-radius: 6px;
  border: 0;
  outline: none;
  box-shadow: none;

  svg {
    color: ${({ theme, variant }) =>
      variant === "income" ? theme["green-300"] : theme["red-300"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme, variant }) =>
      variant === "income" ? theme["green-500"] : theme["red-500"]};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }

  &[data-state="unchecked"]:hover {
    background-color: ${({ theme }) => theme["gray-600"]};
    transition: background-color 0.2s;
  }
`;