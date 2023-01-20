import Head from "next/head";

const LayoutAux = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`PIUGRS - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      {children} 
    </>
  );
};

export default LayoutAux;