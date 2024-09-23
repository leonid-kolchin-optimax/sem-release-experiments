import {useEffect, useRef} from 'react';

export function useOnMount(cb: () => void) {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            return;
        }

        didMount.current = true;
        cb();
    }, [])
}