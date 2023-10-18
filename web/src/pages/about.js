import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProfilePreviewGrid from "../components/profile-preview-grid";
import SEO from "../components/seo";
import BlockContent from "../components/block-content";

import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query AboutPageQuery {
    sanityPage(slug: { current: { eq: "about" } }) {
      title
      _rawBody
    }
  }
`;

const AboutPage = props => {
  const { data, errors } = props;
  const { title, _rawBody } = data.sanityPage;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <h1 className={responsiveTitle1}>{title}</h1>
        <pre>{JSON.stringify(data.title, null, 2)}</pre>
        <div className="text-xl" id="content ">
          {_rawBody && <BlockContent blocks={_rawBody || []} />}
        </div>
      </Container>
    </Layout>
  );
};

export default AboutPage;
