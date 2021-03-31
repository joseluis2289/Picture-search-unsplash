import { Button, TextField } from "@material-ui/core";
import Axios from "axios";
import React, { useState } from "react";

export default function Search(props) {
  const [input, setInput] = useState("cats");

  const getValue = (e) => {
    setInput(e.target.value);
  };

  const fetchPhotos = (input) => {
    Axios.get(`API`)
      .then((res) => {
        console.log(res.data.results);
        props.setPhotos(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <TextField
        inputStyle={{ textAlign: "center" }}
        style={{ marginLeft: "30%", width: "600px", marginBottom: "40px" }}
        label="Search"
        variant="outlined"
        size="small"
        value={input}
        onChange={getValue}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          fetchPhotos(input);
        }}
      >
        Search
      </Button>
    </div>
  );
}
