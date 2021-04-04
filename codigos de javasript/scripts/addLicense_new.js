import path from 'path';
import { prepend } from './copy-files';

export async function addLicense_new(packageData) {
  const license = `/** @license Material-UI v${packageData.version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;
  await Promise.all(
    ['../build/index.js', '../build/index.es.js'].map(file => prepend(path.resolve(__dirname, file), license)
    )
  );
}
