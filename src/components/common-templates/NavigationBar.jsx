import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/Z.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { animalLogout } from "../../../slices/AuthenticationSlices/logoutAnimal";
import { authActions } from "../../../slices/AuthenticationSlices/AuthSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar({ navStyle }) {
  const { logoutResponse } = useSelector((state) => state.auth);
  const loginInduvidual = JSON.parse(localStorage.getItem("data"))?.role;
  let navigation;
  if (loginInduvidual === "zookeeper") {
    navigation = [
      {
        name: "Dashboard",
        to: "/dashboard",
        current: false,
      },
      { name: "Register new", to: "/create", current: false },
      { name: "Family arrived?", to: "/fileupload", current: false },
    ];
  } else {
    navigation = [
      {
        name: "Dashboard",
        to: "/dashboard",
        current: false,
      },
    ];
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (logoutResponse?.status === "success" && logoutResponse) {
      dispatch(authActions.resetLogoutResponse());
      dispatch(authActions.resetLoginResponse());
      navigate("/login");
    }
  }, [logoutResponse]);
  const handleLogout = () => {
    dispatch(animalLogout());
  };
  return (
    <Disclosure
      as="nav"
      className={`${navStyle === "create" && "bg-chestnut"} ${
        navStyle === "details" && "bg-chestnut"
      } ${
        navStyle === "dash" && "bg-saffron"
      } sticky w-full top-2 rounded-[3rem] border-2 border-2 z-[100]`}
    >
      <Box className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Box className="relative flex h-16 items-center justify-between">
          <Box className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </Box>
          <Box className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Box className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                className="h-10 object-cover"
              />
            </Box>
            <Box className="hidden sm:ml-6 sm:block">
              <Box className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? `${navStyle === "create" && "bg-saffron"} ${
                            navStyle === "details" && "bg-saffron"
                          } ${
                            navStyle === "dash" && "bg-chestnut"
                          } text-white border`
                        : `text-white ${
                            navStyle === "create" && "hover:bg-saffron"
                          } ${navStyle === "details" && "hover:bg-saffron"} ${
                            navStyle === "dash" && "hover:bg-chestnut"
                          } hover:text-white border`,
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="Box" className="relative ml-3">
              <Box>
                <MenuButton className="relative flex rounded-full bg-raddishpinklight text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 justify-center items-center">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <span className="px-4 font-bold text-black hidden sm:block">
                    {JSON.parse(localStorage.getItem("data"))?.name}
                  </span>
                  <img
                    alt="animal_profile"
                    src="https://us.123rf.com/450wm/kucingliarz/kucingliarz2404/kucingliarz240400577/228714838-vector-illustration-of-a-cute-panda-bear-with-abstract-geometric-background.jpg?ver=6"
                    className="size-12 rounded-full"
                  />
                </MenuButton>
              </Box>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    to={`/profile/${
                      JSON.parse(localStorage.getItem("data"))?.id
                    }`}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Box
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none hover:cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </Box>
                </MenuItem>
              </MenuItems>
            </Menu>
          </Box>
        </Box>
      </Box>

      <DisclosurePanel className="sm:hidden">
        <Box className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.to}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium "
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </Box>
      </DisclosurePanel>
    </Disclosure>
  );
}
