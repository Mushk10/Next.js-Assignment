import Image from "next/image";
import { Header } from "./components/Header";
import { About } from "./components/About";

export default function Home() {
  return (
   <div>
    <h1> HELLO WORLD </h1>
    <Header/>
    <About/>
   </div>
  );
}

