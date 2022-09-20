import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Status } from "../../utils/mock-data";
import { getStatus } from "./table.component";

import tableStyle from "./table.module.scss";

type FilterForm = {
  name?: string;
  status?: Status[];
  min?: number;
  max?: number;
};

export function FilterCard(props: any) {
  const {
    filterByAmount,
    filterByCustomer,
    filterByStatus,
    onAddFillter,
    onRest,
    onShowFilter,
  } = props;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FilterForm>();

  const onSubmit = (data) => {
    console.log({ data });
    if (data.status.length) {
      filterByStatus(data.status);
    }
    if (data.name) {
      filterByCustomer(data.name);
    }
    if (data.min || data.max) {
      filterByAmount(Number(data.min), Number(data.max));
    }
    if (data) {
      let filterCount = 0;
      if (data.status.length) {
        filterCount += 1;
      }
      if (data.name) {
        filterCount += 1;
      }
      if (data.min || data.max) {
        filterCount += 1;
      }
      onAddFillter(filterCount);
    }
    onShowFilter(false);
  };

  const cancelFilter = () => {
    reset();
    onRest();
    onAddFillter(0);
    onShowFilter(false);
  };

  return (
    <div className={tableStyle.filters_card}>
      <h3>Filter</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Filter by customer"
            {...register("name")}
            className={tableStyle.filter_by_customer}
          />
          <fieldset>
            <legend>Status</legend>
            <div className={tableStyle.filter_by_status}>
              {Object.keys(Status).map((stat, i) => (
                <label key={i}>
                  <input
                    type={"checkbox"}
                    value={stat}
                    {...register("status")}
                  />
                  {getStatus[stat]}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Amount</legend>
            <div className={tableStyle.filter_by_amount}>
              <input type={"number"} placeholder="from" {...register("min")} />
              <input type={"number"} placeholder="to" {...register("max")} />
            </div>
          </fieldset>
          <div className={tableStyle.apply_filters_btns}>
            <button onClick={cancelFilter}>Clear all</button>
            <button type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
}
