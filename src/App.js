import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Header from "./Component/Header/Header";
import Definitions from "./Component/Definition/Definition";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [input, setInput] = useState("");
  const dictionaryApiData = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      setMeanings(data.data);
    } catch {}
  };
console.log(meanings);
  useEffect(() => {
    dictionaryApiData();
  }, []);
  return (
    <div style={{ background: "#067597", height: "100vh" }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header input={input} setInput={setInput} />
        <Definitions meanings={meanings} word={input} />
      </Container>
    </div>
  );
}

export default App;
