import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Drama-dot-com" },
    {
      name: "description",
      content: "ドラマのレビューをネタバレ無しで！",
    },
  ];
};

export default function Index() {
  return (
    <button type="button" className="btn">
      あああ
    </button>
  );
}
