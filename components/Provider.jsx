"use client";

import { SessionProvider } from "next-auth/react";

// allows me to access the sesssion context through my app by wrapping the parent component (layout)
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
