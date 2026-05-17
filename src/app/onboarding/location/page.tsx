import type { Metadata } from "next";
import LocationSetup from "./LocationSetup";

export const metadata: Metadata = {
  title: "Omile — Set your location",
};

export default function LocationPage() {
  return <LocationSetup />;
}
