import _ from "lodash";
import type { ReactNode } from "react";
import type { Styles } from "../interfaces/styles";

/**
 * A button.
 * @param props
 * @param props.children the child nodes of this button
 * @param props.styles the optional style customizations for this button
 * @returns 
 */
function Button({ children, styles }: { children: ReactNode, styles?: Styles }) : ReactNode {
    return <button className={`${_.get(styles, 'backgroundColor')}`}>{children}</button>;
}

export default Button;
