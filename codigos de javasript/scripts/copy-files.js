/* eslint-disable no-console */

import path from 'path';
import fse from 'fs-extra';
import { copyFile_new } from './copyFile_new';
import { typescriptCopy_new } from './typescriptCopy_new';
import { addLicense_new } from './addLicense_new';

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8');
  const { scripts, devDependencies, ...packageDataOther } = JSON.parse(packageData);
  const newPackageData = {
    ...packageDataOther,
    main: './index.js',
    module: './index.es.js',
    private: false,
  };
  const buildPath = path.resolve(__dirname, '../build/package.json');

  await fse.writeFile(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${buildPath}`);

  return newPackageData;
}

export async function prepend(file, string) {
  const data = await fse.readFile(file, 'utf8');
  await fse.writeFile(file, string + data, 'utf8');
}

async function run() {
  await ['README.md', '../../LICENSE'].map(file => copyFile_new(file));
  const packageData = await createPackageFile();
  await addLicense_new(packageData);

  // TypeScript
  const from = path.resolve(__dirname, '../src');
  await Promise.all([
    typescriptCopy_new(from, path.resolve(__dirname, '../build')),
    typescriptCopy_new(from, path.resolve(__dirname, '../build/es')),
  ]);
}

run();
