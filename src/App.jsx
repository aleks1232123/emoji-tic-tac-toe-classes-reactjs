import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Component } from "react";
import Game from "../src/components/Game/Game";
import MainPage from "../src/components/MainPage/MainPage";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    );
  }
}
