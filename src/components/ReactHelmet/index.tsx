import React from "react";
import { Helmet } from "react-helmet";
export interface IReactHelmet {
  _key: string;
}

export const ReactHelmet: React.FC<IReactHelmet> = ({ _key }): JSX.Element => (
  <Helmet>
    {/* @ts-ignore */}
    <meta charset="utf-8" />
    {/* @ts-ignore */}
    <title>Vincent Suho Kang</title>
    {/* @ts-ignore */}
    <meta
      name="description"
      content="I am a software developer who is very passonate about Web Development and Machine Learning"
      data-react-helmet="true"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
  </Helmet>
);
