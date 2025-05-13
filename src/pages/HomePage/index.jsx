import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(true)
  const [text, setText] = useState("Domů")

  const handleSelectItem = (text) => {
    setMenuOpened(!menuOpened)
    setText(text)
  }

  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu menu--closed"}>
          <button className="menu__btn" onClick={() => setMenuOpened(!menuOpened)}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem}/>
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem}/>
            <MenuItem text="Náš tým" onSelect={handleSelectItem}/>
            <MenuItem text="Blog" onSelect={handleSelectItem}/>
            <MenuItem text="Kontakt" onSelect={handleSelectItem}/>
          </div>
        </div>
      </header>
      <main>
        <h1>{text}</h1>
      </main>
    </>
  );
};
