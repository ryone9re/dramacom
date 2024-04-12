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
  type FetchData = {
    id: string;
    title: string;
    description: string;
    casts: string[];
    director: string[];
    thumbnail: string;
    numberOfEpisodes: number;
  }[];

  const endpoint_path = "/api/drama?limit=10";
  const response = await fetch(
    context.cloudflare.env.SERVER_URL + endpoint_path,
  );

  const data = await response.json<FetchData>();
  return data.map(
    (v) =>
      ({
        id: v.id,
        title: v.title,
        imageSrc: v.thumbnail,
        rating: 4,
        description: v.description,
      }) satisfies CardData,
  );
};

export default function Index() {
  const data = useLoaderData<CardData[]>();

  return (
    <MainLayout>
      <div className="w-full px-20">
        <SearchBar />
      </div>
      <CardContainer label="今話題の作品" cards={data} />
      <CardContainer label="お気に入り" cards={data} />
    </MainLayout>
  );
}
