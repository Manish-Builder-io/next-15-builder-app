import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.canTrack = false;
//window.builderNoTrack = false
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Symbol(props: PageProps) {
  const builderModelName = "symbol";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
        userAttributes:{
            urlPath: "/symbols"
        }
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
