import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/login";
import ListingComp from "../components/ListingComp";
import ProfileModelComp from "../components/ProfileModalComp";

export default function Home() {
  return (
    <>
      <Login />;
      <ListingComp />
      <ProfileModelComp />
    </>
  );
}
