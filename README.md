# SVES Placement Portal

SVES Placement Gateway is a platform which mainly focuses on automating the training and placement process for all the colleges within the society. When conducted manually, this process involves tedious paperwork and is also likely to have some inconsistency and ambiguity on the operations. This project automates the process of collecting student information, notifying the students about the ongoing events(placement drive/internship/competitions) via email and SMS to accessing and tracking of placement records by TPO, thus providing a better understanding of the performance of a student. TPO can keep track of the student’s performance, post various kinds of events, job notifications and so on. Students can apply for any placement drive based on their skillset and preferences. Also, they can keep track of the various hackathons, competitions and internships of their choice of interest. The technology stack used is M*EAN stack abbreviating to be MySQL,  Express,Angular6,NodeJS,D3(DataDrivenDocuments).

## Installation

### M*EAN Stack
  
* ### MySQL
Database System
* ### Express
Back-End web Framework
* ### Angular 
Front-End Framework
* ### NodeJS
Back-End Runtime Environment

### Setup 

  * Node and npm installation [Link](https://www.npmjs.com/get-npm)

  * Mysql installation [Link](https://overiq.com/installing-mysql-windows-linux-and-mac/)
  
  * Dump Database
  
    `mysql -u root -p sves_db < sves_db.sql`

  * Update `env.js` file 
  
  * Client - Setup
 
    `cd client`

    `npm install`

    `ng serve --host localhost --disable-host-check`

  * Server - Setup

    `cd server`

    `npm install`

    `npm run dev`
    
