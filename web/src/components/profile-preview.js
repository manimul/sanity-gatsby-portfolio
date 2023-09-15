import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

import styles from "./profile-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProfilePreview(props) {
  let slug = props.categories[0].slug.current + `/` + props.slug.current;

  return (
    <Link to={`/${slug}`}>
      <div
        className={
          " flex  transition duration-100 ease-in-out  hover:-translate-y-1 transform hover:scale-105 rounded overflow-hidden shadow bg-brand " +
          (props.stack ? "flex-col p-2" : " flex-col")
        }
      >
        {props.categories[0].title && !props.stack && (
          <div
            className={
              "px-4 py-1 bg-brand-lighter text-center " + (props.catView ? "hidden" : "block")
            }
          >
            <p className={"text-xs  md:text-base font-luxia uppercase tracking-wide "}>
              {props.categories[0].title}
            </p>
          </div>
        )}
        {props.mainImage && props.mainImage.asset && (
          <div className={props.stack ? "  w-full " : " w-full"}>
            <img
              className={
                " opacity-75 hover:opacity-100 w-full" +
                (props.stack ? " rounded-none" : "rounded-none ")
              }
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(300)
                .height(Math.floor((9 / 16) * 350))
                .url()}
              alt={props.mainImage.alt}
            />
          </div>
        )}

        <div
          className={
            props.stack ? "w-full text-center px-4 py-4 " : " w-full text-center px-4 py-4 "
          }
        >
          <h3
            className={
              "text-sm  font-serif md:tracking-wide " +
              (props.stack ? "md:text-base" : " md:text-base")
            }
          >
            {props.name}
          </h3>

          <div
            className={
              "hidden md:block text-sm  opacity-50 uppercase font-semibold italic" +
              (props.stack ? "md:text-base " : " md:text-sm")
            }
          >
            {props.title}{" "}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProfilePreview;
