import Header from "./components/Header";
import Whoami from "./components/Whoami";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Content from "./components/Content"
import Noteworthy from "./components/Noteworthy";









export default function Home() {
    
  return (
    <>
        <Header style={"Header w-full h-[110px] flex justify-between items-center px-[50px]"}/>
        <Content style={"h-screen w-full px-[150px] flex justify-center font-[Inconsolata]"}>
            <Whoami/>
            <About/>
            <Experience/>
            <Work/>
            <Noteworthy/>
            <Contact/>
        </Content>
    </>
  );
}
