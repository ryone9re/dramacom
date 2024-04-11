import DoramaDetailCard from "~/components/organisms/drama/DramaDetailCard";
import EpisodeList from "~/components/organisms/drama/DramaEpisodeList";
import MainLayout from "~/components/templates/layout/MainLayout";

const doramaDetailMock = {
  title: "青春の影",
  imageSrc: "https://thetv.jp/i/pgw/program_images/0001000531_11_v.jpg",
  rating: 4.5,
  description:
    "この物語は、希望と絶望の狭間で奮闘する若者たちの姿を描いたドラマチックな作品です。主人公は、過酷な現実に直面しながらも夢を追い続ける青年で、友情と恋愛を通じて人生の意味を見出していきます。親友たちとの絆を深めながら、困難に立ち向かい、自己実現への旅を続けます。彼らの心情を繊細に描き出し、各キャラクターの成長が感動的なクライマックスへと観客を導きます。脚本家は青春の甘酸っぱさと苦悩をリアルに表現することに成功しており、監督はその世界観を鮮やかにスクリーンに再現しています。この作品は、愛と友情の本質に迫るとともに、人間の強さと脆さを描くことで、私たちに深い感動と多くの思考を提供してくれます。",
  genres: ["ドラマ", "ロマンス", "コメディ"],

  releaseYear: 2020,
};

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

const doramaDetailPage = () => {
  return (
    <MainLayout>
      <DoramaDetailCard {...doramaDetailMock} />
      <EpisodeList episodes={episodeProps} />
    </MainLayout>
  );
};

export default doramaDetailPage;
