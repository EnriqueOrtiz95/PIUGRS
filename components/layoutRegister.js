import Head from "next/head";

const LayoutRegister = ({ children, title = "", description = "" }) => {
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

export default LayoutRegister;