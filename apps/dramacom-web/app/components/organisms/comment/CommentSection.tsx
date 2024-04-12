import type React from "react";
import { useState, type FormEvent } from "react";

interface Comment {
  id: string;
  author: string;
  targetUser: string;
  targetDrama: string;
  content: string;
  watchedEpisode: number;
}

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCommentText("");
  };

  return (
    <div className="comments-section space-y-4">
      <div className="comment-list space-y-2">
        {comments.map((comment, index) => (
          <div key={comment.id} className="comment p-2 bg-base-200 rounded">
            <p className="text-sm font-bold">{comment.author}</p>
            <p className="text-sm">{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <div className="flex justify-between items-center my-5">
          <p className="text-lg">レビュー</p>
          <select className="select select-bordered w-1/4" />
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
    </div>
  );
};

export default CommentsSection;
