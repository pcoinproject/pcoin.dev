import React from "react"

import Download from "@site/src/components/Download"
import Layout from "@theme/Layout"

import styles from "./styles.module.scss"

const Downloadpg = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <Download />
      </main>
    </Layout>
  )
}

export default Downloadpg
