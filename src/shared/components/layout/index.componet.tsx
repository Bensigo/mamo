import React, { ReactNode } from "react";
import Seo from "../seo/index.component";


export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <main>
        <div >{children}</div>
      </main>
    </>
  );
}
