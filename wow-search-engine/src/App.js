import React, { Component } from "react";
import "./App.css";

import ModalForm from "./ModalForm";
import Cardcharacter from "./Character";
import Banner from "./Banner.jsx";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <Banner />
                </header>
                <body />
                <footer />

                    <p class="intro">
                        Hello player ! Welcome on WoW-SearchEngine ! Here you're can search for you favorite player or even for yourself ! Try it !
                        Enter the name of a player below and found out more about his stats and other cool stuff !
                    </p>
                </header>
                <footer>
                    <ModalForm />
                </footer>
                <Cardcharacter />
            </div>
        );
    }
}

export default App;
