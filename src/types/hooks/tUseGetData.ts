import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

export type UseGetData = ({
  queryKey,
  queryFn,
}: UseQueryOptions) => UseQueryResult;
