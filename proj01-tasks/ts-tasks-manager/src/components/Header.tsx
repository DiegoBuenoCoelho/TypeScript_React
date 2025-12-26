import type { FC, ReactNode } from "react";

interface HeaderProps {
    image: { src: string; alt: string; };
    children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, children }) => {

    return (
        <div className="header">
            {/* <img src={image.src} alt={image.alt} /> */}
            <img {...image} />
            {children}
        </div>
    );
};

export default Header;