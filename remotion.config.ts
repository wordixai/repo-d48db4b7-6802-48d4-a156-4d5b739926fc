import { Config } from '@remotion/cli/config';
import { enableTailwind } from '@remotion/tailwind';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setConcurrency(1);
Config.setPublicDir('./public');
Config.setEntryPoint('./src/remotion/index.ts');

enableTailwind({
  configPath: './tailwind.config.ts',
});