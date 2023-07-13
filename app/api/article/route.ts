import db from "@/util/db";
import { Article } from "@/util/types";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  console.log("GET Article");

  try {
    const articles: Article[] = await (
      await db
    ).all("select id, title, content from article");
    console.log(articles);
    return NextResponse.json(articles, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  console.log("POST Article");

  const post = await req.json();
  try {
    console.log(post["title"], post["content"]);
    console.log(
      `INSERT into article (title, content) values ('${post["title"]}', '${post["content"]}'))`
    );
    await (
      await db
    ).all(
      `INSERT into article (title, content) values ('${post["title"]}', '${post["content"]}')`
    );
    return NextResponse.json("OK", { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};
