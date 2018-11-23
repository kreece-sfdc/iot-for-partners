# SFDX  App

## Before Deploy
Open newly created Scratch Org and Enable IoT (Setup --> Quick Find "IoT" --> Get Started and "Enable Salesforce IoT" and "Enable IoT Insights").

## Deploy
sfdx force:source:push

## After Deploy
Enable Sensor Context (Setup --> Quick Find "IoT" --> Contexts --> Open "Sensor Context" --> Edit --> Activate)

Due to an unknown error, please clone the deployed orchestration!

Clone Sensor Orchestration (Setup --> Quick Find "IoT" --> Contexts --> Edit "Sensor Orchestration" --> Save As) then Save and Activate the new Orchestration.

Create an Asset (plus Account and Contact) and then navigate to the Detail Page.  Edit Page, select IoT Insight Component and change Orchestration to the new Orchestration then Activate the Page

## Dev, Build and Test


## Resources


## Description of Files and Directories


## Issues


