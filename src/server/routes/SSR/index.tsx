import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Application, Handler } from "express";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "./react-loadable.json";
import config from "config";

import Main from "../../../app/Main";
import { IStaticContext } from "./interfaces";

const assets: string[] = JSON.parse(CLIENT_ASSETS);

const SSRHandler: Handler = (req, res, next) => {
  const context: IStaticContext = {};
  const modules: string[] = [];

  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Main />
      </Loadable.Capture>
    </StaticRouter>
  );

  // this may not be needed
  const bundles: { file: string }[] = getBundles(stats, modules);

  if (context.url) {
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
        
        ${
          /* this may be not needed */ bundles
            .map(bundle => {
              return `<script src="${config.get("publicPath")}${
                bundle.file
              }"></script>`;
            })
            .join("\n")
        }

        ${assets
          .map(assetPath => {
            return `<script src="${assetPath}"></script>\n`;
          })
          .join("\n")}
      </body>

      </html>
    `;
    res.send(html);
  }
};

export default SSRHandler;
