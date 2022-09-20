import { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./dashboard-nav.module.scss";
import logo from "../../../../../public/mamo-pay-logo-business-white.svg";
import menuImg from "../../../../../public/hambuger-menu.svg";
import paymentImg from "../../../../../public/payment.png";
import overviewImg from "../../../../../public/overview.png";
import paymentLinkImg from "../../../../../public/payment-link.png";
import settlementImg from "../../../../../public/settlement.png";
import disbursementsImg from "../../../../../public/disbursements.png";
import accountSettingsImg from "../../../../../public/account.png";
import invoiceImg from "../../../../../public/invoice.png";

const links = [
  { name: "Overview", path: "", active: false, icon: overviewImg },
  { name: "Payments Links", path: "", active: false, icon: paymentLinkImg },
  { name: "Invoices", path: "", active: false, icon: invoiceImg },
  { name: "Payments", path: "", active: true, icon: paymentImg },
  { name: "Settlements", path: "", active: false, icon: settlementImg },
  { name: "Disbursements", path: "", active: false, icon: disbursementsImg },
  {
    name: "Account Settings",
    path: "",
    active: false,
    icon: accountSettingsImg,
  },
];

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.sideBar}>
      <span
        onClick={onClose}
        className={`${styles.sideBar_close} ${styles.hideOnDesktop}`}
      >
        X
      </span>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a
              className={`${styles.sideBar_item} ${
                link.active && styles.active
              }`}
              href="#0"
            >
              <span className={styles.sideBar_item_icon}>
                <Image
                  src={link.icon}
                  alt="me"
                  width="16"
                  height="16"
                  className="icon"
                />
              </span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.page_footer}>
        <div>&#9829; Powered by Mamo</div>
      </div>
    </div>
  );
};

const Header = ({ handleOpenMenu }: { handleOpenMenu: () => void }) => {
  return (
    <div>
      <div className={styles.header}>
        <span
          className={`${styles.header_icon} ${styles.hideOnDesktop}`}
          onClick={handleOpenMenu}
        >
          <Image src={menuImg} alt="logo" />
        </span>
        <span className={styles.header_logo}>
          <Image src={logo} alt="logo" />
        </span>
        <span className={`${styles.header_user} ${styles.hideOnDesktop}`}>
          <span className={styles.avatar}>DO</span>
        </span>
      </div>
      <button className={`${styles.header_btn} ${styles.hideOnMobile}`}>
        Create Payment Link
      </button>
    </div>
  );
};

const NavHead = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <div className={`${styles.page_head} ${showSidebar && styles.showSidebar}`}>
      <Header handleOpenMenu={openSidebar} />
      <Sidebar onClose={closeSidebar} />
    </div>
  );
};

export function DashboardNav({ children }: { children: ReactElement }) {
  return (
    <div className={styles.page}>
      <NavHead />
      <div className={styles.page_content}>{children}</div>
    </div>
  );
}
