//import "./App.css";
import NavHead from "./compoments/navhead";

export default function App() {
    return (
        <div className="bg-sblue text-swhite sp-font-2 h-screen">
            <NavHead />
            <div className="bg-dgreen rounded-lg mx-20 mt-12 px-5 py-3 text-xl text-sblue">
                <span className="font-bold  text-2xl">Directions: </span>
                To increase your score click on <span className="font-semibold">%Object</span> you have not click on before
            </div>
        </div>
    );
}
