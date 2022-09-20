import { useEffect, useState } from "react";
import Image from "next/image";

import { TableFilters  } from './components/table/table-filter.componet'
import mockData, { Status } from "./utils/mock-data";
import Card from "./components/card/card.componet";
import { Table } from "./components/table/table.component";

import downloadImg from "../../../public/download.png";
import dashboardStyle from "./dashboard.module.scss";
import { DashboardNav } from "./components/dashabord-nav/dashboard-nav";



export default function Dashboard() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    const text = e.target.value;
    filterByCustomer(text);
    setTerm(text);
  };

  const filterByStatus = (status: Status[]) => {
    const res = mockData.filter((item) => status.includes(item.status));
    setData(res);
  };

  const filterByCustomer = (text: string) => {
    if (text.length === 0) {
      setData(mockData);
    }
    if (text.length > 2) {
      const currentData = mockData.filter((item) =>
        item.customer.includes(text)
      );
      setData(currentData);
    }
  };

  const filterByAmount = (from, to) => {
    const res = mockData.filter((item) => {
      return item.amount <= to && item.amount >= from;
    });
    setData(res);
  };

  useEffect(() => {
    setData(mockData);
  }, []);
  return (
    <DashboardNav>
      <Card>
        <div className={dashboardStyle.nav_header_container}>
          <div className={dashboardStyle.nav_header}>
            <div className={dashboardStyle.nav_header_text_container}>
              <div>Home</div>
              <div>{`>`}</div>
              <div>Payments</div>
            </div>
            <div className={dashboardStyle.avatar}>
              <span>DO</span>
            </div>
          </div>
          <div className={dashboardStyle.line}></div>
          <div className={dashboardStyle.nav_header_text_container_2}>
            <div>
              <h2>Payments</h2>
              <div>Your full payment history</div>
            </div>
            <button className={dashboardStyle.download_csv}>
              <span className={dashboardStyle.download_csv_btn_icon}>
                <Image src={downloadImg} alt="" />
              </span>
              <span>Download CSV</span>
            </button>
          </div>
        </div>
        <div className={`${dashboardStyle.table_and_filters}`}>
          <div className={dashboardStyle.table_container}>
            <TableFilters
              handleSearch={handleSearch}
              filterByAmount={filterByAmount}
              filterByCustomer={filterByCustomer}
              filterByStatus={filterByStatus}
              onReset={() => {
                setData(mockData);
              }}
            />
            <Table data={data} />
          </div>
        </div>
      </Card>
    </DashboardNav>
  );
}


