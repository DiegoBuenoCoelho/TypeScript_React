import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<TEMP extends ElementType> = {
    as: TEMP;
} & ComponentPropsWithoutRef<TEMP>;

function Container<C extends ElementType = 'div'>(obProps: ContainerProps<C>) {
    const { as, children } = obProps;
    const Component = (as || 'div') as ElementType;
    return (
        <Component className="container" {...obProps}>
            {children}
        </Component>
    );
};

export default Container;