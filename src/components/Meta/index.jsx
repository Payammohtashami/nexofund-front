import Head from 'next/head';


const Meta = ({ title, description, openGraph, noIndex }) => {

  return (
    <>
      <Head>
        {title ? <title key="title">{title}</title> : ""}
        {description ? <meta key="description" name="description" content={description} /> : ""}
        {openGraph?.type ? <meta key="og:type" name="og:type" content={openGraph?.type} /> : ""}
        {openGraph?.title ? <meta key="og:title" name="og:title" content={openGraph?.title} /> : ""}
        {openGraph?.description ? <meta key="og:description" name="og:description" content={openGraph?.description} /> : ""}
        {openGraph?.url ? <meta key="og:url" name="og:url" content={openGraph?.url} /> : ""}
        {openGraph?.image ? <meta key="og:image" name="og:image" content={openGraph?.image} /> : ""}
        {noIndex ? <meta name="robots" content="noindex" /> : ""}
      </Head>
    </>
  );
};

export default Meta;
