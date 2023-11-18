import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    import('scratchblocks').then(({ default: scratchblocks }) => {
        window.scratchblocks = scratchblocks;
    });
}