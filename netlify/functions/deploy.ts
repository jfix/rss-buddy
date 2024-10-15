// netlify/functions/deploy.ts

import type { Config } from '@netlify/functions';

declare var process : {
  env: {
    BUILD_HOOK_URL: string
  }
}
const BUILD_HOOK = process.env.BUILD_HOOK_URL || '';

export default async (req: Request) => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  })
};

export const config: Config = {
  schedule: '0 0,6,12,18 * * *',
};
