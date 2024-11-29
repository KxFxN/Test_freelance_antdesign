"use client";

import React from "react";
import { ConfigProvider, theme } from "antd";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,

        components: {
          Menu: {
            groupTitleFontSize: 12,
          },
          Layout: {
            colorBgHeader: "#fff",
            siderBg: "#fff",
            bodyBg: "#fff",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
