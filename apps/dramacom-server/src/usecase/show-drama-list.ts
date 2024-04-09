import type { DramaRepository } from "../domain/repositories/drama-repository";
import { ID } from "../domain/value-objects/id";

type ShowDramaListInput = {
  limit: number;
  start?: string;
};

type ShowDramaListOutput = {
  id: string;
  description: string;
  numberOfEpisodes: number;
}[];

export async function ShowDramaList(
  repositories: { dramaRepository: DramaRepository },
  dto: ShowDramaListInput,
): Promise<ShowDramaListOutput> {
  const dramaList = await repositories.dramaRepository.list(
    dto.limit,
    dto.start ? new ID(dto.start) : undefined,
  );

  const showDramaListOutput = dramaList.map((v) => ({
    id: v.identity().value(),
    description: v.description(),
    numberOfEpisodes: v.numberOfEpisodes(),
  }));

  return showDramaListOutput;
}
