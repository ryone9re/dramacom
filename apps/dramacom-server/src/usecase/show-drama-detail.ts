import type { DramaRepository } from "../domain/repositories/drama-repository";
import { ID } from "../domain/value-objects/id";

type ShowDramaDetailInput = {
  id: string;
};

type ShowDramaDetailOutput = {
  id: string;
  description: string;
  numberOfEpisodes: number;
};

export async function ShowDramaDetail(
  repositories: {
    dramaRepository: DramaRepository;
  },
  input: ShowDramaDetailInput,
): Promise<ShowDramaDetailOutput> {
  const drama = await repositories.dramaRepository.findByID(new ID(input.id));
  if (!drama) {
    // TODO エラー作成
    throw new Error("Drama Not Found");
  }

  return {
    id: drama.identity().value(),
    description: drama.description(),
    numberOfEpisodes: drama.numberOfEpisodes(),
  };
}
