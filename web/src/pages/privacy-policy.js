import React from "react";

import Layout from "../containers/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import { responsiveTitle1 } from "../components/typography.module.css";

const PrivacyPolicy = props => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <Container>
        <h1 className={responsiveTitle1}>Privacy Policy for Who's Who in Ghana</h1>

        <section className="flex flex-col space-y-4 text-xl">
          <p>Last updated: 18-10-2023</p>

          <h2 className="font-bold mt-4 ">Information Collection and Use</h2>
          <p className="">
            "Who's Who in Ghana" is the sole owner of the information collected on this site. We
            only have access to/collect information that you voluntarily give us via email or other
            direct contacts from you. We will not sell or rent this information to anyone.
          </p>

          <h2 className="font-bold mt-4 ">Analytics</h2>
          <p>
            We use third-party Service Providers, such as Google Analytics, to monitor and analyze
            the use of our website. Google Analytics is a web analytics service offered by Google
            that tracks and reports website traffic. Google uses the data collected to track and
            monitor the use of our Service. This data is shared with other Google services. For more
            information on the privacy practices of Google, please visit the Google Privacy & Terms
            web page:
            <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
          </p>

          <h2 className="font-bold mt-4 ">Your Access to and Control Over Information</h2>
          <p>
            You may opt out of any future contacts from us at any time. You can do the following at
            any time by contacting us via the email address or phone number provided on our website:
            <ul>
              <li>See what data we have about you, if any.</li>
              <li>Change/correct any data we have about you.</li>
              <li>Express any concern you have about our use of your data.</li>
            </ul>
          </p>

          <h2 className="font-bold mt-4 ">Security</h2>
          <p>
            We take precautions to protect your information. When you submit sensitive information
            via the website, your information is protected both online and offline. Wherever we
            collect sensitive information, that information is encrypted and transmitted to us in a
            secure way.
          </p>

          <h2 className="font-bold mt-4 ">Updates</h2>
          <p>
            Our Privacy Policy may change from time to time, and all updates will be posted on this
            page.
          </p>

          <h2 className="font-bold mt-4 ">Contact Us</h2>
          <p>
            If you feel that we are not abiding by this privacy policy, you should contact us
            immediately via <a href="mailto:hello@whoswhoghana.com">hello@whoswhoghana.com</a>.
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default PrivacyPolicy;
