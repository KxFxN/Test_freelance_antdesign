"use client";

import React from "react";
import { Input, Form, Upload, Tabs } from "antd";
import { RiUploadCloud2Line } from "react-icons/ri";
import type { TabsProps } from "antd";

export default function page() {
  const items: TabsProps["items"] = [
    {
      key: "default",
      label: "Default",
    },
    {
      key: "en",
      label: "English (EN)",
    },
    {
      key: "th",
      label: "Thai-ไทย (TH)",
    },
  ];

  const uploadButton = (
    <div className="flex flex-col items-center justify-center">
      <RiUploadCloud2Line size={30} color="#9ca3af " />
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Item update</h1>

      <div className="shadow-lg border border-gray-100 rounded-lg p-4 mt-4">
        <Tabs defaultActiveKey="default" items={items} />

        <Form layout="vertical">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col w-full gap-4">
              <Form.Item label="Name (Default) *">
                <Input placeholder="New item" />
              </Form.Item>

              <Form.Item label="Short description *">
                <Input.TextArea />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2  w-full gap-8">
              <Form.Item
                label={
                  <div className="flex items-center gap-2">
                    Item Image *
                    <span className="text-red-500">(Ratio 1:1)</span>
                  </div>
                }
                name="image"
              >
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  className="!w-full aspect-square"
                >
                  {uploadButton}
                </Upload>
              </Form.Item>

              <Form.Item
                label={
                  <div className="flex items-center gap-2">
                    Item thumbnail *
                    <span className="text-red-500">(Ratio 1:1)</span>
                  </div>
                }
                name="thumbnail"
              >
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                >
                  {uploadButton}
                </Upload>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
