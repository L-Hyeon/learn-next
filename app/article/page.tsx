import { Article } from "@/util/types";
import React from "react";
import styles from "./page.module.css";
import Button from "./Button";
import axios from "axios";

type Props = {};

async function page({}: Props) {
  const articles: Article[] = await axios
    .get("http://localhost:3000/api/article")
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        return res.data;
      } else {
        return [];
      }
    });

  return (
    <main>
      Article List
      <ul className={styles.list}>
        {articles.map((e: Article) => {
          return (
            <li className={styles.listitem}>
              <span>#{e.id}</span>
              <span>{e.title}</span>
            </li>
          );
        })}
      </ul>
      <Button />
    </main>
  );
}

export default page;
