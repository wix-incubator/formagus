import {RcFile} from 'syncpack';

const config: RcFile = {
  "dependencyTypes": [
    "!peer",
    "!local"
  ],
  "semverGroups": [
    {
      "range": "^"
    }
  ],
  "versionGroups": [
    {
      "label": "@types packages should only be under devDependencies",
      "dependencies": ["@types/**"],
      "dependencyTypes": ["prod", "peer"],
      "isBanned": true
    }
  ],
  sortFirst: [
    'name',
    'description',
    'scripts',
    'exports',
    'type',
    'main',
    'module',
    'types',
    'scripts',
    'paymentsScripts',
    'wix',
    'yoshi',
    'yoshiFlowLibrary',
    'perfer',
    'jest',
    'eslintConfig',
    'resolutions',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'engines',
    'files',
    'sideEffects',
    'version',
    'private',
    'publishConfig',
    'license',
    'author',
    'contributors',
    'repository',
    'packageManager',
    'workspaces',
  ],
};

export default config;
