"use client"

import { useEffect, useState } from "react";
import WorkMobileComponent from "./WorkMobileComponent";
import WorkDesktopComponent from "./WorkDesktopComponent";


type Props = {
    image: URL;
    title: string;
    newDescription: (JSX.Element)[] | null;
    justify: string;
    classname: string;
    direction: string;
    languages: Array<string>;
    projectLink: Array<URL>; // Changed to camelCase to follow common convention
  };

const WorkDeviceHnadler = ({ image, title, newDescription, languages, projectLink, justify, direction, classname}: Props) => {

    const [windoSize, setWindoSize] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindoSize(window.innerWidth);
        });
    }, [windoSize])

    return (
        <>
            {
                (windoSize >= 768)
                    ? <WorkDesktopComponent classname={classname} image={new URL(image)} title={title} newDescription={newDescription} justify={justify} direction={direction} languages={languages} projectLink={projectLink} />
                    : <WorkMobileComponent image={new URL(image)} title={title} newDescription={newDescription} languages={languages} projectLink={projectLink} />
            }
        </>
    );
}

export default WorkDeviceHnadler;