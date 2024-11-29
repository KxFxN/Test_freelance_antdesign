"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Layout, Menu, Badge, Avatar, Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { PiMoon, PiSun } from "react-icons/pi";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { FiUser, FiSettings } from "react-icons/fi";
import { BsFileText } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiBell } from "react-icons/bi";

const { Header } = Layout;

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const menuItems = [
    {
      key: "/",
      icon: <GoHome color="#2563eb" />,
      label: (
        <Link href="#" className="text-gray-700">
          Dashboard
        </Link>
      ),
    },
    {
      key: "/users",
      icon: <FiUser color="#2563eb" />,
      label: (
        <Link href="#" className="text-gray-700">
          Users
        </Link>
      ),
    },
    {
      key: "/reports",
      icon: <BsFileText color="#2563eb" />,
      label: (
        <Link href="#" className="text-gray-700">
          Transactions & Reports
        </Link>
      ),
    },
    {
      key: "/settings",
      icon: <FiSettings color="#2563eb" />,
      label: (
        <Link href="#" className="text-gray-700">
          Settings
        </Link>
      ),
    },
    {
      key: "/dispatch",
      icon: <HiOutlineArrowPath size={15} color="#2563eb" />,
      label: (
        <Link href="#" className="text-gray-700">
          Dispatch Management
        </Link>
      ),
    },
  ];

  const languageItems: MenuProps["items"] = [
    {
      key: "en",
      label: (
        <div className="flex items-center gap-2">
          <img src="/us.png" alt="English" className="w-4 h-4" />
          English
        </div>
      ),
      onClick: () => setLanguage("en"),
    },
    {
      key: "th",
      label: (
        <div className="flex items-center gap-2">
          <img src="/th.png" alt="Thai" className="w-4 h-4" />
          ไทย
        </div>
      ),
      onClick: () => setLanguage("th"),
    },
  ];

  return (
    <Header className="flex items-center justify-between">
      {/* Left side navigation */}
      <div className="flex-1">
        <Menu
          mode="horizontal"
          selectedKeys={[pathname]}
          items={menuItems}
          className="!border-none"
        />
      </div>

      {/* Right side items */}
      <div className="flex items-center gap-5">
        {/* Dark mode toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="text-gray-600 hover:text-gray-900 !w-8 !h-8 !p-0 !bg-slate-100 !rounded-full flex items-center justify-center"
        >
          {isDark ? <PiMoon size={25} /> : <PiSun size={25} />}
        </button>

        {/* Language selector */}
        <Dropdown menu={{ items: languageItems }} trigger={["click"]}>
          <Button
            type="text"
            className="!w-8 !h-8 !p-0 flex items-center justify-center !bg-slate-100 !rounded-full"
          >
            <img
              src={`/${language === "en" ? "us.png" : "th.png"}`}
              alt={language === "en" ? "English" : "Thai"}
              className="w-6 h-6 object-cover"
            />
          </Button>
        </Dropdown>

        {/* Email notification */}
        <Badge count={5} size="small">
          <div className="!w-8 !h-8 !p-0 !bg-slate-100 !rounded-full flex items-center justify-center">
            <MdOutlineEmail className="text-xl text-gray-600" />
          </div>
        </Badge>

        {/* Bell notification */}
        <Badge count={2} size="small" className="mr-4">
          <div className="!w-8 !h-8 !p-0 !bg-slate-100 !rounded-full flex items-center justify-center">
            <BiBell className="text-xl text-gray-600" />
          </div>
        </Badge>

        {/* User avatar */}
        <Avatar src="/cat.png" size={38} className="cursor-pointer " />
      </div>
    </Header>
  );
}
