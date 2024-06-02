import { useMutation } from '@tanstack/react-query';
import { UseUpdateData } from '../types';

// Create, Update, Delete
export const useUpdateData: UseUpdateData = ({ mutationFn }) => useMutation({ mutationFn })
