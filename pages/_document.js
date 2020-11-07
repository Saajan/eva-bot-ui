import React, {useState} from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            href={require("assets/img/brand/favicon.ico")}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
          <script
            crossOrigin="anonymous"
            src="https://cdn.botframework.com/botframework-webchat/latest/webchat.js"
          ></script>
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          <script src="/js/webchat.js"></script>
        </body>
      </html>
    );
  }
}

export default MyDocument;
