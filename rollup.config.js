import url from '@rollup/plugin-url';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import {terser} from 'rollup-plugin-terser';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import tspCompiler from 'ts-patch/compiler';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
            exports: 'named',
            entryFileNames: 'index.js',
        },
        {
            dir: 'dist/es',
            format: 'es',
            exports: 'named',
            entryFileNames: 'index.js',
        },
    ],
    plugins: [
        peerDepsExternal(),
        url(),
        nodeResolve({
            browser: true,
        }),
        typescript({
            useTsconfigDeclarationDir: true,
            typescript: tspCompiler,
            clean: true,
        }),
        commonjs({
            include: './node_modules/**',
        }),
        terser(),
    ],
    preserveModules: true,
    external: [],
};