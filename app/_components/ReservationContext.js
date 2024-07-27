"use client";

import { addDays } from "date-fns";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const defaultMonth = addDays(new Date(), 0);

const initialState = {
  from: defaultMonth,
  to: addDays(defaultMonth, 4),
};

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
