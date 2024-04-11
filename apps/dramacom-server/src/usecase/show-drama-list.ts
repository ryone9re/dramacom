import type { DramaRepository } from "../domain/repositories/drama-repository";
import { ID } from "../domain/value-objects/id";

type ShowDramaListInput = {
  limit: number;
  start?: string;
};

type ShowDramaListOutput = {
  id: string;
  title: string;
  description: string;
  casts: string[];
  director: string[];
  thumbnail: string;
  numberOfEpisodes: number;
}[];

export async function ShowDramaList(
  repositories: { dramaRepository: DramaRepository },
  input: ShowDramaListInput,
): Promise<ShowDramaListOutput> {
  const dramaList = await repositories.dramaRepository.list(
    input.limit,
    input.start ? new ID(input.start) : undefined,
  );

  const showDramaListOutput = dramaList.map((v) => ({
    id: v.identity().value(),
    title: v.title(),
    description: v.description(),
    casts: v.casts(),
    director: v.director(),
    thumbnail: v.thumbnail(),
    numberOfEpisodes: v.numberOfEpisodes(),
  }));

  return showDramaListOutput;
}
