import { useQuery } from '@tanstack/react-query';
import { UseGetData } from '../types';

export const useGetData: UseGetData = ({ queryKey, queryFn }) => useQuery({ queryKey, queryFn });
