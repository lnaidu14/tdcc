import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Blog",
      icon: "pi pi-star",
      command: () => {
        navigate("/contact");
      },
    },
    {
      label: "Company",
      icon: "pi pi-search",
      items: [
        {
          label: "Background",
          icon: "pi pi-bolt",
          command: () => {
            navigate("/contact");
          },
        },
        {
          label: "About Us",
          icon: "pi pi-server",
          command: () => {
            navigate("/contact");
          },
        },
        {
          label: "Mission",
          icon: "pi pi-pencil",
          command: () => {
            navigate("/contact");
          },
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
