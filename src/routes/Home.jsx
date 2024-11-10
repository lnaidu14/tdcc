import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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
      command: () => {
        navigate("/contact");
      },
    },
  ];

  return (
    <>
      <Menubar model={items} />
    </>
  );
}
