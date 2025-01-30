"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import CallOut from "./components/Callout";

builder.canTrack = false;
//window.builderNoTrack = false


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(CallOut, {
  name: "CallOut",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "This is a CallOut component",
    },
    { name: "divider", type: "boolean", defaultValue: "false" },
    {
      name: "body",
      type: "list",
      defaultValue: ["A", "B", "C"],
    },
    { name: "backgroundColor", type: "string", defaultValue: "grey-00" },
    {
      name: "buttons",
      type: "list",
      subFields: [
        {
          name: "buttonType",
          type: "string",
          defaultValue: "primary",
          required: true,
        },
        { name: "children", type: "string", defaultValue: "Click me" },
        { name: "src", type: "string", defaultValue: "#" },
        { name: "target", type: "string", defaultValue: "" },
        { name: "gaCategory", type: "string", defaultValue: "primary" },
        { name: "gaLabel", type: "boolean", defaultValue: true },
        { name: "id", type: "string", defaultValue: "" },
        { name: "dataTest", type: "string", defaultValue: "" },
      ],
    },
  ],
});

Builder.register("editor.settings", {
  styleStrictMode: false, // optional
  designTokensOptional: true,
  designTokens: {
    colors: [
      { name: "Brand Red", value: "var(--red, #ff0000)" },
      { name: "Brand Blue", value: "rgba(93, 150, 255, 1)" },
    ],
    spacing: [
      { name: "Large", value: "var(--space-large, 20px)" },
      { name: "Small", value: "var(--space-small, 10px)" },
      { name: "Tiny", value: "5px" },
    ],
    fontFamily: [
      { name: "Serif Font", value: "var(--serif-font, Times, serif)" },
      { name: "Primary Font", value: "Roboto, sans-serif" },
    ],
  },
});
