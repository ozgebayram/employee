import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";
import data from "../src/assets/data";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const userPerPage = 5; //her sayfada 5 adet resım olsun
  const indexOffLastUser = page * userPerPage;
  const indexOffFirstUser = indexOffLastUser - userPerPage;

  const currentUsers = data.slice(indexOffFirstUser, indexOffLastUser); //data dizisinin içine gir dilimle
  //0 ıncı ındısten basla 5 5 ayır dıyor yukarıda
  return (
    <div className="App">
      <Header
        from={indexOffFirstUser + 1}
        to={indexOffFirstUser + currentUsers.length}
      />
      {currentUsers.map((item) => (
        <Main key={item.id} {...item} />
      ))}
      <Button
        total={Math.ceil(data.length / userPerPage)}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
