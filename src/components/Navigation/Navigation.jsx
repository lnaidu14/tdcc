import { Menubar } from "primereact/menubar";
import { useNavigate, Outlet } from "react-router-dom";

export default function Navigation() {
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
      label: "Company",
      icon: "pi pi-search",
      items: [
        {
          label: "About Us",
          icon: "pi pi-server",
          command: () => {
            navigate("/about");
          },
        },
        {
          label: "Blog",
          icon: "pi pi-server",
          command: () => {
            navigate("/blog");
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
      <Outlet />
    </>
  );
}
