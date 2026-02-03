import { useEffect } from "react";
import Deals from "../components/Deals";

export default function DealsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Deals />;
}
