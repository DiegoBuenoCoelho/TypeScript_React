import type { FC, ReactNode } from "react";

interface InfoBoxINFOProps {
    mode: 'info';
    children: ReactNode;
}

interface InfoBoxWARNINGProps {
    mode: 'warning';
    severity?: 'low' | 'medium' | 'high';
    children: ReactNode;
}

// interface InfoBoxProps {
//     mode: 'info' | 'warning';
//     severity?: 'low' | 'medium' | 'high';
//     children: ReactNode;
// }

const InfoBox: FC<InfoBoxINFOProps | InfoBoxWARNINGProps> = (obProps) => {

    const { mode, children } = obProps;
    if (mode === 'info') {
        return (<aside className="infoBox infobox-hint">
            <h3>Info</h3>
            <p>
                {children}
            </p>
        </aside>);
    }

    const { severity } = obProps;
    return (
        <aside className={`infoBox infobox-warning infobox--${severity}`}>
            <h3>Warning</h3>
            <p>
                {children}
            </p>
        </aside>
    );
};

export default InfoBox;