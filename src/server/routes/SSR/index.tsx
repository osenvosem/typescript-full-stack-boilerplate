import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Application, Handler } from "express";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "./react-loadable.json";
import config from "config";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";

import Main from "../../../common/Root";
import { TStaticContext } from "./types";
import configureStore from "../../../common/configureStore";
import todoAppSaga from "../../../common/Root/screens/TodoApp/sagas";

const assets: string[] = JSON.parse(CLIENT_ASSETS).filter((asset: string) =>
  /.js$/.test(asset)
);

const SSRHandler: Handler = (req, res, next) => {
  const context: TStaticContext = {};
  const modules: string[] = [];
  const store = configureStore();
  const sheet = new ServerStyleSheet();

  const rootComp = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <Main />
        </Loadable.Capture>
      </StaticRouter>
    </Provider>
  );

  // this may not be needed
  const bundles: { file: string }[] = getBundles(stats, modules);

  if (context.url) {
    res.redirect(context.status || 301, context.url);
  } else {
    store.runSaga(todoAppSaga).done.then(() => {
      const html = `
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Your awesome app</title>
        ${sheet.getStyleTags()}
        </head>
        
        <body>
          <div id="root">${renderToString(rootComp)}</div>
        
          <script>window.__INITIAL_STATE__ = ${JSON.stringify(
            store.getState()
          )}</script>
          <!-- React Loadable bundles
          ${bundles
            .map(bundle => {
              return `<script src="${config.get("publicPath")}${
                bundle.file
              }"></script>`;
            })
            .join("\n")}
            -->
          ${assets
            .map(assetPath => {
              return `<script src="${assetPath}"></script>\n`;
            })
            .join("\n")}
        </body>
      </html>
    `;
      res.send(html);
    });
    renderToString(sheet.collectStyles(rootComp));
    store.close();
  }
};

export default SSRHandler;
