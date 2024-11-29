import React from "react";
import Layout from "@/components/Layout/Layout";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
}
