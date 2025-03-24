import typescript from '@rollup/plugin-typescript';
import {compileLitTemplates} from '@lit-labs/compiler';

export default {
    build : {
        rollupOptions : {
            plugins: [
                typescript({
                    transformers: {
                        before: [compileLitTemplates()],
                    },
                })
            ]
        }
    }
}
