import { FC, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

type ConditionalProps = {
  notOn?: "desktop" | "mobile";
  desktop?: JSX.Element | null;
  mobile?: JSX.Element | null;
  condition?: boolean;
  children: React.ReactNode;
};

export const Conditional: FC<ConditionalProps> = ({
  notOn,
  desktop,
  mobile,
  condition = true,
  children,
}) => {
  const { state } = useContext(AppContext);

  if (!!condition) return <>{children}</>;

  if ((notOn === "desktop" || !!state.isMobile) && state.isMobile) {
    return mobile ?? null;
  }

  if (notOn === "mobile" && !!state.isDesktop && state.isDesktop) {
    return desktop ?? null;
  }

  return null;
};
