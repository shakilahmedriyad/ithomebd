import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-[72rem] px-5 mx-auto">{children}</div>;
}
