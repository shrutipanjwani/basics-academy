"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { usePrivy } from "@privy-io/react-auth";
import Loading from "@/components/UI/Loading";

interface LandingProps {
  locale: string;
}

export default function Landing({ locale }: LandingProps) {
  const { ready, authenticated } = usePrivy();

  if (!ready) {
    return <Loading />;
  }

  // If the user is authenticated, we'll let the ClientProvider handle the redirect
  if (authenticated) {
    return <div>Redirecting...</div>;
  }

  return (
    <main>
      <Navbar locale={locale} />
      <Header locale={locale} />
    </main>
  );
}
