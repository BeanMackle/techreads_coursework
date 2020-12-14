import { ResponseType } from '../models/index';

export interface Toast{
  type: ResponseType;
  message: string;
}
