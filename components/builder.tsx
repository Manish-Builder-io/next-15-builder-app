"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import '@builder.io/widgets';

import "../builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

builder.canTrack = false;
//window.builderNoTrack = false;
// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const categories = [
  {
    category: "Fiction",
    items: [
      {
        title: "The Great Adventure",
        description: "A thrilling novel that takes readers on an epic journey across the seas."
      },
      {
        title: "Mystery of the Lost Treasure",
        description: "A gripping tale of a hidden treasure and the pursuit of its discovery."
      }
    ]
  },
  {
    category: "Technology",
    items: [
      {
        title: "Tech Innovations 2024",
        description: "An insightful look into the latest technological breakthroughs and trends for 2024."
      },
      {
        title: "AI and the Future of Work",
        description: "Exploring how artificial intelligence is transforming the job market and work culture."
      }
    ]
  },
  {
    category: "Health",
    items: [
      {
        title: "Healthy Living Guide",
        description: "A comprehensive guide to living a healthy lifestyle with tips on diet, exercise, and mindfulness."
      },
      {
        title: "Mental Health and Well-being",
        description: "Strategies for improving mental health, reducing stress, and maintaining emotional balance."
      }
    ]
  }
];

const data = {
  title: "testing title",
  divider: true,
  body: [
    '<p class="subtitle">Cupcake ipsum dolor sit amet liquorice wafer. Danish toffee jelly-o wafer cookie. Liquorice marshmallow gummies fruitcake jelly gummi bears chocolate cake.</p>',
  ],
  button: {
    buttonType: "primary",
    text: "CupCake Ipsum",
    src: "http://www.cupcakeipsum.com/paragraphs/1/length/short/with_love/false/start_with_cupcake/true/seed/30a4018270a383cb87cd634973667f22b8eed12cd483bde5d1bd6b392e2c5241",
    target: "same-tab",
    id: "cake",
    gaCategory: "cake",
    gaLabel: "cake",
    as: "a",
  },
};


export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} options={{enrich: true}}  data={{ categories, category: 1, data }} />;
  }
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
