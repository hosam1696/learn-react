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

function App() {
    return (
        <section className="App">
            <ParentComponent/>
        </section>
    );
}

export default App;
