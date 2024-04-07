import type { CommentRepository } from "../domain/repositories/comment-repository";
import { ID } from "../domain/value-objects/id";

type ShowCommentListInput = {
  limit: number;
  start?: string;
};
type ShowCommentListOutput = {
  id: string;
  author: string;
  targetUser?: string;
  targetDrama: string;
  content: string;
  watchedEpisode: number;
}[];

export async function ShowCommentList(
  repositories: { commentRepository: CommentRepository },
  input: ShowCommentListInput,
): Promise<ShowCommentListOutput> {
  const comments = await repositories.commentRepository.list(
    input.limit,
    input.start ? new ID(input.start) : undefined,
  );

  const showCommentList = comments.map((v) => ({
    id: v.identity().value(),
    author: v.author().identity().value(),
    targetUser: v.targetUser()?.identity().value(),
    targetDrama: v.targetDrama().identity().value(),
    content: v.content(),
    watchedEpisode: v.watchedEpisode(),
  }));

  return showCommentList;
}
