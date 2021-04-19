import React, { useState } from "react"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Container } from "./styled.js"

import "react-tabs/style/react-tabs.css"

// Backend //
import DockerLogo from "../../images/techIcons/docker.svg"
import GoIcon from "../../images/techIcons/golang.svg"
import NodeIcon from "../../images/techIcons/nodejs.svg"
import PythonIcon from "../../images/techIcons/python.svg"
import ServerlessIcon from "../../images/techIcons/serverless.svg"
// Frontend //
import ReaIcon from "../../images/techIcons/rea.svg"
import FlutterIcon from "../../images/techIcons/flutter.svg"
import TsIcon from "../../images/techIcons/typescript.svg"
import ReduxLogo from "../../images/techIcons/redux.svg"
import JavascriptLogo from "../../images/techIcons/javascript.svg"
import DartLogo from "../../images/techIcons/dart.svg"
import UnityLogo from "../../images/techIcons/unity.svg"
import AndroidLogo from "../../images/techIcons/android.svg"
import AppleLogo from "../../images/techIcons/apple.svg"
// Databases //
import FireBaseIcon from "../../images/techIcons/firebase.svg"
import ReThinkLogo from "../../images/techIcons/rethinkdb.svg"
import MongoDbIcon from "../../images/techIcons/mongodb.svg"
import SqlIcon from "../../images/techIcons/mysql.svg"
import RedisLogo from "../../images/techIcons/redis.svg"
import Dynamo from "../../images/techIcons/dynamodb.svg"
// Cloud Providers //
import VercelLogo from "../../images/techIcons/vercel.svg"
import NetlifyLogo from "../../images/techIcons/netlify.svg"
import AwsLogo from "../../images/techIcons/aws.svg"
import AzureLogo from "../../images/techIcons/azure.svg"
import DigitalLogo from "../../images/techIcons/digitalocean.svg"
import LinodeLogo from "../../images/techIcons/linode.svg"

const tabs = ["Backend", "Frontend", "Databases", "Cloud Providers"]

function TechStacks() {
  const [positionBar, setPositionBar] = useState(0)

  return (
    <Container positionbar={positionBar}>
      <h1>Tech Stacks</h1>
      <Tabs>
        <TabList>
          {tabs.map((tab, i) => {
            return (
              <Tab
                onClick={e => {
                  console.log(e.clientY)
                  setPositionBar(i)
                }}
              >
                {tab}
              </Tab>
            )
          })}
          <hr />
        </TabList>
        <TabPanel> 
          {/* Backend */}
          <div className="logo">
            <DockerLogo className="img-logo"/>
          </div>
          <div className="logo">
            <GoIcon className="medium-svg" />
          </div>
          <div className="logo">
            <NodeIcon className="img-logo" />
          </div>
          <div className="logo">
            <PythonIcon className="img-logo" />
          </div>
          <div className="logo">
            <ServerlessIcon className="img-logo" />
          </div>
        </TabPanel>
        <TabPanel>
          {/* FrontEnd */}
          <div className="logo-f">
            <ReaIcon className="img-logo-f" />
          </div>
          <div className="logo-f">
            <FlutterIcon className="img-logo-f" />
          </div>
          <div className="logo-f">
            <TsIcon className="img-logo-f" />
          </div>
          <div className="logo-f">
            <ReduxLogo className="img-logo-f" />
          </div>
          <div className="logo-f">
            <JavascriptLogo className="img-logo-f" />
          </div>
          <div className="logo-f">
            <DartLogo className="medium-svg" />
          </div>
          <div className="logo-f">
            <UnityLogo className="img-logo-f" />
          </div>
          <div className="logo-f">
            <AndroidLogo className="img-logo-f" />
          </div>
          <div className="logo-f">
            <AppleLogo className="img-logo-f" />
          </div>
        </TabPanel>
        <TabPanel>
          {/* DataBases */}
          <div className="logo">
            <FireBaseIcon className="small-svg" />
          </div>
          <div className="logo">
            <ReThinkLogo className="large-svg" />
          </div>
          <div className="logo">
            <MongoDbIcon className="large-svg" />
          </div>
          <div className="logo">
            <RedisLogo className="small-svg" />
          </div>
          <div className="logo">
            <Dynamo className="small-svg" />
          </div>
        </TabPanel>
        <TabPanel>
          {/* Cloud Providers */}
          <div className="logo">
            <VercelLogo className="medium-svg" />
          </div>
          <div className="logo">
            <NetlifyLogo className="small-svg" />
          </div>
          <div className="logo">
            <AwsLogo className="img-logo" />
          </div>
          <div className="logo">
            <AzureLogo className="small-svg" />
          </div>
          <div className="logo">
            <DigitalLogo className="img-logo" />
          </div>
          <div className="logo">
            <LinodeLogo className="medium-svg" />
          </div>
        </TabPanel>
      </Tabs>
    </Container>
  )
}

export default TechStacks
