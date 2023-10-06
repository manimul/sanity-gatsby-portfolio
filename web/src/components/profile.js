import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import NewsFeed from "./news-feed";
import BlockContent from "./block-content";
import YouTubeEmbed from "./youtube-embed";
import Container from "./container";
import RoleList from "./role-list";
import Cta from "./cta";
import ProfilePreviewGrid from "../components/profile-preview-grid";

import styles from "./profile.module.css";

function Profile(props, relatedProfiles) {
  const {
    _rawBody,
    name,
    title,
    categories,
    mainImage,
    publishedAt,
    relatedProfilesList,
    videos
  } = props;
  const profileNodes = relatedProfilesList
    ? mapEdgesToNodes(relatedProfilesList)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <div
      id="profile-page"
      className={"container mx-auto flex flex-wrap pt-4 pb-12 md:pt-8 sm:pt-2"}
    >
      <section id="profile-bio">
        <div className="flex-row w-full py-5 text-center md:text-left ">
          {categories.map(category => (
            <Link to={category.slug.current}>
              <p
                className="w-full md:text-lg font-semibold font-luxia uppercase text-brand-accent"
                key={category._id}
              >
                {category.title}
              </p>
            </Link>
          ))}

          <h1 className="w-full text-2xl md:text-5xl font-luxia">{name}</h1>
          <h2 className="w-full  md:text-lg  opacity-50 font-light ">{title}</h2>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="flex-col md:w-3/5">
            {props.mainImage && mainImage.asset && (
              <div className="w-full ">
                <img
                  src={imageUrlFor(buildImageObj(mainImage))
                    .width(1200)
                    .height(Math.floor((9 / 10) * 1200))
                    .fit("crop")
                    .url()}
                  alt={mainImage.alt}
                />
              </div>
            )}

            <div className={"bg-white text-brand-dark w-full  p-6 md:p-12"}>
              <div id="content">{_rawBody && <BlockContent blocks={_rawBody || []} />}</div>
            </div>
          </div>
          <section
            className={"text-brand-dark w-full md:ml-4 md:w-2/5 py-12 md:py-4 md:px-4  text-white"}
          >
            {/*    {relatedProfilesList && relatedProfilesList.edges.length > 0 && (
              <div>
              
                <ul>
                  {relatedProfilesList.edges.map(relatedProfile => (
                    <li key={relatedProfile.node._id}>{relatedProfile.node.name}</li>
                  ))}
                </ul>
              </div>
            )}
*/}

            {videos && videos.length > 0 && (
              <section className="mb-6">
                {/* <NewsFeed query={title} />*/}

                <h2 className="font-bold md:text-xl text-center md:text-left  mb-6 ">
                  Watch {name} Videos
                </h2>

                {videos.map(video => (
                  <YouTubeEmbed value={video} />
                ))}
              </section>
            )}

            <h2 className="font-bold md:text-xl text-center md:text-left ">
              Explore Related Profiles
            </h2>

            {profileNodes && (
              <ProfilePreviewGrid
                nodes={profileNodes}
                //browseMoreHref="/category/"
                showAmount="3"
                stack="true"
              />
            )}
          </section>
        </div>
      </section>

      {/* <aside className={styles.metaContent}>
      
            
            {categories && categories.length > 0 && (
              <div>
              
              <h3 className={"font-bold my-3 opacity-50 "}>Categories</h3>
                <hr className={"py-1  max-w-2  border-t border-yellow-700"}></hr>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProfiles && relatedProfiles.length > 0 && (
              <div>
                <h3 className={"font-bold my-3 opacity-50 "}>Related Profiles</h3>
                <hr className={"py-1  max-w-2  border-t border-yellow-700"}></hr>
                <ul>
                  {relatedProfiles.map(profile => (
                    <li key={`related_${profile._id}`}>
                      {profile.slug ? (
                        <Link to={`/${profile.slug.current}`}>{profile.name}</Link>
                      ) : (
                        <span>{profile.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>*/}
    </div>
  );
}

export default Profile;
