import { User } from "../domain/models/user";
import type { UserRepository } from "../domain/repositories/user-repository";

type CreateUserInput = {
  name: string;
};

export async function CreateUser(
  repositories: {
    userRepository: UserRepository;
  },
  input: CreateUserInput,
) {
  const newUser = User.new({ name: input.name });

  await repositories.userRepository.save(newUser);
}
