"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Layout } from "antd";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Layout.Header>{<Navbar />}</Layout.Header>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
}
