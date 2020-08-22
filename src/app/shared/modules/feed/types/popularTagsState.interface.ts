import { PopularTagType } from 'src/app/shared/types/popularTag.type';

export interface PopularTagsStateInteface {
  data: PopularTagType[] | null;
  isLoading: boolean;
  error: string | null;
}
