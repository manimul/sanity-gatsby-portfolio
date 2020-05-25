import React from 'react'
import {graphql} from 'gatsby'
import Container from './container'
import GraphQLErrorList from './graphql-error-list'
import ProjectPreviewGrid from './project-preview-grid'
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

            />
        <ProjectPreviewGrid
        {...props}
        nodes={props.nodes}
        />
        <Cta></Cta>
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
