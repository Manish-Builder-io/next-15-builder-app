import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Disable tracking 
builder.canTrack = true;


// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const resolvedParams = await props.params;
  const urlPath = "/" + (resolvedParams?.page?.join("/") || "");
  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: urlPath,
        options: { enrich: true },
        enrich: true,
        users: ['admin']
      },
    })
    // Convert the result to a promise
    .toPromise();


  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
