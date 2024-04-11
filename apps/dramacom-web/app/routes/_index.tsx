import type { MetaFunction } from "@remix-run/cloudflare";
import SearchBar from "~/components/molecules/SearchBar";
import CardContainer from "~/components/organisms/containers/CardContainer";
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

// サンプルデータ
const cardsData = [
  {
    id: 1,
    title: "ドラマタイトル",
    rating: 4.5,
    imageSrc: "path-to-image.jpg",
    description: "aaaa",
  },
  // ... 他のデータ
];

export default function Index() {
  return (
    <MainLayout>
      <div className="w-full px-20">
        <SearchBar />
      </div>
      <CardContainer label="今話題の作品" cards={cardsData} />
      <CardContainer label="お気に入り" cards={cardsData} />
      <CardContainer label="なんか" cards={cardsData} />
    </MainLayout>
  );
}
