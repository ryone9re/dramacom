import { User } from "../domain/models/user";
import type { UserRepository } from "../domain/repositories/user-repository";

type CreateUserInput = {
  name: string;
};

type CreateUserOutput = {
  id: string;
  name: string;
};

export async function CreateUser(
  repositories: {
    userRepository: UserRepository;
  },
  input: CreateUserInput,
): Promise<CreateUserOutput> {
  const newUser = User.new({ name: input.name });

  await repositories.userRepository.save(newUser);

  return { id: newUser.identity().value(), name: newUser.name() };
}
