import { ThemeProvider } from "@emotion/react";
import { AnolisProvider } from "anolis-ui";
import App from "components/App";
import CardStories from "components/CardStories";
import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import Head from "next/head";
import { FC, Fragment } from "react";
import { theme } from "theme";
import { customXstyledTheme } from "theme/xstyled";

const Index: FC = () => {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
        <title>React Fun</title>
      </Head>
      <ThemeProvider theme={customXstyledTheme}>
        <AnolisProvider theme={theme}>
          <App>
            <Header></Header>
            <Hero></Hero>
            <CardStories></CardStories>
            <Footer></Footer>
          </App>
        </AnolisProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default Index;
