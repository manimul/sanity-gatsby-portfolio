import { graphql, StaticQuery } from "gatsby";
import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/layout";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      figure {
        asset {
          url
        }
      }
    }
  }
`;

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);

  ////ADSENSE CODE
  const scrolled = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!scrolled.current) {
        const head = document.head;

        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.setAttribute("data-ad-client", "ca-pub-6925566382959478");
        script.setAttribute("crossorigin", "anonymous");

        head.appendChild(script);

        scrolled.current = true;
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  ///END ADSENSE CODE

  function handleShowNav() {
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          );
        }
        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            siteDescription={data.site.description}
            siteLogo={data.site.figure.asset.url}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
