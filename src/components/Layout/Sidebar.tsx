"use client";
import React from "react";
import { Layout, Menu, MenuProps, Input } from "antd";
import {
  PiBasket,
  PiArrowCounterClockwiseLight,
  PiBellSimple,
  PiNetworkDuotone,
  PiReceiptLight,
} from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { IoImagesOutline, IoGridOutline } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
import Link from "next/link";

const { Sider } = Layout;
export default function Sidebar() {
  const menuItems: MenuProps["items"] = [
    {
      key: "search",
      label: <Input placeholder="Search" />,
      disabled: true,
      className: "h-auto !mb-4 !p-0 ",
    },
    {
      key: "dashboard",
      icon: <GoHome size={20} />,
      label: "Dashboard",
    },
    {
      key: "pos",
      type: "group",
      label: "POS SECTION",
      children: [
        {
          key: "new-sale",
          label: "New Sale",
          icon: <PiBasket size={20} />,
        },
      ],
    },
    {
      key: "order",
      type: "group",
      label: "ORDER MANAGEMENT",
      children: [
        {
          key: "orders",
          type: "submenu",
          label: "Orders",
          children: [
            { key: "all", label: "All" },
            { key: "scheduled", label: "Scheduled" },
            { key: "pending", label: "Pending" },
            { key: "accepted", label: "Accepted" },
            { key: "processing", label: "Processing" },
            { key: "on-the-way", label: "Order On The Way" },
          ],
        },
        {
          key: "order-refunds",
          type: "submenu",
          label: "Order Refunds",
          children: [{ key: "refund", label: "Refund Request" }],
        },
      ],
    },
    {
      key: "promotion",
      type: "group",
      label: "PROMOTION MANAGEMENT",
      children: [
        {
          key: "campaigns",
          type: "submenu",
          label: "Campaigns",
          children: [
            {
              key: "basic-campaigns",
              label: "Basic Campaigns",
            },
            {
              key: "item-campaigns",
              label: "Item Campaigns",
            },
          ],
        },
      ],
    },
    {
      key: "banners",
      label: "Banners",
      icon: <CiImageOn size={20} />,
    },
    {
      key: "other-banners",
      label: "Other Banners",
      icon: <IoImagesOutline size={20} />,
    },
    {
      key: "coupons",
      label: "Coupons",
      icon: <RiCoupon3Line size={20} />,
    },
    {
      key: "cashback",
      label: "Cashback",
      icon: <PiArrowCounterClockwiseLight size={20} />,
    },
    {
      key: "push-notification",
      label: "Push Notification",
      icon: <PiBellSimple size={20} />,
    },
    {
      key: "product-management",
      label: "PRODUCT MANAGEMENT",
      type: "group",
      children: [
        {
          key: "categories",
          label: "Categories",
          type: "submenu",
          icon: <PiNetworkDuotone size={20} />,
          children: [
            { key: "category", label: "Category" },
            { key: "sub-category", label: "Sub Category" },
            { key: "bulk-import", label: "Bulk Import" },
            { key: "bulk-export", label: "Bulk Export" },
          ],
        },
        {
          key: "attributes",
          label: "Attributes",
          icon: <IoGridOutline size={20} />,
        },
        {
          key: "units",
          label: "Units",
          icon: <PiReceiptLight size={20} />,
        },
        {
          key: "common-conditions",
          label: "Common Conditions",
          icon: <PiReceiptLight size={20} />,
        },
        {
          key: "product-setup",
          label: "Product Setup",
          type: "submenu",
          icon: <PiReceiptLight size={20} />,
          children: [
            { key: "add-new", label: "Add New" },
            { key: "list", label: "List" },
            { key: "product-gallery", label: "Product Gallery" },
            { key: "review", label: "Review" },
          ],
        },
      ],
    },
  ];

  return (
    <Sider className="border-none">
      <Link href="/" className="block px-6 my-2">
        <h1 className="text-2xl font-bold text-black">Logo</h1>
      </Link>
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={menuItems}
        className="!border-none"
      />
    </Sider>
  );
}
