import React from "react";
import Sections from "./Sections";
import { Badge } from "./ui/badge";
import Spacing from "./Spacing";

const Footer = () => {
  return (
    <>
      <Spacing size="md" />
      <footer className="bg-card">
        <Sections className="">
          <p className="text-center py-4 text-foreground text-sm">
            @Copyright 2024 Moknine Elhadj
          </p>
        </Sections>
      </footer>
    </>
  );
};

export default Footer;
