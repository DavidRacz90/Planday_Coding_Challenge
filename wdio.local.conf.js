import { config as sharedConfig } from './wdio.git.conf'

export const LocalConfig = {
    ...sharedConfig,
    ...{
        services: ['chromedriver']
    }
}