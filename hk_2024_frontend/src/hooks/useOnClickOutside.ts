import {useEffect} from "react";

function useOnClickOutside(ref: any, handler: any, excludeRefs?: any[]) {
    useEffect(
        () => {
            const listener = (event: { target: any; }) => {
                if(excludeRefs) {
                    const isExcluded = excludeRefs.some((excludeRef) => {
                        return excludeRef.current && excludeRef.current.contains(event.target);
                    });

                    if (isExcluded) {
                        return;
                    }
                }

                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}export default useOnClickOutside;