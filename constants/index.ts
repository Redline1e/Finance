interface NavbarLink {
  imgURL?: string;
  label: string;
  route: string;
}

export const navbarLinks: NavbarLink[] = [
  {
    route: "/",
    label: "Overview",
  },
  {
    route: "/transactions",
    label: "Transactions",
  },
  {
    route: "/accounts",
    label: "Accounts",
  },
  {
    route: "/categories",
    label: "Categories",
  },
  //   {
  //     route: "/settings",
  //     label: "Settings",
  //   },
];
