// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as path from 'path';

const folderName = path.basename(__dirname);
export const EXTENSION_ROOT_DIR =
    folderName === 'common' ? path.dirname(path.dirname(__dirname)) : path.dirname(__dirname);
export const BUNDLED_PYTHON_SCRIPTS_DIR = path.join(EXTENSION_ROOT_DIR, 'bundled');
export const FORMATTER_SCRIPT_PATH = path.join(BUNDLED_PYTHON_SCRIPTS_DIR, 'formatter', `format_server.py`);