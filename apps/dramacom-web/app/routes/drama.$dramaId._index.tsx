import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json, useLoaderData } from "@remix-run/react";
import type { ReactNode } from "react";
import DoramaDetailCard from "~/components/organisms/drama/DramaDetailCard";
import EpisodeList from "~/components/organisms/drama/DramaEpisodeList";
import MainLayout from "~/components/templates/layout/MainLayout";

export function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

export async function loader({ context, params }: LoaderFunctionArgs) {
  type fetchData = {
    id: string;
    title: string;
    description: string;
    casts: string[];
    director: string[];
    thumbnail: string;
    numberOfEpisodes: number;
  };

  const endpoint_path = `/api/drama/${params.dramaId}`;
  const response = await fetch(
    context.cloudflare.env.SERVER_URL + endpoint_path,
  );
  const fetchedDramaDetail = await response.json<fetchData>();

  // EpisodeList コンポーネント用のモックデータ
  const episodeProps = [
    {
      number: 1,
      title: "始まりの一歩",
      description: "新しい世界がここに広がっている...",
    },
    {
      number: 2,
      title: "運命の出会い",
      description: "運命の人との出会いが、物語を",
    },
  ];

  return json({
    dramaDetail: {
      id: fetchedDramaDetail.id,
      title: fetchedDramaDetail.title,
      imageSrc: fetchedDramaDetail.thumbnail,
      rating: 4,
      description: fetchedDramaDetail.description,
    },
    episodes: episodeProps,
  });
}

export default function Page() {
  const { dramaDetail, episodes } = useLoaderData<typeof loader>();

  return (
    <>
      <DoramaDetailCard {...dramaDetail} />
      <EpisodeList episodes={episodes} />
    </>
  );
}
