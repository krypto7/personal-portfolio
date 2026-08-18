import type { ReactNode } from "react";
import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Loader from "@/components/layout/Loader";
import MenuProvider from "@/components/layout/MenuProvider";
import Offcanvas from "@/components/layout/Offcanvas";
import TemplateScripts from "@/components/providers/TemplateScripts";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MenuProvider>
      <Loader />
      <BackToTop />
      <div className="px-blur-bottom" />
      <Offcanvas />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>

      <TemplateScripts />
    </MenuProvider>
  );
}
