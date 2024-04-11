import type {
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import SearchBar from "~/components/molecules/SearchBar";
import CardContainer, {
  type CardData,
} from "~/components/organisms/containers/CardContainer";
import MainLayout from "~/components/templates/layout/MainLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Drama-dot-com" },
    {
      name: "description",
      content: "ドラマのレビューをネタバレ無しで！",
    },
  ];
};

export const loader: LoaderFunction = async ({
  context,
}: LoaderFunctionArgs) => {
  const endpoint_path = "/api/drama?limit=10";
  const response = await fetch(
    context.cloudflare.env.SERVER_URL + endpoint_path,
  );
  const data = await response.json();
  return data as CardData[];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <MainLayout>
      <div className="w-full px-20">
        <SearchBar />
      </div>
      <CardContainer label="今話題の作品" cards={data as CardData[]} />
      <CardContainer label="お気に入り" cards={data as CardData[]} />
    </MainLayout>
  );
}
