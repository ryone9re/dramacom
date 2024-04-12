import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { CommentsSection } from "~/components/organisms/comment/CommentSection";
import { DramaDetailSideCard } from "~/components/organisms/drama/DramaDetailSideCard";
import MediaPlayer from "~/components/organisms/drama/MediaPlayer";
import { RecommendedVideosList } from "~/components/organisms/drama/RecommendedVideosList";
import MainLayout from "~/components/templates/layout/MainLayout";
import type { Comment, Drama } from "~/types";

export async function loader({ context, params }: LoaderFunctionArgs) {
  type fetchedDramaData = Drama;
  const dramaEndpointPath = `/api/drama/${params.dramaId}`;
  const fetchDramaResponse = await fetch(
    context.cloudflare.env.SERVER_URL + dramaEndpointPath,
  );
  const dramaData = await fetchDramaResponse.json<fetchedDramaData>();

  type fetchedCommentData = Comment[];
  const commentEndpointPath = "/api/comment?limit=10";
  const fetchCommentResponse = await fetch(
    context.cloudflare.env.SERVER_URL + commentEndpointPath,
  );
  const comments = await fetchCommentResponse.json<fetchedCommentData>();

  return {
    dramaData,
    comments,
    latestEpisodeNumber: Number.parseInt(params.episode as string),
  };
}

export default function Page() {
  const { dramaData, comments, latestEpisodeNumber } =
    useLoaderData<typeof loader>();

  return (
    <MainLayout>
      <div className="flex">
        <div className="w-4/6 p-4">
          <MediaPlayer src="https://www.youtube.com/watch?v=zjEmtWnxdYA" />
          <CommentsSection
            comments={comments}
            latestEpisodeNumber={latestEpisodeNumber}
          />
        </div>
        <div className="w-2/6 p-4 flex flex-col">
          <DramaDetailSideCard
            title={dramaData.title}
            description={dramaData.description}
            casts={dramaData.casts}
            director={dramaData.director}
            thumbnail={dramaData.thumbnail}
            rating={4.0}
          />
          <RecommendedVideosList />
        </div>
      </div>
    </MainLayout>
  );
}
