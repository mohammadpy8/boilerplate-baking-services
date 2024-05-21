import type { FC } from "react";
import { sendPost } from "./actions/sendPost";
import React from "react";

export const revalidate = 10;

const HomePage: FC = () => {

  return (
    <form action={sendPost} >
      <input type="text" name="username" />
      <br />
      <input type="text" name="password" />
      <button type="submit">send</button>
    </form>
  );
};

export default HomePage;
