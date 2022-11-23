import React from "react"
import { ReactElement } from "react"

import Link from "@docusaurus/Link"

import styles from "./styles.module.scss"

interface Question {
  title: string
  description: ReactElement
}

const data: Question[] = [
  {
    title: "How Fast Is A Pcoin Transaction?",
    description:
      "Pcoin transactions are incredibly fast. Watch payments remit in < 1 second, with full ability to spend/use those funds after 6 confirmations (~ 6 minutes).",
  },
  {
    title: "How Low Are The Network Fees For Pcoin?",
    description:
      "Pcoin has consistently had some of the lowest transaction fees in the industry (typical sends “cost” the sender < 0.003 Pcoin (< $0.01) per transaction. Remember, these fees are burnt from the total coin supply, thus reducing inflation assisting in stabilizing the coin value.",
  },
  {
    title: "Why do you even have a “Governance”?",
    description:
      "We feel that if you are your own bank, you should have a choice in what direction the bank goes. Voting in our DAO/Governance can be making important changes or trivial ones just like in real life.",
  },
  {
    title: "What is Staking?",
    description:
      "Staking is the process of locking your coins for any time period set by you in order to help the network achieve consensus of proof of stake by validating every transaction that occurs on the network to be written permanently to the blockchain. In return stakers that mint the next block are rewarded a block reward.",
  },
]

const Question = ({ title, description }: Question) => {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data[0] && <Question {...data[0]} />}
            {data[1] && <Question {...data[1]} />}
          </div>

          <div className="col col--6">
            {data[2] && <Question {...data[2]} />}
            {data[3] && <Question {...data[3]} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
