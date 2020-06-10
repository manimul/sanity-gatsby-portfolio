import React from 'react'
import {graphql} from 'gatsby'
import Container from './container'
import GraphQLErrorList from './graphql-error-list'
import ProfilePreviewGrid from './profile-preview-grid'
import Cta from './cta'
import SEO from './seo'
import Layout from './layout'
import Hero from './hero'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from './typography.module.css'


function CategoryPageBlock (props) {
    return (
        <div>
        <Hero
            {...props}
            title={props.title}
            subtitle={props.subtitle}
            description={props.description}
            image={props.image}
            prefix={"Ghana's"}
            

            />
            <div id="content_intro" className="pt-12">

            {props.nodes && props.nodes.length > 0 
            ? <ProfilePreviewGrid {...props} nodes={props.nodes} catView='true' /> 
            : <p className="my-32 text-center text-2xl">No profiles added yet</p>
        }
        <Cta></Cta>
        </div>
        </div>
        )

}

CategoryPageBlock .defaultProps = {
    title: '',
    subtitle: 'backup',
    description: 'holder description',
    nodes: [],

  }

export default CategoryPageBlock
