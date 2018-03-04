import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Application, Handler } from "express";
import Main from "../../../app/Main";
import { IStaticContext } from "./interfaces";
import assetManifest from "./manifest.json";

const SSRHandler: Handler = (req, res, next) => {
  const context: IStaticContext = {};

  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Main />
    </StaticRouter>
  );

  if (context.url) {
    console.log(context);
    res.redirect(context.status || 301, context.url);
  } else {
    const html = `
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>

      <body>
        <div id="root">${markup}</div>

        ${Object.values<string>(assetManifest)
          .map(assetPath => {
            return `<script src="${assetPath}"></script>`;
          })
          .join("\n")}
      </body>

      </html>
    `;
    res.send(html);
  }
};

export default SSRHandler;