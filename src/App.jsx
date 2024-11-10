import { useState } from "react";
import "./App.css";
import { Menubar } from "primereact/menubar";

function App() {
  const [count, setCount] = useState(0);
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Blog",
      icon: "pi pi-star",
    },
    {
      label: "Company",
      icon: "pi pi-search",
      items: [
        {
          label: "Background",
          icon: "pi pi-bolt",
        },
        {
          label: "About Us",
          icon: "pi pi-server",
        },
        {
          label: "Mission",
          icon: "pi pi-pencil",
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
  ];

  const onClick = (e) => {
    console.log("click ");
  };

  return (
    <>
      <Menubar model={items} />
    </>
  );
}

export default App;
