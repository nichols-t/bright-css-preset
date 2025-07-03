import type { ReactNode } from "react";

/**
 * A link element (replaces `<a>`).
 * @param props
 * @param props.href the reference to which this link points
 * @param props.target an optional <a> target parameter. The default is _blank
 * @param props.children the children
 * @returns 
 */
function Link({ href, target, children } : { href: String, target?: String, children: ReactNode }) : ReactNode {
    if (!target) {
        target = '_blank';
    }
    return <a href={href.toString()} target={target.toString()}>{children}</a>
}

export default Link;
