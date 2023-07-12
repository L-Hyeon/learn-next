import { Article } from "@/util/types";
import React from "react";
import styles from "./page.module.css";
import db from "@/util/db";

type Props = {};

async function page({}: Props) {
  const articles: Article[] = await (await db).all("select * from article");
  // console.log(articles);

  return (
    <main>
      hello there?
      <ul className={styles.list}>
        {articles.map((e: Article) => {
          return (
            <li className={"styles.list-item"}>
              <span>#{e.id}</span>
              <span>{e.title}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default page;
