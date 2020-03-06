import React from 'react';
import './App.css';
import Greet from "./components/Greeting";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import MyForm from "./components/MyForm";
import LifeCycleA from "./components/LifeCycleA";
import MyPureComponent from "./components/MyPureComponent";
import ParentComponent from "./components/ParentComponent";
import MemoComponent from "./components/MemoComponnet";
import RefDemo from "./components/RefDemo";
import FRInput from "./components/FRInput";
import ErrorDemo from "./components/ErrorDemo";
import ClickCounter from "./components/ClickCounter";

function App() {
    return (
        <section className="App">
            <ClickCounter/>
        </section>
    );
}

export default App;
