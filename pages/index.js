import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "./Login";
import ListingComp from "./ListingComp";
import ProfileModelComp from "./ProfileModalComp";

export default function Home() {
  return (
    <>
      <Login />;
    </>
  );
}
