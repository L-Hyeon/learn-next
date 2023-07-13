"use client";

import React, { FormEvent, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

type Props = {};

const page = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const write = async (e: FormEvent) => {
    console.log(title, content);

    await axios
      .post("http://localhost:3000/api/article", {
        title: title,
        content: content,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("등록 완료!");
        } else {
          alert("실패...");
        }
      });
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={write}>
        <label>Title: </label>
        <input
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Content: </label>
        <textarea
          className={styles.content}
          name="conent"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <input type="submit" value="등록하기" className={styles.submit} />
      </form>
    </main>
  );
};

export default page;
