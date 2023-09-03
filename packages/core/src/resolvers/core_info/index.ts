import { ICoreInfo } from '@learn/common/schemas/coreInfo';

export async function coreInfoResolver(): Promise<ICoreInfo> {
  return {
    version: '0.0.1'
  };
}
