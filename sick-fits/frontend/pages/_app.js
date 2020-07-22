import Page from "../components/Page";

//The Component prop is the active page, so whenever you navigate between routes,
//Component will change to the new page. Therefore, any props you send to Component
//will be received by the page.
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Page>
        <Component {...pageProps} />
      </Page>
    </div>
  );
}

export default MyApp;
