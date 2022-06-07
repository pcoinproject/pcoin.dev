import React from "react"

import clsx from "clsx"

import Headline from "@site/src/components/Headline"

import styles from "./styles.module.scss"

interface Feature {
  title: string
  description: string
}

const data: Feature[] = [
  {
    title: "Zero-Knowledge Proofs",
    description:
      "zk-SNARKs based financial data protection protocol on a Proof of Stake blockchain",
  },
  {
    title: "Advanced Proof of Stake",
    description:
      "Receive rewards for securing the Pcoin network just by holding coins in your wallet.",
  },
  {
    title: "Cold Staking",
    description:
      "Receive staking rewards while your funds are securely locked in offline cold storage.",
  },
  {
    title: "Decentralized Governance",
    description: "Submit and vote on project proposals, budgets, and expenses.",
  },
  {
    title: "Sustainable Economics",
    description:
      "Long term balance between inflation and deflation; engineered to be scalable.",
  },
  {
    title: "Masternodes",
    description:
      "Pcoin Masternodes provide additional nodes to validate blocks and transactions, adding to the distributed security of the network.",
  },
]

const Feature = ({ title, description }: Feature) => {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <Headline category="Features" title="Why Pcoin ?" offset={1} />

        <div className="row">
          {data.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
