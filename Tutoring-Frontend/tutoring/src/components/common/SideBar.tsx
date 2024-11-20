import { Component } from "react";
import logo from "../../assets/icons/logo-dark.png";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  state = {
    activeSection: "/home/dashboard", // Default active section
  };

  handleClick = (section: string) => {
    this.setState({ activeSection: section });
  };

  render() {
    const { activeSection } = this.state;

    const linkClasses = (section: string) =>
      `flex items-center p-2 rounded-lg group ${
        activeSection === section
          ? "text-[#6176F7] hover:bg-gray-100 dark:hover:bg-gray-700" // Active styles
          : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      }`;

    const iconClasses = (section: string) =>
      `flex-shrink-0 w-6 h-6 transition duration-75 ${
        activeSection === section ? "text-[#6176F7]" : "text-gray-500"
      }`;

    return (
      <div>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <a
              href="http://localhost:5173/home"
              className="flex items-center justify-center ps-2.5 mb-5"
            >
              <img src={logo} className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
            </a>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/home/dashboard"
                  className={linkClasses("/home/dashboard")}
                  onClick={() => this.handleClick("/home/dashboard")}
                >
                  <svg
                    className={iconClasses("/home/dashboard")}
                    fill="none"
                    viewBox="0 0 15 15"
                    height="1.5em"
                    width="1.5em"
         
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 001.04 2.15C1 2.324 1 2.52 1 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 002.15 6.96C2.324 7 2.52 7 2.75 7H5.25c.229 0 .426 0 .6-.041A1.5 1.5 0 006.96 5.85C7 5.676 7 5.48 7 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 005.85 1.04C5.676 1 5.48 1 5.25 1H2.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 01-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 2.15C8 2.324 8 2.52 8 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 6.96C9.324 7 9.52 7 9.75 7H12.25c.229 0 .426 0 .6-.041A1.5 1.5 0 0013.96 5.85C14 5.676 14 5.48 14 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 1.04C12.676 1 12.48 1 12.25 1H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM2.75 8H5.25c.229 0 .426 0 .6.041A1.5 1.5 0 016.96 9.15C7 9.324 7 9.52 7 9.75V12.25c0 .229 0 .426-.041.6A1.5 1.5 0 015.85 13.96C5.676 14 5.48 14 5.25 14H2.75c-.229 0-.426 0-.6-.041A1.5 1.5 0 011.04 12.85C1 12.676 1 12.48 1 12.25V9.75c0-.229 0-.426.041-.6A1.5 1.5 0 012.15 8.04C2.324 8 2.52 8 2.75 8zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 00-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 00.37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 00.37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 00-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 9.15C8 9.324 8 9.52 8 9.75V12.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 13.96c.174.041.371.041.6.041H12.25c.229 0 .426 0 .6-.041a1.5 1.5 0 001.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 8.04C12.676 8 12.48 8 12.25 8H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 01-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/home/teachers"
                  className={linkClasses("/home/teachers")}
                  onClick={() => this.handleClick("/home/teachers")}
                >
                  <svg
                    className={iconClasses("/home/teachers")}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Teachers
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/home/inbox"
                  className={linkClasses("/home/inbox")}
                  onClick={() => this.handleClick("/home/inbox")}
                >
                  <svg
                    className={iconClasses("/home/inbox")}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    <path d="M4 5.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8zm0 2.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/home/settings"
                  className={linkClasses("/home/settings")}
                  onClick={() => this.handleClick("/home/settings")}
                >
                  <svg
                    className={iconClasses("/home/settings")}
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
            <div className="mt-auto">
              <a
                href="#"
                className="flex items-center p-2 text-red-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-red-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
