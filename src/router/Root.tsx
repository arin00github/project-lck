import { Box } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

type menuType = {
  url: string;
  id: string;
  label: string;
};

const constMenu: menuType[] = [
  { url: "/home", id: "home", label: "home" },
  { url: "/teams", id: "teams", label: "teams" },
];

function Root() {
  const navigator = useNavigate();

  const moveUrl = (urlString: string) => {
    navigator(urlString);
  };

  return (
    <Box>
      <Box>
        {constMenu.map((menu) => {
          return <Box onClick={() => moveUrl(menu.url)}>{menu.label}</Box>;
        })}
      </Box>
      <Outlet />
    </Box>
  );
}

export default Root;
