
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

    return (
        <>
            <div className="hidden md:block"><WorkDesktopComponent classname={classname} image={new URL(image)}
                title={title} newDescription={newDescription} justify={justify}
                direction={direction} languages={languages} projectLink={projectLink} /></div>
            <div className="flex md:hidden"><WorkMobileComponent image={new URL(image)} title={title}
                newDescription={newDescription} languages={languages} projectLink={projectLink} /></div>
        </>
    );
}

export default WorkDeviceHnadler;