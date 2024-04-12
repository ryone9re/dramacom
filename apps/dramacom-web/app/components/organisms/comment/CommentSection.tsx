import { useState, type FormEvent } from "react";

interface Comment {
  id: string;
  author: string;
  targetUser: string;
  targetDrama: string;
  content: string;
  watchedEpisode: number;
}

export function CommentsSection({
  latestEpisodeNumber,
  comments,
}: { latestEpisodeNumber: number; comments: Comment[] }) {
  const [displayCommentEpisodeNumber, setDisplayCommentEpisodeNumber] =
    useState(latestEpisodeNumber);
  const [commentText, setCommentText] = useState<string>("");

  const filteredComments = comments.filter(
    (v) => v.watchedEpisode <= displayCommentEpisodeNumber,
  );

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCommentText("");
  };

  return (
    <div className="comments-section space-y-4">
      <form onSubmit={handleCommentSubmit}>
        <div className="flex justify-between items-center my-5">
          <p className="text-lg">レビュー</p>
          <select
            className="select select-bordered w-1/4"
            defaultValue={displayCommentEpisodeNumber}
            onChange={(e) =>
              setDisplayCommentEpisodeNumber(
                Number.parseInt(e.currentTarget.value),
              )
            }
          >
            <option key="0" value={0}>
              ネタバレ無し
            </option>
            {[...Array(latestEpisodeNumber)].map((_, i) => (
              <option key={String(i + 1)} value={i + 1}>
                {i + 1}話
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-full p-5 bg-darkgray rounded-xl">
          <input
            type="text"
            className="input input-bordered w-full mb-2 mr-2 p-2"
            placeholder="いまなにを思ってる？"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            投稿
          </button>
        </div>
      </form>
      <div className="comment-list space-y-2">
        {filteredComments.map((comment) => (
          <div key={comment.id} className="comment p-2 bg-base-200 rounded">
            <p className="text-sm font-bold">{comment.author}</p>
            <p className="text-sm">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
