const envFileMap = {
  development: '.env.local',
  test: '.env.test',
};

export const envFilePath = envFileMap[process.env.NODE_ENV] ?? '.env';
export const ignoreEnvFile = process.env.NODE_ENV === 'production';
