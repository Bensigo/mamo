import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";

import { MockData } from "../../utils/mock-data";
import paginate from "../../utils/paginate";
import tableStyle from "./table.module.scss";

const badgeStyle = {
  pending: `${tableStyle.pending}`,
  refunded: `${tableStyle.refunded}`,
  settled: `${tableStyle.settled}`,
  failed: `${tableStyle.failed}`,
};

export const getStatus = {
  pending: 'pending',
  refunded : 'refunded',
  settled: 'settled',
  partialRefund: 'partial Refund',
  refundPending: 'refund Pending',
  failed: 'failed'
}

const Badge = (props: { status: MockData["status"] }) => {
  return (
    <div className={`${tableStyle.badge} ${badgeStyle[props.status]}`}>
      {getStatus[props.status]}
      <span className={tableStyle.badge_popup}>
        {" "}
        <span className={tableStyle.arrow_up}></span> This payment was failed
        because of the “reason description”
      </span>
    </div>
  );
};

type TableProps = {
  data: MockData[];
};
type TableItemProp = {
  item: MockData;
};

export function Table({ data }: TableProps) {
  const [page, setPage] = useState(1);
  const paymentCount = 5;
  const {
    data: paginatedData,
    currentPage,
    totalPages,
  } = paginate(data,paymentCount , page);
  const handleNext = () => {
    if (page < totalPages) {
      setPage((val) => val+ 1);
    } else {
      setPage(totalPages);
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((val) => val- 1);
    } else {
      setPage(1);
    }
  };
  const isMobile = false;
  return (
   <div> 
    <div className={tableStyle.table}>
      <div className={tableStyle.header}>
        <div>Payment ID</div>
        <div>customer</div>
        <div>Amount</div>
        <div>Status</div>
        <div>Payment date</div>
      </div>
      <div>
        {paginatedData.map((item, i) => (
          <TableItem item={item} key={i} />
        ))}
      </div>
      
    </div>
    <div className={tableStyle.table_footer_container}>
        <div className={tableStyle.table_footer}>
          <div className={tableStyle.hideOnMobile}>
            1 - {paymentCount} of {data.length} payments
          </div>  
          <div className={tableStyle.table_footer_paginate}>
            <div>Page {page} of {totalPages} </div>
            <div>
            <button disabled={page === 1} onClick={handlePrev}>{"<"}</button>
            <button disabled={page === totalPages} onClick={handleNext}>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

function MobileTableITem({ item }: TableItemProp) {
  return (
    <div className={tableStyle.mobile_content}>
      <div className={tableStyle.mobile_content_badge_holder}>
        <Badge status={item.status} />
      </div>
      <div
        className={`${tableStyle.mobile_content_row} ${tableStyle.mobile_content_row_bolder}`}
      >
        <div>{item.customer}</div>
        <div>AED {item.amount}</div>
      </div>
      <div className={tableStyle.mobile_content_row}>
        <div>{item.id}</div>
        <div>{item.createdAt}</div>
      </div>
    </div>
  );
}

function TableItem({ item }: TableItemProp) {
  const matches = useMediaQuery('only screen and (max-width: 480px)')
  console.log({ matches })
  if (matches) return <MobileTableITem item={item}/>
  return (
    <div className={tableStyle.content}>
      <div>{item.id}</div>
      <div>{item.customer}</div>
      <div>AED {item.amount}</div>
      <div>
        <Badge status={item.status} />
      </div>
      <div>{item.createdAt}</div>
    </div>
  );
}
