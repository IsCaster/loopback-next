const DATASOURCE_APP_PATH = 'src/datasources';
const MODEL_APP_PATH = 'src/models';
const REPOSITORY_APP_PATH = 'src/repositories';
const CONFIG_PATH = '.';
const DUMMY_CONTENT = '--DUMMY VALUE--';
const fs = require('fs');

exports.SANDBOX_FILES = [
  {
    path: CONFIG_PATH,
    file: 'myconfig.json',
    content: JSON.stringify({
      datasource: 'dbmem',
      model: 'decoratordefined',
    }),
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'dbkv.datasource.json',
    content: JSON.stringify({
      name: 'dbkv',
      connector: 'kv-redis',
    }),
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'dbkv.datasource.ts',
    content: DUMMY_CONTENT,
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'dbmem.datasource.json',
    content: JSON.stringify({
      name: 'dbmem',
      connector: 'memory',
    }),
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'my-ds.datasource.json',
    content: JSON.stringify({
      name: 'MyDS',
      connector: 'memory',
    }),
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'dbmem.datasource.ts',
    content: DUMMY_CONTENT,
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'restdb.datasource.json',
    content: JSON.stringify({
      name: 'restdb',
      connector: 'rest',
    }),
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'sqlite-3.datasource.json',
    content: JSON.stringify({
      name: 'sqlite3',
      connector: 'loopback-connector-sqlite3',
    }),
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'sqlite-3.datasource.ts',
    content: DUMMY_CONTENT,
  },
  {
    path: DATASOURCE_APP_PATH,
    file: 'restdb.datasource.ts',
    content: DUMMY_CONTENT,
  },
  {
    path: MODEL_APP_PATH,
    file: 'decoratordefined.model.ts',
    content: fs.readFileSync(
      require.resolve('./models/decoratordefined.model.txt'),
      {
        encoding: 'utf-8',
      },
    ),
  },
  {
    path: MODEL_APP_PATH,
    file: 'defaultmodel.model.ts',
    content: fs.readFileSync(
      require.resolve('./models/defaultmodel.model.txt'),
      {
        encoding: 'utf-8',
      },
    ),
  },
  {
    path: MODEL_APP_PATH,
    file: 'multi-word.model.ts',
    content: fs.readFileSync(require.resolve('./models/multi-word.model.txt'), {
      encoding: 'utf-8',
    }),
  },
  {
    path: MODEL_APP_PATH,
    file: 'invalid-id.model.ts',
    content: fs.readFileSync(require.resolve('./models/invalid-id.model.txt'), {
      encoding: 'utf-8',
    }),
  },
  {
    path: REPOSITORY_APP_PATH,
    file: 'defaultmodel.repository.base.ts',
    content: fs.readFileSync(
      require.resolve('./repositories/defaultmodel.repository.base.ts'),
      {
        encoding: 'utf-8',
      },
    ),
  },
];
