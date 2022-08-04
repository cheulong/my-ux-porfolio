import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import profile from "../../assets/profile.jpg";
import wireframe1 from "../../assets/1wireframe.png";
import wireframe2 from "../../assets/1wireframe2.png";
import wireframe3 from "../../assets/1wireframe3.png";
import wireframe4 from "../../assets/1wireframe4.png";
import wireframe22 from "../../assets/2wireframe2.png";
import wireframe23 from "../../assets/2wireframe3.png";
import wireframe24 from "../../assets/2wireframe4.png";

import Image from "next/image";
const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const style = {
    color: router.asPath === "/about" ? "lightblue" : "white",
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logo}>Long.</div>
          <div className={styles.menu}>
            <Link href={"/"}>
              <a>work</a>
            </Link>
            <Link href={"/about"}>
              <a style={style}>about</a>
            </Link>
          </div>
        </div>
        <div>
          {id === "1" ? (
            <div className={styles.wrapper2}>
              <h1>Shelter organization</h1>
              <p>
                Shelter organization is a organization that build house for poor
                people. I am so proud to have opportunity to design the website
                for them.
              </p>
              <br />
              <p>
                {" "}
                <b>Role:</b> UI designer
              </p>
              <p>
                {" "}
                <b>Project goal:</b> The purpose of this website is to allow
                people who want to donate and volunteer to build house.
              </p>
              <p>
                {" "}
                <b>Target audience:</b> People want to donate
              </p>
              <p>
                <b>Key challenges:</b> There are many kind of people that visit
                the site{" "}
              </p>
              <p>
                <b>
                  <u>Wireframes</u>
                </b>
              </p>
              <div style={{ width: "70vw" }}>
                <Image src={wireframe1} layout={"responsive"} alt="" />
              </div>

              <Image src={wireframe2} layout={"responsive"} alt="" />
              <p>
                <b>
                  <u>User testing</u>
                </b>
              </p>
              <Image src={wireframe4} layout={"responsive"} alt="" />

              <p>
                <b>
                  <u>Mockups</u>
                </b>
              </p>
              <Image src={wireframe3} layout={"responsive"} alt="" />
              <p>Next:</p>
              <p>
                Conduct another round of usability studies to validate whether
                the pain points users experienced have been effectively
                addressed.
              </p>
            </div>
          ) : (
            <div className={styles.wrapper2}>
              <h1>Umai Food</h1>
              <p>
                Umai food is food order app. I am so proud to have opportunity
                to design the website for them.
              </p>
              <br />
              <p>
                {" "}
                <b>Role:</b> UI designer
              </p>
              <p>
                {" "}
                <b>Project goal:</b> The purpose of this app is to allow user to
                order food online.
              </p>
              <p>
                {" "}
                <b>Target audience:</b> People want to order food online
              </p>
              <p>
                <b>Key challenges:</b> There are many kind of people that use
                the app.
              </p>
              <p>
                <b>
                  <u>Wireframes</u>
                </b>
              </p>
              <div style={{ width: "70vw" }}>
                <Image src={wireframe22} layout={"responsive"} alt="" />
              </div>

              <p>
                <b>
                  <u>User testing</u>
                </b>
              </p>
              <Image src={wireframe4} layout={"responsive"} alt="" />

              <p>
                <b>
                  <u>Mockups</u>
                </b>
              </p>
              <Image src={wireframe23} layout={"responsive"} alt="" />
              <Image src={wireframe24} layout={"responsive"} alt="" />
              <p>Next:</p>
              <p>
                Conduct another round of usability studies to validate whether
                the pain points users experienced have been effectively
                addressed.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>searcheulong@gmail.com</footer>
    </div>
  );
};

export default Project;
