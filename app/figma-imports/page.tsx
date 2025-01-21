import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { AccessoryShop } from '../../components/accessoryShop/AccessoryShop';
import { FormLayout } from '../../components/formComponents/FormLayout'; 
// Builder Public API Key set in .env file
builder.canTrack = false;
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const builderModelName = "figma-imports";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <FormLayout />
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
