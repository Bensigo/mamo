import { useEffect, useState } from "react";
import Image from "next/image";

import { FilterCard } from "./table-filter-card.component";

import tableStyle from './table.module.scss';

import calanderImg from "../../../../../public/calander.png";
import filterImg from "../../../../../public/filter.png";

export const TableFilters = ({
    handleSearch,
    filterByAmount,
    filterByCustomer,
    filterByStatus,
    onReset,
  }: {
    handleSearch: any;
    filterByAmount: any;
    filterByCustomer: any;
    filterByStatus: any;
    onReset: () => void;
  }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [filterCount, setFilterCount] = useState(0);
    return (
      <div className={tableStyle.table_filers}>
        <input
          onChange={handleSearch}
          placeholder="Search for payments"
          className={tableStyle.search_input}
        />
        <button className={tableStyle.filter_button}>
          <span className={tableStyle.filter_btn_icon}>
            <Image src={calanderImg} alt="" />
          </span>
          <span className={tableStyle.filter_btn_txt}>All Time</span>
        </button>
        <div style={{ position: "relative" }}>
          <button
            className={`${tableStyle.filter_button} ${tableStyle.the_filter}`}
            onClick={() => setShowFilters((val) => !val)}
          >
            <span className={tableStyle.filter_btn_icon}>
              <Image src={filterImg} alt="" />
            </span>
            <span className={tableStyle.filter_btn_txt}>Filters</span>
            {filterCount >= 1 && (
              <span className={tableStyle.filter_btn_count}>{filterCount}</span>
            )}
          </button>
          {showFilters && (
            <div className={tableStyle.filters_popup}>
              <span
                className={tableStyle.filters_popup_close}
                onClick={() => setShowFilters(false)}
              >
                X
              </span>
              <FilterCard
                filterByAmount={filterByAmount}
                filterByCustomer={filterByCustomer}
                filterByStatus={filterByStatus}
                onAddFillter={setFilterCount}
                onRest={onReset}
                onShowFilter={setShowFilters}
              />
            </div>
          )}
        </div>
      </div>
    );
  };