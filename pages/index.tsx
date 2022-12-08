// import {Example} from '@jneander/x-throwaway-vanilla-extract-ui'

import styles from '../styles/Home.module.css'

import {anotherClass} from './styles.css'

// With the dev server running and the page loaded in a browser, uncomment the code.
// > The page updates with the appropriate huge text.
// Refresh the page.
// > The page errors out.
//
// Server Error
// Error: Styles were unable to be assigned to a file. This is generally caused by one of the following:
//
// - You may have created styles outside of a '.css.ts' context
// - You may have incorrect configuration. See https://vanilla-extract.style/documentation/getting-started
//

export default function Home() {
  return (
    <div className={styles.container + ' ' + anotherClass}>
      <h1>Hey</h1>
      {/* <Example>Ho!</Example> */}
    </div>
  )
}

export function getServerSideProps() {
  return {
    props: {
      foo: true,
    },
  }
}
