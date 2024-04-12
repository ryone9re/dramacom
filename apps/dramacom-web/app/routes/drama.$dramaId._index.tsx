import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json, useLoaderData } from "@remix-run/react";
import DoramaDetailCard from "~/components/organisms/drama/DramaDetailCard";
import EpisodeList from "~/components/organisms/drama/DramaEpisodeList";
import MainLayout from "~/components/templates/layout/MainLayout";
import type { Drama } from "~/types";

export async function loader({ context, params }: LoaderFunctionArgs) {
  type fetchData = Drama;

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
      thumbnail: fetchedDramaDetail.thumbnail,
      rating: 4,
      description: fetchedDramaDetail.description,
      casts: fetchedDramaDetail.casts,
      director: fetchedDramaDetail.director,
      episodes: fetchedDramaDetail.episodes.map((episode) => ({
        number: episode.episodeNumber,
        title: episode.title,
        description: episode.summary,
      })),
    },
  });
}

export default function Page() {
  const { dramaDetail } = useLoaderData<typeof loader>();

  return (
    <MainLayout>
      <DoramaDetailCard {...dramaDetail} />
      <EpisodeList dramaId={dramaDetail.id} episodes={dramaDetail.episodes} />
    </MainLayout>
  );
}
