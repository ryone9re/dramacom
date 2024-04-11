import type { DramaRepository } from "../domain/repositories/drama-repository";
import { ID } from "../domain/value-objects/id";

type ShowDramaDetailInput = {
  id: string;
};

type ShowDramaDetailOutput = {
  id: string;
  title: string;
  description: string;
  casts: string[];
  director: string[];
  thumbnail: string;
  numberOfEpisodes: number;
};

export async function ShowDramaDetail(
  repositories: {
    dramaRepository: DramaRepository;
  },
  input: ShowDramaDetailInput,
): Promise<ShowDramaDetailOutput> {
  const output = await repositories.dramaRepository.findByID(new ID(input.id));
  if (!output) {
    // TODO エラー作成
    throw new Error("Drama Not Found");
  }

  return {
    id: output.identity().value(),
    title: output.title(),
    description: output.description(),
    casts: output.casts(),
    director: output.director(),
    thumbnail: output.thumbnail(),
    numberOfEpisodes: output.numberOfEpisodes(),
  };
}
