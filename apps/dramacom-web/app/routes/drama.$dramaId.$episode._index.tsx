import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import CommentsSection from "~/components/organisms/comment/CommentSection";
import { DramaDetailSideCard } from "~/components/organisms/drama/DramaDetailSideCard";
import MediaPlayer from "~/components/organisms/drama/MediaPlayer";
import { RecommendedVideosList } from "~/components/organisms/drama/RecommendedVideosList";
import MainLayout from "~/components/templates/layout/MainLayout";

export async function loader({ context }: LoaderFunctionArgs) {
  type fetchData = {
    id: string;
    title: string;
    description: string;
    casts: string[];
    director: string[];
    thumbnail: string;
    numberOfEpisodes: number;
  };

  const endpoint_path = "/api/drama?limit=10";
  const response = await fetch(
    context.cloudflare.env.SERVER_URL + endpoint_path,
  );

  const data = await response.json<fetchData>();
  return data;
}

export default function Page() {
  return (
    <MainLayout>
      <div className="flex">
        <div className="w-4/6 p-4">
          <MediaPlayer src="https://www.youtube.com/watch?v=zjEmtWnxdYA" />
          <CommentsSection />
        </div>
        <div className="w-2/6 p-4 flex flex-col">
          <DramaDetailSideCard
            director={["aaa"]}
            title="aaaa"
            thumbnail="aaa"
            rating={4.0}
            description="aaaa"
          />
          <RecommendedVideosList />
        </div>
      </div>
    </MainLayout>
  );
}
