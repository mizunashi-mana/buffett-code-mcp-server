#!/usr/bin/env node
// Launch the MCP server straight from the TypeScript source via tsx,
// so no build step (dist/) is required to run it.
import { tsImport } from 'tsx/esm/api';

await tsImport('../src/index.ts', import.meta.url);
