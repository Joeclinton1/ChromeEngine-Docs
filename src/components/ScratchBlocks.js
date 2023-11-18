import React, { useEffect , useRef} from 'react';

const options = {
    style: 'scratch3',
    languages: ['en'],
    scale: 1,
}

const ScratchBlock = ({ children }) => {

    const blockRef = useRef(null);
    
    useEffect(() => {
        const doc = window.scratchblocks.parse(children, options)
        const svg = window.scratchblocks.render(doc, options)
        window.scratchblocks.replace(blockRef.current, svg, doc, options)
    }, []);

    return <pre className="blocks" ref={blockRef}>{children}</pre>;
};

export default ScratchBlock;