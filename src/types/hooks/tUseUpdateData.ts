import { UseMutationOptions } from '@tanstack/react-query';

export type UseUpdateData = ({
  mutationFn,
}: UseMutationOptions) => Partial<unknown>;
