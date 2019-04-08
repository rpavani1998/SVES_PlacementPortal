-- MySQL dump 10.13  Distrib 8.0.13, for osx10.14 (x86_64)
--
-- Host: localhost    Database: sves_db
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `branches` (
  `id` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `branch_name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branches`
--

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;
INSERT INTO `branches` VALUES ('CSE','Computer Science Engineering'),('ECE','Electronics and Communications Engineering'),('EEE','Electrical and Electronics Engineering'),('IT','Information Technology');
/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colleges`
--

DROP TABLE IF EXISTS `colleges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `colleges` (
  `id` varchar(6) NOT NULL,
  `college_name` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colleges`
--

LOCK TABLES `colleges` WRITE;
/*!40000 ALTER TABLE `colleges` DISABLE KEYS */;
INSERT INTO `colleges` VALUES ('BVRW','BVRIT Hyderabad College of Engineering for Women');
/*!40000 ALTER TABLE `colleges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `companies` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `profile_description` text,
  `establish_date` date DEFAULT NULL,
  `company_website_url` varchar(255) DEFAULT NULL,
  `company_image` blob,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Xoriant','Product Engineering Company',NULL,'www.xoriant.com',NULL),(2,'IBM','Product Company',NULL,'www.ibm.com',NULL),(3,'State Street','Banking Company',NULL,'www.statestreet.com',NULL),(4,'TCS','Service Company',NULL,'www.tcs.com',NULL),(5,'Google','Marketing',NULL,'www.google.com',NULL);
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education_details`
--

DROP TABLE IF EXISTS `education_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `education_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roll_no` varchar(10) NOT NULL,
  `certificate_degree_name` varchar(100) NOT NULL,
  `major` varchar(100) NOT NULL,
  `institute_university_name` varchar(100) DEFAULT NULL,
  `board` varchar(100) DEFAULT NULL,
  `passing_year` int(4) DEFAULT NULL,
  `percentage` decimal(5,2) DEFAULT NULL,
  `cgpa` decimal(2,1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `education_details_ibfk_1` (`roll_no`),
  CONSTRAINT `education_details_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profiles` (`roll_no`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_details`
--

LOCK TABLES `education_details` WRITE;
/*!40000 ALTER TABLE `education_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `education_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience_details`
--

DROP TABLE IF EXISTS `experience_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `experience_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roll_no` varchar(10) NOT NULL,
  `is_current_job` char(1) DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `job_title` varchar(50) DEFAULT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `job_location_city` varchar(50) DEFAULT NULL,
  `description` text,
  `proof_document` blob,
  PRIMARY KEY (`id`),
  KEY `experience_details_ibfk_1` (`roll_no`),
  CONSTRAINT `experience_details_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profiles` (`roll_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience_details`
--

LOCK TABLES `experience_details` WRITE;
/*!40000 ALTER TABLE `experience_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `experience_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `files` (
  `id` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `data` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_post_activities`
--

DROP TABLE IF EXISTS `job_post_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_post_activities` (
  `roll_no` varchar(10) NOT NULL,
  `job_post_id` int(11) NOT NULL,
  `apply_date` date DEFAULT NULL,
  PRIMARY KEY (`roll_no`,`job_post_id`),
  KEY `job_post_id` (`job_post_id`),
  CONSTRAINT `job_post_activities_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profiles` (`roll_no`),
  CONSTRAINT `job_post_activities_ibfk_2` FOREIGN KEY (`job_post_id`) REFERENCES `job_posts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_post_activities`
--

LOCK TABLES `job_post_activities` WRITE;
/*!40000 ALTER TABLE `job_post_activities` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_post_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_posts`
--

DROP TABLE IF EXISTS `job_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_posts` (
  `id` int(11) NOT NULL,
  `job_type` int(11) DEFAULT NULL,
  `job_profile` varchar(50) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `job_description` text,
  `job_location` varchar(50) DEFAULT NULL,
  `is_active` char(1) DEFAULT NULL,
  `last_date_for_application` date DEFAULT NULL,
  `salary_lpa` int(11) DEFAULT NULL,
  `related_document` blob,
  `drive_location` varchar(50) DEFAULT NULL,
  `ppt_talk` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `job_type` (`job_type`),
  CONSTRAINT `job_posts_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`),
  CONSTRAINT `job_posts_ibfk_2` FOREIGN KEY (`job_type`) REFERENCES `job_types` (`job_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_posts`
--

LOCK TABLES `job_posts` WRITE;
/*!40000 ALTER TABLE `job_posts` DISABLE KEYS */;
INSERT INTO `job_posts` VALUES (1,3,'MEAN Developer',1,NULL,'MEAN ','Pune','1','2019-12-31',450000,NULL,'Pune','2019-12-31'),(2,3,'MEAN Developer',3,NULL,'Machine Learning','Pune','1','2019-12-31',500000,NULL,'BVRITH','2019-12-30'),(3,2,'Intern developer',4,NULL,'REACT JS','Hyderabad','1','2019-12-30',10000,NULL,'BVRITH','2019-12-31');
/*!40000 ALTER TABLE `job_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_processes`
--

DROP TABLE IF EXISTS `job_processes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_processes` (
  `id` int(11) NOT NULL,
  `job_post_id` int(11) DEFAULT NULL,
  `job_stage_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `job_post_id` (`job_post_id`),
  KEY `job_stage_id` (`job_stage_id`),
  CONSTRAINT `job_processes_ibfk_1` FOREIGN KEY (`job_post_id`) REFERENCES `job_posts` (`id`),
  CONSTRAINT `job_processes_ibfk_2` FOREIGN KEY (`job_stage_id`) REFERENCES `job_stage` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_processes`
--

LOCK TABLES `job_processes` WRITE;
/*!40000 ALTER TABLE `job_processes` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_processes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_stages`
--

DROP TABLE IF EXISTS `job_stages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_stages` (
  `id` int(11) NOT NULL,
  `stage_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_stages`
--

LOCK TABLES `job_stages` WRITE;
/*!40000 ALTER TABLE `job_stages` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_stages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_types`
--

DROP TABLE IF EXISTS `job_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_types` (
  `job_type_id` int(11) NOT NULL,
  `job_type_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`job_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_types`
--

LOCK TABLES `job_types` WRITE;
/*!40000 ALTER TABLE `job_types` DISABLE KEYS */;
INSERT INTO `job_types` VALUES (1,'Mentorship'),(2,'Internship'),(3,'Job'),(4,'Convertable');
/*!40000 ALTER TABLE `job_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill_set`
--

DROP TABLE IF EXISTS `skill_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `skill_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_set_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_set`
--

LOCK TABLES `skill_set` WRITE;
/*!40000 ALTER TABLE `skill_set` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_job_applications`
--

DROP TABLE IF EXISTS `student_job_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_job_applications` (
  `roll_no` varchar(10) NOT NULL,
  `job_process_id` int(11) NOT NULL,
  `is_qualified` char(1) DEFAULT NULL,
  PRIMARY KEY (`roll_no`,`job_process_id`),
  KEY `job_process_id` (`job_process_id`),
  CONSTRAINT `student_job_applications_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profiles` (`roll_no`),
  CONSTRAINT `student_job_applications_ibfk_2` FOREIGN KEY (`job_process_id`) REFERENCES `job_process` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_job_applications`
--

LOCK TABLES `student_job_applications` WRITE;
/*!40000 ALTER TABLE `student_job_applications` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_job_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_profiles`
--

DROP TABLE IF EXISTS `student_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_profiles` (
  `roll_no` varchar(10) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `branch` varchar(6) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `backlogs` varchar(50) DEFAULT NULL,
  `aadhar_no` varchar(15) DEFAULT NULL,
  `pan_no` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`roll_no`),
  CONSTRAINT `student_profiles_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `user_accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_profiles`
--

LOCK TABLES `student_profiles` WRITE;
/*!40000 ALTER TABLE `student_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_skill_sets`
--

DROP TABLE IF EXISTS `student_skill_sets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_skill_sets` (
  `roll_no` varchar(10) NOT NULL,
  `skill_set_id` int(11) NOT NULL,
  `skill_level` int(11) DEFAULT NULL,
  PRIMARY KEY (`roll_no`,`skill_set_id`),
  KEY `skill_set_id` (`skill_set_id`),
  CONSTRAINT `student_skill_sets_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profiles` (`roll_no`),
  CONSTRAINT `student_skill_sets_ibfk_2` FOREIGN KEY (`skill_set_id`) REFERENCES `skill_set` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_skill_sets`
--

LOCK TABLES `student_skill_sets` WRITE;
/*!40000 ALTER TABLE `student_skill_sets` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_skill_sets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_accounts`
--

DROP TABLE IF EXISTS `user_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_accounts` (
  `id` varchar(10) NOT NULL,
  `user_type_id` varchar(6) DEFAULT NULL,
  `college_id` varchar(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` text,
  `contact_number` varchar(10) DEFAULT NULL,
  `sms_notification_active` char(1) DEFAULT NULL,
  `email_notification_active` char(1) DEFAULT NULL,
  `user_image` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_type_id` (`user_type_id`),
  KEY `college_id` (`college_id`),
  CONSTRAINT `user_accounts_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`),
  CONSTRAINT `user_accounts_ibfk_2` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_accounts`
--

LOCK TABLES `user_accounts` WRITE;
/*!40000 ALTER TABLE `user_accounts` DISABLE KEYS */;
INSERT INTO `user_accounts` VALUES ('14wh1a0448','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','','1','1','\r'),('14wh1ao433','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9652927697','1','1','\r'),('157R1A0443','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9848173911','1','1','https://drive.google.com/open?id=1E8ILfmbBW36jzUfm7FV6htEFv5-wlGNd\r'),('15P71A0571','STUD','BVRW','15p71a0571@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7893917918','1','1','https://drive.google.com/open?id=1pBKWh-1qOdmoiEWFJlSgI5wSZxUva4B1\r'),('15WH1A0201','STUD','BVRW','15wh1a0201@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9182834061','1','1','https://drive.google.com/open?id=1soOTBZxlM5UCzRbwdUEg69QSCMZdARK2\r'),('15WH1A0202','STUD','BVRW','15wh1a0202@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515617359','1','1','https://drive.google.com/open?id=1OTm_76xgASLnrA7gbpgCmf19IHe4HkAF\r'),('15WH1A0203','STUD','BVRW','15wh1a0203@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9963919400','1','1','https://drive.google.com/open?id=1maslEM5ilh3L25_8nV2RD98x6FYrf2ft\r'),('15WH1A0204','STUD','BVRW','15wh1a0204@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8997994170','1','1','https://drive.google.com/open?id=1Z6Al4veYhYW-80YLQl5gXNz4cBbszG9W\r'),('15WH1A0205','STUD','BVRW','15wh1a0205@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8143272450','1','1','https://drive.google.com/open?id=1nYgDkElRFhyDAlULcYuD1LCmvhhWCR8-\r'),('15WH1A0206','STUD','BVRW','15wh1a0206@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9603111414','1','1','https://drive.google.com/open?id=18_qIfoFaCCw-hUwxOwCX7wS1REq4SXKh\r'),('15WH1A0207','STUD','BVRW','15wh1a0207@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9603897813','1','1','https://drive.google.com/open?id=17ozsC9OTjxFwZJJrY2FeZr8EOkBoIIuM\r'),('15WH1A0209','STUD','BVRW','15wh1a0209@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8106229159','1','1','https://drive.google.com/open?id=1hN_q3aiaEMPSojGcAcZfdglrUygvSMgM\r'),('15WH1A0210','STUD','BVRW','15wh1a0210@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9948575058','1','1','https://drive.google.com/open?id=1RysPfT-v0bDo-EcWywXnjP872VAR-qej\r'),('15WH1A0211','STUD','BVRW','15wh1a0211@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9701564215','1','1','https://drive.google.com/open?id=1bneBrMv0OEhJOTZ1sOuxzE6F_wXHzbr_\r'),('15WH1A0212','STUD','BVRW','15wh1a0212@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8125170366','1','1','https://drive.google.com/open?id=1le2Cvh-SdKlLk-2Oodm8WnbJzcUEI5Hz\r'),('15WH1A0213','STUD','BVRW','15wh1a0213@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515233244','1','1','https://drive.google.com/open?id=1l2HOa7FcNZtIX8XoMc-Ab4wAdmo0BY8g\r'),('15WH1A0214','STUD','BVRW','15wh1a0214@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9573417826','1','1','https://drive.google.com/open?id=1-3szcWNQ_Diuhdsy3bagCzWjDcKDpPsc\r'),('15WH1A0215','STUD','BVRW','15wh1a0215@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9121793542','1','1','https://drive.google.com/open?id=1w8znaoCXz3VAl98SO-OaXekSJrumBVat\r'),('15WH1A0216','STUD','BVRW','15wh1a0216@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8008957457','1','1','https://drive.google.com/open?id=199R3Kq2uU8puOCYwQhRU7nL9SDhfd1-F\r'),('15WH1A0217','STUD','BVRW','15wh1a0217@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9100575024','1','1','https://drive.google.com/a/bvrithyderabad.edu.in/file/d/1_N-J9Timbp5CN6W9fuNyKv5SA35knrlB/view?usp=drivesdk\r'),('15WH1A0218','STUD','BVRW','15wh1a0218@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515736572','1','1','https://drive.google.com/open?id=1WWUWRID58TIVRKCDe7V85kaGjluUWKhQ\r'),('15WH1A0219','STUD','BVRW','15wh1a0219@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8801664156','1','1','https://drive.google.com/open?id=1ZWr_erG8O-e7DJ9KjRbxfDdq1U6DnXoJ\r'),('15WH1A0220','STUD','BVRW','15wh1a0220@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8179609981','1','1','https://drive.google.com/open?id=1EuGGvnnTUA1L9QZWtqXoOOU7E2w3_I07\r'),('15WH1A0221','STUD','BVRW','15wh1a0221@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8790443129','1','1','https://drive.google.com/open?id=1pPALuf7c4qE0l4Edjvk3AjTfMNlhpFLn\r'),('15WH1A0222','STUD','BVRW','15wh1a0222@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7075567900','1','1','https://drive.google.com/open?id=1-5hg0KUWOSeHiXXZerMhQJmivucw5_LY\r'),('15WH1A0223','STUD','BVRW','15wh1a0223@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7799286287','1','1','https://drive.google.com/open?id=1_RwQn6HcropomfRi7lk2x2GLIX-1P5Ux\r'),('15WH1A0224','STUD','BVRW','15wh1a0224@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9676854326','1','1','https://drive.google.com/open?id=1YrGSpGeDUE8YUntCjKXnoWXRQcVT04x1\r'),('15WH1A0225','STUD','BVRW','15wh1a0225@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9100692432','1','1','https://drive.google.com/open?id=1nTOgZLlqhKOS9sZs1FU-hBpuZ3CB8BlC\r'),('15WH1A0226','STUD','BVRW','15wh1a0226@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9603377907','1','1','https://drive.google.com/open?id=1pWE8wiafIiYY7Pyby8vxpZRuWr6ysXQ7\r'),('15WH1A0227','STUD','BVRW','15wh1a0227@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9100664350','1','1','\r'),('15WH1A0228','STUD','BVRW','15wh1a0228@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9441165830','1','1','https://drive.google.com/open?id=1uewo55Is4FZF6wk_t3CzU0-486hJk7OQ\r'),('15WH1A0229','STUD','BVRW','15wh1a0229@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8008504932','1','1','https://drive.google.com/open?id=1YlPEO0gC2abjHvribigBfYkA7OPorPof\r'),('15WH1A0231','STUD','BVRW','15wh1a0231@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9573217778','1','1','https://drive.google.com/open?id=1JXvV-mjYDFjivRLIgSWvyTOh8VeKLKoT\r'),('15WH1A0232','STUD','BVRW','15wh1a0232@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9966969345','1','1','https://drive.google.com/open?id=1tkvxUek1T4P-aaz1xDWomMTEI0KSwcVY\r'),('15WH1A0233','STUD','BVRW','15wh1a0233@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8019627776','1','1','https://drive.google.com/open?id=1U8J9vy4QXALVLsZHaCfYr8MY2BtGlfZU\r'),('15WH1A0234','STUD','BVRW','15wh1a0234@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8328331477','1','1','https://drive.google.com/open?id=1YSNsZ43QOI9Ndb7AxPso3M1KElPbqLUF\r'),('15WH1A0235','STUD','BVRW','15wh1a0235@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9963877280','1','1','https://drive.google.com/open?id=1QvqOjUCBSAhRIwpgMOM9QML8-4osT5Aj\r'),('15WH1A0236','STUD','BVRW','15wh1a0236@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9100959498','1','1','https://drive.google.com/open?id=1tUKAmhPm-3Z-bNzJKunRI-3QFfauqpwn\r'),('15WH1A0237','STUD','BVRW','15wh1a0237@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7097692008','1','1','https://drive.google.com/open?id=12ndkwtAUSs22-qicemDxiS4c1c85BazG\r'),('15WH1A0238','STUD','BVRW','15wh1a0238@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8978933888','1','1','https://drive.google.com/open?id=1zd0y3MrcDJ6wQMbIPH-VJXif4fNO4Evd\r'),('15WH1A0239','STUD','BVRW','15wh1a0239@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9133718977','1','1','\r'),('15WH1A0240','STUD','BVRW','15wh1a0240@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9908922724','1','1','https://drive.google.com/open?id=1UUkKrDZ9AH-M-XttGsUEtlVjDqykeNTp\r'),('15WH1A0241','STUD','BVRW','15wh1a0241@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515386451','1','1','https://drive.google.com/open?id=1_oSTAjrDyWzsuGVwIv9UGlXKjQaWc--_\r'),('15WH1A0242','STUD','BVRW','15wh1a0242@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8790914544','1','1','https://drive.google.com/open?id=1Ro_B4VtOUA3swB3t9gSj4zQqQ8bGW0Pl\r'),('15WH1A0243','STUD','BVRW','15wh1a0243@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515767817','1','1','https://drive.google.com/open?id=1rAx21OKEKwAmmTwUMTHwkXx7lXDKWSBy\r'),('15WH1A0244','STUD','BVRW','15wh1a0244@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8885557672','1','1','https://drive.google.com/open?id=1ZK-g_r_CdJ8t79Y_j8EDqCUhO8ccW4-N\r'),('15WH1A0245','STUD','BVRW','15wh1a0245@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9160834041','1','1','https://drive.google.com/open?id=1thV6U6WQ7bPAL0FNo9xpJNLHO1JRWSfy\r'),('15WH1A0246','STUD','BVRW','15wh1a0246@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8106692702','1','1','https://drive.google.com/open?id=1Kaw894lMZzmBone38xKNfL8_r3jwy6Yt\r'),('15WH1A0247','STUD','BVRW','15wh1a0247@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8019912326','1','1','https://drive.google.com/open?id=1bbMa7sAVUxgpMjKU36i6eCmwpNBRboIb\r'),('15WH1A0248','STUD','BVRW','15wh1a0248@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9912555677','1','1','https://drive.google.com/open?id=1zPOBDv5GaBptw-fVo1Vh4-wWIR_P7eJC\r'),('15WH1A0249','STUD','BVRW','15wh1a0249@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9493329938','1','1','https://drive.google.com/open?id=1gNtchW-8uePquxqOByyX-UBkfggxsclY\r'),('15WH1A0250','STUD','BVRW','15wh1a0250@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9553790331','1','1','https://drive.google.com/open?id=1VijesKp7uPOK2E9R0PKMu1KuWd6D3CX9\r'),('15WH1A0251','STUD','BVRW','15wh1a0251@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7702920123','1','1','https://drive.google.com/open?id=1daiyOlQuENAo0bwHo8CC1AMaYfNImtlE\r'),('15WH1A0252','STUD','BVRW','15wh1a0252@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9951760745','1','1','https://drive.google.com/open?id=1IspdLvGq0-d_vDXNPhEKH9wT81CiQLWR\r'),('15WH1A0253','STUD','BVRW','15wh1a0253@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9177320920','1','1','https://drive.google.com/open?id=1UPObZoQ0IclfxvBXs6E0aAJv9aZNv9Kz\r'),('15WH1A0254','STUD','BVRW','15wh1a0254@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7989288172','1','1','https://drive.google.com/open?id=1Oze8Y8cRW5FIjqbk83g6BwfE5ykvc3Ro\r'),('15WH1A0255','STUD','BVRW','15wh1a0255@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9441174441','1','1','https://drive.google.com/open?id=1Pcj_xzsR2mBSamIIk6-cDeQUlV-KPWAe\r'),('15WH1A0256','STUD','BVRW','15wh1a0256@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8978607579','1','1','https://drive.google.com/open?id=1AC_bgQf8hsdp2WmwRr7Crjb4OlAQyn9L\r'),('15wh1a0401','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7032253484','1','1','https://drive.google.com/open?id=1YuQJ1ozyyFojOO90JQ-Jf7xFbqfCJXOl\r'),('15wh1a0402','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9573351681','1','1','https://drive.google.com/open?id=1YM-EC_AlYVzNvlHcGXYAmzvM4Xp3pQsT\r'),('15wh1a0403','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9949323448','1','1','https://drive.google.com/open?id=1OOrdC2_9AXsqQVYGL_dxc59Q7Bno7FDH\r'),('15wh1a0404','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8074848554','1','1','https://drive.google.com/open?id=10_vRk0J-Jx2sFn9-7FANT7HgYJKe25Pm\r'),('15wh1a0405','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9949145957','1','1','https://drive.google.com/open?id=1_1Vna1q5mBYha6Z8bkSJWfX-ipShoJIs\r'),('15wh1a0406','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9133454644','1','1','https://drive.google.com/open?id=1XnsYSrMDfpCfBz4OqTP_hq2Bu6sU82ke\r'),('15wh1a0407','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9885179296','1','1','https://drive.google.com/open?id=1jZZzVrnHAYPgaUMsNua4OJZ64xqDhpK8\r'),('15wh1a0408','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8498932852','1','1','https://drive.google.com/open?id=1p-P8quEZzVLJLmRMtiE4wEH3z46m9OTp\r'),('15wh1a0409','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9704107235','1','1','https://drive.google.com/open?id=1gzlC-MH2mUjdm_eW3j8LW_1WJgTbc0qB\r'),('15wh1a0410','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8885450203','1','1','https://drive.google.com/open?id=1wiYa-SYCZ_kxqEv1ErX96TcREIIjVYoR\r'),('15wh1a0411','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8106895482','1','1','https://drive.google.com/open?id=1db9AKcZdmKUI43qumYn4BkZdk1E-cWJf\r'),('15wh1a0412','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9573866521','1','1','https://drive.google.com/open?id=199MyaYQW0BJyWklACly6AHhsaw9y2rC0\r'),('15WH1A0413','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9000523623','1','1','https://drive.google.com/open?id=1u-D8K5NJ2D_R03aANh9RR2v_Y1aKWg6w\r'),('15wh1a0415','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9700066816','1','1','https://drive.google.com/open?id=1c3xBGFHqPF4MDiGgLWvRtBXtao2xIC_A\r'),('15wh1a0416','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9515134612','1','1','https://drive.google.com/open?id=1gkNo-5ckXqbK2lvVq5ij3sSJBFfhLFTx\r'),('15wh1a0417','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8106558128','1','1','https://drive.google.com/open?id=1Wj9nJ6KtEJGnW58HtyFfnfCbHAhFNfMI\r'),('15wh1a0418','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9705161867','1','1','https://drive.google.com/open?id=15ZM9sVoZ1QE0eqfXQl8VHtm09bdKRWzS\r'),('15WH1A0419','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9959246109','1','1','https://drive.google.com/open?id=13YsCuqf7iYRto1_zEWSp8IagarXl0V4x\r'),('15wh1a0420','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9010704205','1','1','https://drive.google.com/open?id=1brbQf2PkmJBPp_2uoU-JSNDlY4YiAmwn\r'),('15wh1a0421','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7989675687','1','1','https://drive.google.com/open?id=1Y7L9Pqng5IhDwuB5-z_ZGln-DNol8rXa\r'),('15wh1a0422','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9502216113','1','1','https://drive.google.com/open?id=1X68BuqAKXQd0AJMSmVf27Ez7Y9vf5i7o\r'),('15wh1a0423','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9515439095','1','1','https://drive.google.com/open?id=1IOBYsXZP8HQ56giZmlLIz9UpITw5idpt\r'),('15WH1A0424','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9441265750','1','1','https://drive.google.com/open?id=1W3yXMXjvofLqD_8uO0A4hn8ZGq7hW0cK\r'),('15wh1a0425','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9704503292','1','1','https://drive.google.com/open?id=15GTceb62Wh5WhRqZ7oXZvyoh9LP2Pq8Z\r'),('15wh1a0426','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8074625790','1','1','https://drive.google.com/open?id=1dMLiGnKCbyC-mf23HPTRsilM-959aXAI\r'),('15wh1a0427','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8886833123','1','1','https://drive.google.com/open?id=1BF70sTpRAlrZtoGaOqpuUHxM8_VWgFBh\r'),('15wh1a0428','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7989279538','1','1','https://drive.google.com/open?id=1FnC7FDj7fdqrKuyFJVVribpmXZJXtrNA\r'),('15wh1a0429','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9183676130','1','1','https://drive.google.com/open?id=1UE4uf7_AUzxQPyUseR6Kul3fU7tuAnLv\r'),('15wh1a0431','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9703480058','1','1','https://drive.google.com/open?id=1hF_EUttpFDhXbfPzgjAJjKWxRrhn0YFq\r'),('15wh1a0432','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9502730598','1','1','https://drive.google.com/open?id=1xwRlAl9WiI4cdzYu19bven90HVj5BDfV\r'),('15wh1a0433','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8106894343','1','1','https://drive.google.com/open?id=1L7cspLjgOHGjTVhcA5gADFfT7yA-xPvL\r'),('15WH1A0434','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9010140774','1','1','https://drive.google.com/open?id=1AexCmoGqlN4Vm-h7UyE7ubvjM12_oCGs\r'),('15wh1a0435','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7036776673','1','1','https://drive.google.com/open?id=1J3VQbmh-_GO4iGLtQo2hxiz_JA0IgA4F\r'),('15WH1A0437','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8801855092','1','1','https://drive.google.com/open?id=17ye9sO1NtiwakSmRce2ZF9umvXBlIaDG\r'),('15wh1a0438','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9197054418','1','1','https://drive.google.com/open?id=1JR9ms7aobFM5JTjM2uRU7A_a0rmEc3HS\r'),('15wh1a0439','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9177542199','1','1','https://drive.google.com/open?id=1JxXHcThv-hWB08rWDJn3NP2LXkPY9uhl\r'),('15wh1a0440','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7013648857','1','1','https://drive.google.com/open?id=1bYLhisCkdM1cN6-jJurOI431HZUf98BO\r'),('15wh1a0441','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9701025096','1','1','https://drive.google.com/open?id=1WUrXxZZFqwftmzf_uSzpmHuZGtg3_wwE\r'),('15wh1a0442','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7337088312','1','1','https://drive.google.com/open?id=1GkoaHQ_WxeaOjuV-Gj_Q5ubwGmIvQiF9\r'),('15wh1a0443','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9515879300','1','1','https://drive.google.com/open?id=1oGEj56MSDxCCTE3ooOWw0yowrmcqbH1R\r'),('15wh1a0444','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8125960502','1','1','https://drive.google.com/open?id=1eSZ-XWgGHV-Z2VIFG9FGXwwIl1dUcXAi\r'),('15wh1a0445','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8500200603','1','1','https://drive.google.com/open?id=1tiJqiCXoLJW4db3vxTcfeMCnWoIglmRJ\r'),('15wh1a0446','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8897792293','1','1','https://drive.google.com/open?id=1Ru6VnSyFTAqwuV_9fiO1DcbInOHvLLkM\r'),('15wh1a0447','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8978901809','1','1','https://drive.google.com/open?id=167IlaCWcPaAe9WcwMD51CdFSBEqvWbEI\r'),('15wh1a0448','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8008832231','1','1','https://drive.google.com/open?id=1ibsb_4Uq3of1pRsgPrQ-UYmpqVT8evqK\r'),('15WH1A0449','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9603938973','1','1','https://drive.google.com/open?id=1p9Q4i3K9QVsYG12mGCUaKMxZeOElEXNL\r'),('15wh1a0450','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7893182929','1','1','https://drive.google.com/open?id=1JsUGU7LjRo3QIYweTk-Cv_P5dvF_VBbX\r'),('15wh1a0451','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9100680894','1','1','https://drive.google.com/open?id=1nshJPPWdTmRgodJrzhYxjAKWbYVjNncW\r'),('15WH1A0452','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8466923024','1','1','https://drive.google.com/open?id=1X788mcH-t7h29IAyZcJnHYbU0Do81zre\r'),('15WH1A0453','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','6281524301','1','1','https://drive.google.com/open?id=17A2hCstrk78jIzVrzmgexY3mAyCs1Vo7\r'),('15wh1a0454','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9985536361','1','1','https://drive.google.com/open?id=1wRpRsug-9oGy-lugbcCrtGphfdq8zXwM\r'),('15wh1a0455','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9849938007','1','1','https://drive.google.com/open?id=1QG5GScKfHxhrwEsugKkQPav8oSfUWSy2\r'),('15wh1a0456','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7702603730','1','1','https://drive.google.com/open?id=1yXASgmWFJ-lKtTP5h1J2b44A8T-xHxBQ\r'),('15WH1A0457','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9603227102','1','1','https://drive.google.com/open?id=1MmFs7s0DjVZb-EuawgMCkdC0fIN2lT9I\r'),('15wh1a0458','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8332081325','1','1','https://drive.google.com/open?id=1cyx_i5wQNJY6We8PHWEnQHik910It0D6\r'),('15wh1a0459','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8008034619','1','1','https://drive.google.com/open?id=1y-pPNvKz5Apr5ts5xdsnfxJIiokpOzoj\r'),('15WH1A0460','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8897179295','1','1','https://drive.google.com/open?id=1db__9lcSEYyTjcFTjcvYPhmyHD0_v-Oj\r'),('15WH1A0461','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9676092311','1','1','https://drive.google.com/open?id=1Y-EOZ5iXQthnFoVz8Lu_xrjcRIHjxN3l\r'),('15wh1a0462','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8179204680','1','1','https://drive.google.com/open?id=17y2l53MTBTPEtRvErkVNRqb678_AIWpR\r'),('15wh1a0463','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9100003355','1','1','https://drive.google.com/open?id=1ipvbbEi4rhwP8GoQcV9_twwWKuWQBQ4f\r'),('15wh1a0464','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9704579988','1','1','https://drive.google.com/open?id=1d16jl0zEOa5W2ir8AvEdvqdf6NEzFaTL\r'),('15wh1a0465','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8008441473','1','1','https://drive.google.com/open?id=1X6uRMetn1HfTavMwSgB1DlSJgqWkRqI5\r'),('15WH1A0466','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9908811646','1','1','https://drive.google.com/open?id=1Bgu2eTNqIqJ8A69nXnQDFlFs-tqeco9e\r'),('15WH1A0467','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8790998143','1','1','https://drive.google.com/open?id=1KYCtYJVoUr_Y2u-3Gg7JzbLsRXsMECtr\r'),('15WH1A0468','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7382011014','1','1','https://drive.google.com/open?id=17BHF0826xdxfm_6s81U5SnTYxpKBlfJk\r'),('15wh1a0469','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8185822902','1','1','https://drive.google.com/open?id=1MDGkFtsxaxxV8Ha7r6rc_JzAZztTigBo\r'),('15WH1A0470','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8143789301','1','1','https://drive.google.com/open?id=1no7EHUbuHCD8R3MJYXkvXWuJUixemEHe\r'),('15wh1a0471','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7989806306','1','1','https://drive.google.com/open?id=17qRc_sM1jX0J8eoUPu8sSt5sELDpUvV6\r'),('15WH1A0472','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','6281007723','1','1','https://drive.google.com/open?id=1gvNxd7_YZefhRvnkUNvyV5Vy-okxqEET\r'),('15wh1a0473','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9063220306','1','1','https://drive.google.com/open?id=1GXb43a5ad8FRkcD2bbzuL8r4Vcz2zZgk\r'),('15wh1a0475','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8185827195','1','1','https://drive.google.com/open?id=1kL25EV-5bBXOD49fsKFqFmR2nZ8dnypg\r'),('15WH1A0476','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9542569910','1','1','https://drive.google.com/open?id=10bLY3JMI9NctX4ouP8LA9ODtcYmP1v5i\r'),('15WH1A0477','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9052457539','1','1','https://drive.google.com/open?id=1jhUMSgPSueWnoXhCWv4kL4rw_khf6sz-\r'),('15WH1A0478','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8309001940','1','1','https://drive.google.com/open?id=16WZVCe_jJd6ixZspPmd8og4WIPsLASmu\r'),('15wh1a0479','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','6281422564','1','1','https://drive.google.com/open?id=1lyQzYcwc__wKbKfJx4CAsZ9LL4rgvu0t\r'),('15WH1A0481','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8686490227','1','1','https://drive.google.com/open?id=1Lr5N33n1rCSFSGaAloVy-zGzlh3L-wIh\r'),('15wh1a0482','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9515788689','1','1','https://drive.google.com/open?id=1wmjtl5glZRJViVUqYLWdJlL8qD9MT8S4\r'),('15wh1a0483','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9700849862','1','1','https://drive.google.com/open?id=1LyODeERfH1JUepXFc0bTx-kuQ1y010RZ\r'),('15wh1a0484','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8341049423','1','1','https://drive.google.com/open?id=1vXMEKjIUrAjpVLxtL6_p7aWE5BuLsVEG\r'),('15wh1a0485','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7093250174','1','1','https://drive.google.com/open?id=1mFaU58s8broy9zf1ylFIdbSCxP-1Qrh2\r'),('15wh1a0486','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9704882795','1','1','https://drive.google.com/open?id=1jV0Hq-iBkR0THyuqFc1lDMJPHhAOeDGQ\r'),('15wh1a0487','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9100610231','1','1','https://drive.google.com/open?id=1-8HeFshv-1zttciWkahlLJXTM2WkOV09\r'),('15wh1a0488','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9515738079','1','1','https://drive.google.com/open?id=1pnReMF53nH5egPbyT32PNtV01wD_c-Em\r'),('15wh1a0489','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8686736008','1','1','https://drive.google.com/open?id=1cvi5sJgFXvkPpHH6kRogDgRwOErt5Jdl\r'),('15wh1a0490','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7093700676','1','1','https://drive.google.com/open?id=16wx93HMTHb4rUXns9tDcf1-fSas2D5XS\r'),('15wh1a0491','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7981393187','1','1','https://drive.google.com/open?id=1dct6Kbv3HzieifNn5YPPTrygEs2-poJ9\r'),('15wh1a0492','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9951017342','1','1','https://drive.google.com/open?id=14HwIWim5WnDvkrH6gLKKdfMAbgLE_7SY\r'),('15wh1a0494','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7893387698','1','1','https://drive.google.com/open?id=1HuMkns40i089d6svdqIrJUNdpQrQkWp8\r'),('15wh1a0495','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8465005471','1','1','https://drive.google.com/open?id=1sL4YVjGDKDddWQsuGyI5AFl-9WSuah3d\r'),('15wh1a0496','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9505888142','1','1','https://drive.google.com/open?id=1qJO0zUk6NUetWt_kAfXvyFufDTNJs7Rv\r'),('15WH1A0497','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9491841998','1','1','https://drive.google.com/open?id=17ZoDi7VVn4Iv0ES8JhUDCRaRogU_AU7N\r'),('15wh1a0498','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9533514477','1','1','https://drive.google.com/open?id=1lR56QM-BPJUqw-6eUEBbND0jmQ3xHqqg\r'),('15wh1a0499','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9393111044','1','1','https://drive.google.com/open?id=1cvDETDpvDLv1bGoH8qfHMEVjmyv0vjjk\r'),('15wh1a04a0','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9989468869','1','1','https://drive.google.com/open?id=16GXU5H9NBNn3u29sm8scP9FMQYPkyVOh\r'),('15wh1a04a1','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9515212579','1','1','https://drive.google.com/open?id=1V-gq0BvJrjZ_MFYHm5sF1lbGRZ4npbJQ\r'),('15WH1A04A2','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8885545369','1','1','https://drive.google.com/open?id=1FG8Y4MGxluPaKGgyOtIg6s0YbzdBY4F4\r'),('15wh1a04a3','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8096081135','1','1','https://drive.google.com/open?id=14W8wGWeCctabyCAFZJYAK1A79MG18o6r\r'),('15wh1a04a4','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9182320141','1','1','https://drive.google.com/open?id=12Kpesg8orhXbQvkt4EmQPxmSdfH1Ju1T\r'),('15WH1A04A5','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9701863908','1','1','https://drive.google.com/open?id=1nSqdpA-NhureXyB39p67nPomp64OoB83\r'),('15WH1A04A6','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9618611268','1','1','https://drive.google.com/open?id=1xPHzjEY218NpzLRRtvjQMZz3pr65uf5S\r'),('15wh1a04a7','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8885453411','1','1','https://drive.google.com/open?id=18VMu3GyivlJRR4kr9xeO5-g2Km5ioa6y\r'),('15WH1A04A8','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9030712612','1','1','https://drive.google.com/open?id=18oGpMEPVAMny7q0mhU65cOqtgr-U4QQS\r'),('15wh1a04a9','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7337066836','1','1','https://drive.google.com/open?id=1E86W5-wpaXLmOanenwFhX1iyMNq_9e-T\r'),('15WH1A04B0','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9676178239','1','1','https://drive.google.com/open?id=1V9fH564z_zfbkMfyOWzmsj9uaNH5AWUD\r'),('15wh1a04b1','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9032804640','1','1','https://drive.google.com/open?id=1WCUtOGpp_dIdvd2Dxj5IzBdoguqkjzT0\r'),('15WH1A04B2','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9515803655','1','1','https://drive.google.com/open?id=1x_nNFmMJ00vBJmD9SQV1fK_GVIIkeUN7\r'),('15WH1A04B3','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9110556749','1','1','https://drive.google.com/open?id=15FmWTbD0sb8dVrWNLIzSYXVPUPqPFOqU\r'),('15WH1A04B5','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9550731746','1','1','https://drive.google.com/open?id=1A0I5BpWBqldJ7KtypsexGZWUaa-iqmWK\r'),('15wh1a04b6','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7659062072','1','1','https://drive.google.com/open?id=1qFXPRbgDL_BM3-NtGSboao8f5iv7zd7V\r'),('15WH1A04B7','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8523896398','1','1','https://drive.google.com/open?id=1CTW8-BB3w_yfllghfvXVkzkVI0u97RZ3\r'),('15wh1a04b8','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8501812062','1','1','https://drive.google.com/open?id=16kKHFcOS7nUGZSv_IfkdW9ems0uLghVi\r'),('15WH1A04B9','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7207586405','1','1','https://drive.google.com/open?id=1pNXxp8Q68BvLPJy6biMkxIXkCxjuPvHk\r'),('15wh1a04c0','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9177143259','1','1','https://drive.google.com/open?id=1Ve5YPF8qMvUcMcIJbYkBLInvr6LlotsL\r'),('15WH1A0501','STUD','BVRW','15wh1a0501@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9542754374','1','1','https://drive.google.com/open?id=1IqZ9uoD14ovCjg9m4cr8ZYBi5DZT7qh7\r'),('15WH1A0502','STUD','BVRW','15wh1a0502@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9603694286','1','1','https://drive.google.com/open?id=1tBpjIyMr3q3fl0K-YZ79rC_bHw9g-Rna\r'),('15WH1A0503','STUD','BVRW','15wh1a0503@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9908489222','1','1','https://drive.google.com/open?id=1iiMcHSvRqmUeYU9-XeohMoxY3Kg5yDy3\r'),('15WH1A0504','STUD','BVRW','15wh1a0504@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9392446432','1','1','https://drive.google.com/open?id=1xXIWMcerlwXFl07x3GYNIbUezGxakqcD\r'),('15WH1A0505','STUD','BVRW','15wh1a0505@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9199898663','1','1','https://drive.google.com/open?id=1bUjtFXBJwjOtyL_PdFsU0kHx8YDJdoF6\r'),('15WH1A0506','STUD','BVRW','15wh1a0506@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9701217761','1','1','https://drive.google.com/open?id=1XQH0j3QF8i2zQkAnh3VLJthfZD3_0r1N\r'),('15WH1A0507','STUD','BVRW','15wh1a0507@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9393015505','1','1','https://drive.google.com/open?id=100cReNW4WvMZVcSVRg00EswcA6W_SFwh\r'),('15WH1A0508','STUD','BVRW','15wh1a0508@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9346988011','1','1','https://drive.google.com/open?id=1wKhKXpuqVUtD6Ggne7wDVGtQjdNHKyoN\r'),('15WH1A0509','STUD','BVRW','15wh1a0509@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7680881255','1','1','https://drive.google.com/open?id=1bacvcNYdR3a5E-HaD-ab3uMBszML5Pxv\r'),('15WH1A0510','STUD','BVRW','15wh1a0510@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515524055','1','1','https://drive.google.com/open?id=1WXwBeyhRxYNOMsAFUcudZu_tSOdf4Hjv\r'),('15WH1A0511','STUD','BVRW','15wh1a0511@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8374245653','1','1','https://drive.google.com/open?id=10ocYCCcK0wvFCz-C02mCrmwxqLg5Nql5\r'),('15WH1A0512','STUD','BVRW','15wh1a0512@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9491626456','1','1','https://drive.google.com/open?id=1uVE6_CadqM7aPD_fFja5MGdZUn2QE9YZ\r'),('15WH1A0513','STUD','BVRW','15wh1a0553@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9502633533','1','1','https://drive.google.com/open?id=1TUi3pH7woyu_Oe58Dr3e3uBWU4LIklVC\r'),('15WH1A0514','STUD','BVRW','15wh1a0514@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9133406153','1','1','https://drive.google.com/open?id=1d-TGEu1bIzMvJSE3LRtbSc8c5y0ZRZeP\r'),('15WH1A0515','STUD','BVRW','15wh1a0515@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9959843344','1','1','https://drive.google.com/open?id=1AFH_f3UAca4OMIpleC7R0hAF0OHNcAop\r'),('15WH1A0516','STUD','BVRW','15wh1a0516@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7032030720','1','1','https://drive.google.com/open?id=1_nsyWedwgLveJTdqiUnsvOJAw5UmaIlS\r'),('15WH1A0517','STUD','BVRW','15wh1a0517@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9063638120','1','1','https://drive.google.com/open?id=1f70WQPpj7pTgkt6wQfHhEtBteKODfTur\r'),('15WH1A0518','STUD','BVRW','15wh1a0518@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9100476311','1','1','https://drive.google.com/open?id=1CCuJ4TAOhtd55R9-t_vbOmOelbzn48XZ\r'),('15WH1A0519','STUD','BVRW','15wh1a0519@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7416576739','1','1','https://drive.google.com/open?id=1UmPioJvsJqVjFfeu2T6fjtcThL0VENrA\r'),('15WH1A0520','STUD','BVRW','15wh1a0520@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9492595599','1','1','https://drive.google.com/open?id=1OfcsMUESKUjKT-Gl0WZpQ1xklodO64c-\r'),('15WH1A0521','STUD','BVRW','15wh1a0521@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9491052525','1','1','https://drive.google.com/open?id=1Hi0dXXrNR-6YUsam5jCD6LiYiq9818Mp\r'),('15WH1A0522','STUD','BVRW','15wh1a0522@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7674030888','1','1','https://drive.google.com/open?id=16VYSkf9CZKQyhagFPuetZkuOMGX2stsb\r'),('15WH1A0523','STUD','BVRW','15wh1a0523@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8686632358','1','1','https://drive.google.com/open?id=14_Wxb8ITzbwdRbIi2fxW78__C3_6t6Hr\r'),('15WH1A0524','STUD','BVRW','15wh1a0524@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9959111164','1','1','\r'),('15WH1A0525','STUD','BVRW','15wh1a0525@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9133841310','1','1','https://drive.google.com/open?id=1CHsolf27RxAcFu5GqHnvD4OFqY_4UV3S\r'),('15WH1A0526','STUD','BVRW','15wh1a0526@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9963639992','1','1','https://drive.google.com/open?id=1gBuEpEiAYjNnqhMmHt8HVvbfByKM3di-\r'),('15WH1A0528','STUD','BVRW','15wh1a0528@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9704531385','1','1','https://drive.google.com/open?id=11j7Eid8CRSViAaCjuXR1KPHJ9Twt2oSl\r'),('15WH1A0529','STUD','BVRW','15wh1a0529@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7337472359','1','1','https://drive.google.com/open?id=1QWFJ9dEAYxaBQN5JjEBRm_mB3qKKFYTk\r'),('15WH1A0530','STUD','BVRW','15wh1a0530@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9959393737','1','1','https://drive.google.com/open?id=1LCIEV0zJtXfoM8lxoaPKjEDozR_C9l83\r'),('15WH1A0531','STUD','BVRW','15wh1a0531@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7036080987','1','1','https://drive.google.com/open?id=1f2kcds3yjrJBgelGLFMWKBMr3RRrCkv_\r'),('15WH1A0532','STUD','BVRW','15wh1a0532@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9032570540','1','1','https://drive.google.com/open?id=1Tf0im7a46DHh1W13USYZrftsYzqvKtQM\r'),('15WH1A0533','STUD','BVRW','15wh1a0533@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9505120390','1','1','\r'),('15WH1A0534','STUD','BVRW','15wh1a0534@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9700989162','1','1','https://drive.google.com/open?id=1Y71dOV-8Sdyrb5m-ZAIdHShyhjyJhaZq\r'),('15WH1A0535','STUD','BVRW','15wh1a0535@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9573520343','1','1','https://drive.google.com/open?id=1TWUh_XUw5ZMMI4cRvNhKz2vO09e0hcwN\r'),('15WH1A0536','STUD','BVRW','15wh1a0536@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9849556783','1','1','https://drive.google.com/open?id=1Gqmr_5hcHY8ArIQ1X0TxprXF0IVKiaAp\r'),('15WH1A0537','STUD','BVRW','15wh1a0537@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9550914160','1','1','https://drive.google.com/open?id=1eBck-nL5Xj526M4sb197S6c6u31fgzSu\r'),('15WH1A0538','STUD','BVRW','15wh1a0538@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7993720323','1','1','https://drive.google.com/open?id=1yeQ2V_TAxPABpX1mHEnHNfzT91cPficj\r'),('15WH1A0539','STUD','BVRW','15wh1a0539@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7842433556','1','1','https://drive.google.com/open?id=1fuHMrwrM83FY8ga9FeR-uPoQzEAFkxPR\r'),('15WH1A0540','STUD','BVRW','15wh1a0540@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9908219596','1','1','https://drive.google.com/open?id=1Rgyk8VRPZUaqYBm49-qxGEfA3tgb6jay\r'),('15WH1A0541','STUD','BVRW','15wh1a0541@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9666717167','1','1','https://drive.google.com/open?id=1cWb7apOV1iKaZ3Z2yXyXgnCFEFAsl3DS\r'),('15WH1A0542','STUD','BVRW','15wh1a0542@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9966939444','1','1','https://drive.google.com/open?id=1juGCYKzrbKi9qbNK_Lgv4z-HZx2FzJkP\r'),('15WH1A0543','STUD','BVRW','15wh1a0543@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515730601','1','1','https://drive.google.com/open?id=0B0lWomUhgd5uSXlma0RYRFRfb2tBVzFiZE5lYzg2RkU5cG1n\r'),('15WH1A0544','STUD','BVRW','15wh1a0544@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9885947525','1','1','https://drive.google.com/open?id=1VqFEYOjQNbtIc439HeXWptX4wWDwrBFR\r'),('15WH1A0545','STUD','BVRW','15wh1a0545@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8886728768','1','1','\r'),('15WH1A0546','STUD','BVRW','15wh1a0546@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9133287273','1','1','https://drive.google.com/open?id=1XEGxlUJGXkmw_olgpHEUFzOUHNW4jifo\r'),('15WH1A0547','STUD','BVRW','15wh1a0547@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8142357874','1','1','\r'),('15WH1A0548','STUD','BVRW','15wh1a0548@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8985035338','1','1','https://drive.google.com/open?id=1b06iXGMb6RqOp2DfxHgDVFmwAKySMWsO\r'),('15WH1A0549','STUD','BVRW','15wh1a0549@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9912994986','1','1','https://drive.google.com/open?id=1fwVGvPmXSO3TEaTLCD6QIm0NCZf5fX-0\r'),('15WH1A0550','STUD','BVRW','15wh1a0550@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9652744096','1','1','https://drive.google.com/open?id=12U4bEtyxV_q2yV7zUWbPCQDXsnGIUi6s\r'),('15WH1A0551','STUD','BVRW','15wh1a0551@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9642534499','1','1','https://drive.google.com/open?id=1AIHEE8CeTf_hhL4waf9LF4TVDzYQrYM1\r'),('15WH1A0552','STUD','BVRW','15wh1a0552@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9550640146','1','1','https://drive.google.com/open?id=1-iejLSwK11zW7wK3q0KzVN4xqAWkXzP_\r'),('15WH1A0555','STUD','BVRW','15wh1a0555@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9618077489','1','1','https://drive.google.com/file/d/1e6cO4JGpKSpLHKOD2JY4PktQZNYMofka/view?usp=sharing\r'),('15WH1A0556','STUD','BVRW','15wh1a0556@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9908491277','1','1','https://drive.google.com/open?id=1k_xPfbfB77TKccfhsKXoZP-gi-nL0EgX\r'),('15WH1A0557','STUD','BVRW','15wh1a0557@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8297482670','1','1','\r'),('15WH1A0558','STUD','BVRW','15wh1a0558@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9100284622','1','1','https://drive.google.com/open?id=1oyG068ow-Q1WdVa1geUjXvt2sg7C2K3m\r'),('15WH1A0559','STUD','BVRW','15wh1a0559@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9154561890','1','1','https://drive.google.com/open?id=194RMxTxNvDQTa5ecsMiSL7gzQOJAdTtH\r'),('15WH1A0560','STUD','BVRW','15wh1a0560@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7331126465','1','1','https://drive.google.com/open?id=1Tk0jTOE5ZVE7Sb75OX-EHvOtm13LIzzl\r'),('15WH1A0561','STUD','BVRW','15wh1a0561@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9492025662','1','1','https://drive.google.com/open?id=1sjO8KXtm158PzMou-zwSHelzGFjg1uAr\r'),('15WH1A0562','STUD','BVRW','15wh1a0562@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7893770780','1','1','https://drive.google.com/open?id=1QXcEmEtnUY4ZlWsMnetFbgJIdX_DpVdL\r'),('15WH1A0563','STUD','BVRW','15wh1a0563@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9030323344','1','1','https://drive.google.com/open?id=1rEkjkTxrlNJg1JKY0eJSOrw_aqCrIpcR\r'),('15WH1A0564','STUD','BVRW','15wh1a0564@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9704147069','1','1','https://drive.google.com/open?id=1TKfCVxEgOf-DlZzQTLin9PN3fVtnOUw0\r'),('15WH1A0565','STUD','BVRW','15wh1a0565@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515803409','1','1','https://drive.google.com/open?id=1una1ScLzdfNp1t2Qhtv0XsOlNxHMUHrU\r'),('15WH1A0566','STUD','BVRW','15wh1a0566@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515227802','1','1','https://drive.google.com/open?id=1Qh7Vr3TY-4MnMnoG-7ghUJNQIW5cNCXD\r'),('15WH1A0567','STUD','BVRW','15wh1a0567@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9949608679','1','1','https://drive.google.com/open?id=1dUwPHEVyuO0HzMKNgi_5bhvl9SG_8m_U\r'),('15WH1A0568','STUD','BVRW','15wh1a0568@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9542434959','1','1','https://drive.google.com/open?id=1kQQRQUzKhODDbIkw7SLTMCoTSWA5vu9x\r'),('15WH1A0569','STUD','BVRW','15wh1a0569@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8333859537','1','1','https://drive.google.com/open?id=1nEycgqC8Txh9sAAB_kKywlziIa3B2Sb7\r'),('15WH1A0570','STUD','BVRW','15wh1a0570@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8639416754','1','1','https://drive.google.com/a/bvrithyderabad.edu.in/file/d/1zL-y-eIlLmMq6UthS06hbdka8h-JbGqM/view?usp=drivesdk\r'),('15WH1A0571','STUD','BVRW','15wh1a0571@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8374372818','1','1','https://drive.google.com/open?id=1Y9jnrgRaMYTN8xTLgrsDTob712spSfo-\r'),('15WH1A0572','STUD','BVRW','15wh1a0572@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8143218538','1','1','\r'),('15WH1A0573','STUD','BVRW','15wh1a0573@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9502960298','1','1','https://drive.google.com/file/d/1wFL5OYymbAuXQyAqBJjaBro90Va5AJiM/view?usp=drivesdk\r'),('15WH1A0574','STUD','BVRW','15wh1a0574@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9573976715','1','1','\r'),('15WH1A0575','STUD','BVRW','15wh1a0575@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8465992555','1','1','\r'),('15WH1A0576','STUD','BVRW','15wh1a0576@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9505430222','1','1','https://drive.google.com/open?id=1NgBPL7iGUfK76yaeJKZ0YV_fPlBQkZmh\r'),('15WH1A0577','STUD','BVRW','15wh1a0577@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9701118130','1','1','https://drive.google.com/open?id=1wA643MN3sVxykVLhp9PDXfg2mVMgf2fj\r'),('15WH1A0578','STUD','BVRW','15wh1a0578@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8885656219','1','1','https://drive.google.com/open?id=1V_IcfSSbn9pfJbOMlTL9CJy3uBTeGu78\r'),('15WH1A0579','STUD','BVRW','15wh1a0579@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9542043558','1','1','https://drive.google.com/open?id=16BQNZRHmQYYxl0OgeFTkaqNb75N30Gha\r'),('15WH1A0580','STUD','BVRW','15wh1a0580@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9550222306','1','1','https://drive.google.com/open?id=1FQaml_UhdeRjgW4j0wsuf8zBUrfx0D1K\r'),('15WH1A0581','STUD','BVRW','15wh1a0581@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7416608050','1','1','https://drive.google.com/open?id=1Luj5zGCovEWRLDpRpktSffWELEPsqNqd\r'),('15WH1A0582','STUD','BVRW','15wh1a0582@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9542880324','1','1','https://drive.google.com/open?id=1CBWteFIp8zwRUzfp_uNOSWath7njnAJ9\r'),('15WH1A0583','STUD','BVRW','15wh1a0583@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8297479687','1','1','https://drive.google.com/open?id=1I235wjKyz4xv9rfyyQIfl9AoXqN0npA8\r'),('15WH1A0584','STUD','BVRW','15wh1a0584@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9848517888','1','1','https://drive.google.com/open?id=1qis9sPAoazwXAz2j06NRvgcuWHkhc0iI\r'),('15WH1A0585','STUD','BVRW','15wh1a0585@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9010976321','1','1','https://drive.google.com/open?id=1mcB4k1ZNTnLfIIJCReSHaQIaqLv7Q313\r'),('15WH1A0586','STUD','BVRW','15wh1a0586@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7207791104','1','1','https://drive.google.com/open?id=16KJi8MINQfTJ-a_6w28TwcGM3S0QNXdR\r'),('15WH1A0587','STUD','BVRW','15wh1a0587@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9704419191','1','1','https://drive.google.com/open?id=1VOivigtsKk-0RBcm2Yk0kYLHVx8OZRqG\r'),('15WH1A0588','STUD','BVRW','15wh1a0588@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8309794164','1','1','\r'),('15WH1A0589','STUD','BVRW','15wh1a0589@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8096362782','1','1','https://drive.google.com/open?id=1NKxTCrejTvskGJKsuih_cdhgSRH9F08E\r'),('15WH1A0590','STUD','BVRW','15wh1a0590@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9701535678','1','1','\r'),('15WH1A0591','STUD','BVRW','15wh1a0591@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9989819737','1','1','https://drive.google.com/open?id=1hAhOR8if__xOUSidSWFLoSKODv6aC55v\r'),('15WH1A0592','STUD','BVRW','15wh1a0592@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9676379539','1','1','https://drive.google.com/open?id=1_EHytSFWkrnF2nHaswqnZaBuGO_Wq481\r'),('15WH1A0593','STUD','BVRW','15wh1a0593@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9177524789','1','1','https://drive.google.com/open?id=1jji46qenTVSclkkimOCjEyqucRdC_tMG\r'),('15WH1A0594','STUD','BVRW','15wh1a0594@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9705079962','1','1','https://drive.google.com/open?id=1jKeewyPTqSgVwzCuwpVeZMVLD6LEFw3X\r'),('15WH1A0595','STUD','BVRW','15wh1a0595@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8008617889','1','1','\r'),('15WH1A0596','STUD','BVRW','15wh1a0596@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8185800333','1','1','https://drive.google.com/open?id=1g5UgBC6JjYVjbIifoaLbT4z3UAR_pkkq\r'),('15WH1A0597','STUD','BVRW','15wh1a0597@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515586159','1','1','https://drive.google.com/open?id=14HTlSFhDoxN6eZae7jOoW7OnXg9SdfTH\r'),('15WH1A0598','STUD','BVRW','15wh1a0598@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9550705295','1','1','https://drive.google.com/open?id=14L3VrqBzbviIaijxfjhO5PTxa_rJiu6S\r'),('15WH1A05A0','STUD','BVRW','15wh1a05a0@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8464828333','1','1','https://drive.google.com/open?id=1ISv_sr4h-B1JQLMn97Ypyh4oCPj_YOB3\r'),('15WH1A05A1','STUD','BVRW','15wh1a05a1@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9959726038','1','1','https://drive.google.com/open?id=1CirhIZ7OPrc5IwIXEIuhqKsWqPPAe9u0\r'),('15WH1A05A2','STUD','BVRW','15wh1a05a2@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8185974029','1','1','https://drive.google.com/open?id=1_3p4y9W7a1P2E_INNpTopR8qzu1HFwi7\r'),('15WH1A05A3','STUD','BVRW','15wh1a05a3@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8106794042','1','1','https://drive.google.com/open?id=16MIiITQ5R09f9x3kHrMPoWfzvMDKlWuO\r'),('15WH1A05A4','STUD','BVRW','15wh1a05a4@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7893964966','1','1','https://drive.google.com/open?id=1aJ1vn-D4UrNNz0m88_s8VeOBfofp99N5\r'),('15WH1A05A5','STUD','BVRW','15wh1a05a5@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9440178229','1','1','https://drive.google.com/open?id=1bV98sTRmxTqHgqQsNTt6Pte_sgoE06pc\r'),('15WH1A05A6','STUD','BVRW','15wh1a05a6@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9618977260','1','1','https://drive.google.com/open?id=1yDiJz-yNR4k4ozAOFtB846BuDhkR7hMZ\r'),('15WH1A05A7','STUD','BVRW','15wh1a05a7@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7337414389','1','1','https://drive.google.com/open?id=16PzVdsW2ZEWBdM_6vJ6ETDpkzArb56jk\r'),('15WH1A05A8','STUD','BVRW','15wh1a05a8@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7893287998','1','1','https://drive.google.com/open?id=1xhvaOjNpzXxBjV73vF-j-EU-sc11CBgU\r'),('15WH1A05A9','STUD','BVRW','15wh1a05a9@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8978070234','1','1','https://drive.google.com/open?id=16ulDGstRTggGBsZgjiFxE6cWMm1Na0UM\r'),('15WH1A05B0','STUD','BVRW','15wh1a05b0@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7674945369','1','1','\r'),('15WH1A05B1','STUD','BVRW','15wh1a05b1@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9000222535','1','1','https://drive.google.com/open?id=1QRGpFJ42xzzqrH0bMbNUpLiBR6E294MF\r'),('15WH1A05B2','STUD','BVRW','15wh1a05b2@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9949912330','1','1','https://drive.google.com/open?id=1C07yGRqaKdVoTwCVsCPCcC5AzYT5f5ot\r'),('15WH1A05B3','STUD','BVRW','15wh1a05b3@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9100951549','1','1','https://drive.google.com/open?id=1cppasa106ERaitFDifzCUSCEQWf213g8\r'),('15WH1A05B4','STUD','BVRW','15wh1a05b4@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9160666728','1','1','\r'),('15WH1A05B5','STUD','BVRW','15wh1a05b5@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8341874946','1','1','https://drive.google.com/open?id=1O2za-3LHPfdPT3R3EPoC8M0RCl46xnh4\r'),('15WH1A05B6','STUD','BVRW','15wh1a05b6@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9059526038','1','1','https://drive.google.com/open?id=1Z6amyJwPzRgdpsE4V6Tr23UvxnnUjY_Y\r'),('15WH1A05B7','STUD','BVRW','15wh1a05b7@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9666265015','1','1','\r'),('15WH1A05B8','STUD','BVRW','15wh1a05b8@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8885249475','1','1','https://drive.google.com/open?id=1fbhbSirBtGaz77d-8WcA3lJQBRQqvDV8\r'),('15WH1A05B9','STUD','BVRW','15wh1a05b9@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7702897808','1','1','\r'),('15WH1A05C0','STUD','BVRW','15wh1a05c0@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8106661964','1','1','https://drive.google.com/open?id=11cFsDMPCMC2lM0ZdkP_7zmIt5wwD2OJi\r'),('15wh1a1201','STUD','BVRW','15wh1a1201@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9652293937','1','1','https://drive.google.com/open?id=1bvSUarWIZBA-qGf1O9MuFeY2uEPk2KOH\r'),('15wh1a1202','STUD','BVRW','15wh1a1202@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8008777066','1','1','\r'),('15wh1a1203','STUD','BVRW','15wh1a1203@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9959759393','1','1','\r'),('15WH1A1204','STUD','BVRW','15wh1a1204@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9676624199','1','1','https://drive.google.com/open?id=1i46jbG9BVn-W1FQdW_AFulJAL0G8LC5y\r'),('15WH1A1205','STUD','BVRW','15wh1a1205@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9553569797','1','1','\r'),('15wh1a1206','STUD','BVRW','15wh1a1206@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9951895804','1','1','https://drive.google.com/open?id=1EpvQQON2t_AoC2WxkGyYSvmrSNbdkbjh\r'),('15wh1a1207','STUD','BVRW','15wh1a1207@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9030362278','1','1','https://drive.google.com/open?id=1XKmgO4zsGu48z0BBcpM-I2yAef_S9NSG\r'),('15wh1a1208','STUD','BVRW','15wh1a1208@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9966851772','1','1','\r'),('15wh1a1209','STUD','BVRW','15wh1a1209@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7416596898','1','1','https://drive.google.com/open?id=1MbKl3DZPUuBaRS0Fl7sS3KuBRQerfmQP\r'),('15wh1a1210','STUD','BVRW','15wh1a1210@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7730027304','1','1','https://drive.google.com/open?id=1LzWjPQeb6fvNiltQSsEAtZRre5OHCwUv\r'),('15wh1a1211','STUD','BVRW','15wh1a1211@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8341516937','1','1','\r'),('15wh1a1212','STUD','BVRW','15wh1a1212@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9502623056','1','1','https://drive.google.com/open?id=1oxDX0MOlWKg4Rx7NEN2_obZpqmkPhnZF\r'),('15WH1A1213','STUD','BVRW','15wh1a1213@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9652730363','1','1','https://drive.google.com/open?id=1t4wIJU6qyxu8JvGWNXcSQKZWYjaYKwEL\r'),('15wh1a1214','STUD','BVRW','15wh1a1214@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8790374340','1','1','https://drive.google.com/open?id=1HstRt4dR7WQnuOM6_8XDgKC-IMPoRynK\r'),('15wh1a1215','STUD','BVRW','15wh1a1215@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8499884793','1','1','\r'),('15WH1A1216','STUD','BVRW','15wh1a1216@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7893528554','1','1','\r'),('15wh1a1217','STUD','BVRW','15wh1a1217@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9705077331','1','1','\r'),('15wh1a1218','STUD','BVRW','15wh1a1218@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9848018082','1','1','https://drive.google.com/open?id=1TJt_Ch8OfqINmaaZNYyPrk6C86TtJUo0\r'),('15wh1a1219','STUD','BVRW','15wh1a1219@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8340929729','1','1','https://drive.google.com/open?id=1cQ_0XZO3SWqUD2gVn2nHRl_4mPP5ycw8\r'),('15WH1A1220','STUD','BVRW','15wh1a1220@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9177271184','1','1','\r'),('15wh1a1221','STUD','BVRW','15wh1a1221@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9299406902','1','1','\r'),('15wh1a1222','STUD','BVRW','15wh1a1222@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9603333257','1','1','https://drive.google.com/open?id=1gGja-Tdz4rch14Nhz58rK_lAs6ErKPdS\r'),('15wh1a1223','STUD','BVRW','15wh1a1223@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9704792334','1','1','\r'),('15wh1A1224','STUD','BVRW','15wh1a1224@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9666771234','1','1','https://drive.google.com/open?id=1hBnKz6IlFuKbMeYDpFVc11YrSsHbv0bQ\r'),('15WH1A1225','STUD','BVRW','15wh1a1225@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9989299137','1','1','\r'),('15wh1a1226','STUD','BVRW','15wh1a1226@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8074634303','1','1','\r'),('15WH1A1227','STUD','BVRW','15wh1a1227@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7330898996','1','1','\r'),('15WH1A1228','STUD','BVRW','15wh1a1228@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8125605384','1','1','https://drive.google.com/open?id=1OmsY8uzLunIIPTWfyk5NzKxxcDgfD7bu\r'),('15wh1a1230','STUD','BVRW','15wh1a1230@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8008299290','1','1','\r'),('15WH1A1231','STUD','BVRW','15wh1a1231@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9515943303','1','1','\r'),('15wh1a1232','STUD','BVRW','15wh1a1232@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7093603753','1','1','\r'),('15wh1a1233','STUD','BVRW','15wh1a1233@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8008994994','1','1','\r'),('15wh1a1234','STUD','BVRW','15wh1a1234@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9063174294','1','1','https://drive.google.com/open?id=1F_Pn8x8tWBvdjkNdiMeSo6gFnQswXcbX\r'),('15wh1a1235','STUD','BVRW','15wh1a1235@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9848579267','1','1','https://drive.google.com/open?id=1w2uO0FIyvM82IeHQSVT4Pap1SntrDBZW\r'),('15wh1a1236','STUD','BVRW','15wh1a1236@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9951947352','1','1','https://drive.google.com/open?id=1AJsEED9LBP6LbswzUi9Nh96XX-EaEgZo\r'),('15WH1A1237','STUD','BVRW','15wh1a1237@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7331142412','1','1','\r'),('15wh1a1238','STUD','BVRW','15wh1a1238@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8125962724','1','1','https://drive.google.com/open?id=1xrr5vm-Bvu3Wkg0XDl_kIeRxUX_amf2b\r'),('15wh1a1239','STUD','BVRW','15wh1a1239@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7013647722','1','1','\r'),('15WH1A1240','STUD','BVRW','15wh1a1240@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9490978771','1','1','https://drive.google.com/open?id=1fZdi68UQCCYSRMkK83fOTvs5R_CQTfUI\r'),('15wh1a1241','STUD','BVRW','15wh1a1241@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9908092909','1','1','\r'),('15wh1a1242','STUD','BVRW','15wh1a1242@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9133435434','1','1','https://drive.google.com/open?id=1_8hrBu7cdHZhUFe_Ws05Fzlp4isBdvtu\r'),('15wh1a1243','STUD','BVRW','15wh1a1243@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9573920460','1','1','\r'),('15WH1A1244','STUD','BVRW','15wh1a1244@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9494891503','1','1','\r'),('15wh1a1245','STUD','BVRW','15wh1a1245@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9177209898','1','1','\r'),('15wh1a1246','STUD','BVRW','15wh1a1246@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9640759432','1','1','https://drive.google.com/open?id=1wUxDIA03h15p4Ty1d40Rhq8oc_cari7x\r'),('15wh1a1247','STUD','BVRW','15wh1a1247@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7036095486','1','1','https://drive.google.com/open?id=1s-_aEABBDJYvVv5LRyN5VaM56VBu3h85\r'),('15WH1A1249','STUD','BVRW','15wh1a1249@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9542841827','1','1','https://drive.google.com/open?id=1JP3KMF66I1idqRRE9gUZ8LLrhXR1q1a7\r'),('15wh1a1250','STUD','BVRW','15wh1a1250@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9390801641','1','1','https://drive.google.com/open?id=1N-vLSGyG5WzQxtDk2L23xqmd_n6la22H\r'),('15wh1a1251','STUD','BVRW','15wh1a1251@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9550953072','1','1','\r'),('15wh1a1253','STUD','BVRW','15wh1a1253@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8790633620','1','1','\r'),('15wh1a1254','STUD','BVRW','15wh1a1254@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8978557408','1','1','https://drive.google.com/open?id=12knqSVJYwIEwLr7AMY0z1j7-b9PV8pPS\r'),('15wh1a1255','STUD','BVRW','15wh1a1255@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7032334440','1','1','https://drive.google.com/open?id=1t2NDHFoqkQKpudg0XgYhMw_csWd-zZ0n\r'),('15wh1a1256','STUD','BVRW','15wh1a1256@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9989148605','1','1','https://drive.google.com/open?id=1gzZs_5ZEpCg3BLnoRtZqk_K7G_kCAcoY\r'),('15wh1a1257','STUD','BVRW','15wh1a1257@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9010739999','1','1','\r'),('15WH1A1258','STUD','BVRW','15wh1a1258@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7331130339','1','1','https://drive.google.com/open?id=1rluBT19r8pPYmO0fFiYELZaNzDdOgMQ3\r'),('15WH1A1259','STUD','BVRW','15wh1a1259@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8179507791','1','1','https://drive.google.com/open?id=1OROVuTuLZWfe7x0UC1vFr_kxR1qNtHgR\r'),('15wh1a1260','STUD','BVRW','15wh1a1260@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9177975224','1','1',NULL),('16WH5A0201','STUD','BVRW','16wh5a0201@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9502513080','1','1','https://drive.google.com/open?id=1miv56nq2a27ocqC0pVrtlkVWnA5Y3Cz7\r'),('16WH5A0202','STUD','BVRW','16wh5a0202@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9908441721','1','1','\r'),('16WH5A0203','STUD','BVRW','16wh5a0203@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9603122023','1','1','https://drive.google.com/open?id=1yGtLP0mwqP6q4Vo1GjTDpaJLoCumT2AR\r'),('16WH5A0204','STUD','BVRW','16wh5a0204@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9010835309','1','1','https://drive.google.com/open?id=1DWdLt-7xLhs4GSINLcG42YHWau3zcA-7\r'),('16WH5A0205','STUD','BVRW','16wh5a0205@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9502467973','1','1','https://drive.google.com/open?id=1t5tLkyat6LY31T5zuKsyw8hK6KqtiGWT\r'),('16WH5A0206','STUD','BVRW','16wh5a0206@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9652468078','1','1','https://drive.google.com/open?id=1RwE6pQKxZ6SI7cPKwTc63ji-9M11bwRW\r'),('16WH5A0207','STUD','BVRW','16wh5a0207@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8985024662','1','1','https://drive.google.com/open?id=1bxxhC84IZXQsopYj2BGzEAW00VyMsZXR\r'),('16WH5A0208','STUD','BVRW','16wh5a0208@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9640873389','1','1','https://drive.google.com/open?id=1nSqYFkgboIeYxiSJN_MXXEetkYZ9i_8l\r'),('16WH5A0209','STUD','BVRW','16wh5a0209@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9550167275','1','1','https://drive.google.com/open?id=1OnRKPmIGD4vOV3y3AF1PzrsrGP0f4QG1\r'),('16WH5A0210','STUD','BVRW','16wh5a0210@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8501873656','1','1','https://drive.google.com/open?id=1e3GF62WeNsCj7soWH9HwESoC-Nf1gx_c\r'),('16WH5A0211','STUD','BVRW','16wh5a0211@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7013587847','1','1','https://drive.google.com/open?id=12gMFYv8hs28btd9dU9gI3jhK3LOEgGxE\r'),('16WH5A0212','STUD','BVRW','16wh5a0212@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8106292318','1','1','https://drive.google.com/open?id=16uy_0pYNJtqN7OHToUzTgeSKlyYRYoGa\r'),('16wh5a0401','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9491594798','1','1','https://drive.google.com/open?id=1UhAUsuCfpIvObKQBTLmA5Qlxx8-uFWzi\r'),('16wh5a0402','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9640191814','1','1','https://drive.google.com/open?id=1Y7IkuzuJewog4ZTeHAWZuzikq-3jAxZV\r'),('16wh5a0403','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9700934930','1','1','https://drive.google.com/open?id=1YIV9hhQoJ7C4Ny1ecdR0vaKe67BGgzzh\r'),('16wh5a0404','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9177371169','1','1','https://drive.google.com/open?id=1NNzj7SJ8to2qVzoYp8RdiWi4KqFHzQCg\r'),('16WH5A0405','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9493860415','1','1','https://drive.google.com/open?id=1Xx5krlhrGv_-UdG8MgX9EL8LjWKqLj0-\r'),('16wh5a0406','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9618021537','1','1','https://drive.google.com/open?id=1tIvHQ1i-OawrVDnSnodzujFfJqQxBJ7L\r'),('16wh5a0407','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9121980939','1','1','https://drive.google.com/open?id=1cLuDYyZmAotcFOcrBty5wKqXhmjfPKbT\r'),('16wh5a0408','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8978538194','1','1','https://drive.google.com/open?id=10tuVWkMufjuS2RnmCIzJDfUgx2ditPQo\r'),('16wh5a0409','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9154163939','1','1','https://drive.google.com/open?id=1SgBNcHMvseiwpWBhkaTvl6GtX8x0yWGn\r'),('16WH5A0410','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9491241570','1','1','https://drive.google.com/open?id=16ZUkrcCnINtRAKCvcowQFmcisUeKQCyk\r'),('16WH5A0411','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9182474413','1','1','https://drive.google.com/open?id=1-0PfXe5eINpKJTu3j2oFoiZKJyG0Y8yN\r'),('16wh5a0412','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7660889957','1','1','https://drive.google.com/open?id=1KqRJA6yIknolNRU36lHZ8rQp-GEYrimh\r'),('16wh5a0413','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9553508727','1','1','https://drive.google.com/open?id=18JTAuWECXpJDoCDeLjUxPqYFKtqVkLls\r'),('16wh5a0414','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9059583083','1','1','https://drive.google.com/open?id=1NxQL7-keQzZAmoGWf5WS1EvUoG_lXu3k\r'),('16wh5a0415','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7013568864','1','1','https://drive.google.com/open?id=14IPVfRJQz0HUtqUOztsfhJfDsevW9909\r'),('16wh5a0416','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9100754152','1','1','https://drive.google.com/open?id=1V2l8euwignHVk9rF7oFctYuqljIPIu39\r'),('16wh5a0417','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','8790928832','1','1','https://drive.google.com/open?id=1PMvNJDBw-RQoLkjtQIvqDfAIQDom2Rqk\r'),('16WH5A0418','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9030709422','1','1','https://drive.google.com/open?id=1fDBeRBbkcJ3GarIlMp5vFXLL_bFieIMn\r'),('16WH5A0419','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9948712042','1','1','https://drive.google.com/open?id=1MTVdKWyg6KO-Dw9v6G6joUHvajEO8kbm\r'),('16WH5A0420','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9848368510','1','1','https://drive.google.com/open?id=1SwZFoiM9rVuO8xmOsufiI14TFq7cBLob\r'),('16wh5a0421','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7285916945','1','1','https://drive.google.com/open?id=1093pkYr6-eVSaApKsvxWo1fE7oTxyJcl\r'),('16wh5a0422','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9618714826','1','1','https://drive.google.com/open?id=1c8m3H5EOBSoE2HZ4R5vhlR2t3GUnX9em\r'),('16wh5a0423','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','7330957845','1','1','https://drive.google.com/open?id=1EVWI3R9yJ3W8CI0crJyfRe9pAGnbSsvd\r'),('16WH5A0424','STUD','BVRW','','15e7b15d9bc3bfc26c44fdaf1b97df23','9553205914','1','1','https://drive.google.com/open?id=1Xc7uq1k-NN6C2yMpPeezFnM360kl_6fa\r'),('16WH5A0501','STUD','BVRW','16wh5a0501@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','7036900202','1','1','https://drive.google.com/open?id=1pgjbCSDbjOtZVsZeC_5ob9rVstK7bDOs\r'),('16WH5A0502','STUD','BVRW','16wh5a0502@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8523007680','1','1','https://drive.google.com/open?id=1R_K54-MVwabsZQgm9IqgldsNRVn0wprk\r'),('16WH5A0503','STUD','BVRW','16wh5a0503@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','9700886601','1','1','https://drive.google.com/open?id=13gKwuvceznLaN-D1WU6rXtSNuTjqnQP3\r'),('16WH5A0504','STUD','BVRW','16wh5a0504@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8500695901','1','1','\r'),('16WH5A0505','STUD','BVRW','16wh5a0505@bvrithyderabad.edu.in','15e7b15d9bc3bfc26c44fdaf1b97df23','8106021138','1','1','https://drive.google.com/open?id=1GC_CQuA1LUXaXRla_8yKmYdj57ZXFgOv\r');
/*!40000 ALTER TABLE `user_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_types`
--

DROP TABLE IF EXISTS `user_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_types` (
  `id` varchar(6) NOT NULL,
  `user_type_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_types`
--

LOCK TABLES `user_types` WRITE;
/*!40000 ALTER TABLE `user_types` DISABLE KEYS */;
INSERT INTO `user_types` VALUES ('STUD','Student');
/*!40000 ALTER TABLE `user_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verified_education_details`
--

DROP TABLE IF EXISTS `verified_education_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `verified_education_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roll_no` varchar(10) NOT NULL,
  `certificate_degree_name` varchar(100) NOT NULL,
  `major` varchar(100) NOT NULL,
  `institute_university_name` varchar(100) DEFAULT NULL,
  `board` varchar(100) DEFAULT NULL,
  `passing_year` int(4) DEFAULT NULL,
  `percentage` decimal(5,2) DEFAULT NULL,
  `cgpa` decimal(2,1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `education_details_ibfk_1` (`roll_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verified_education_details`
--

LOCK TABLES `verified_education_details` WRITE;
/*!40000 ALTER TABLE `verified_education_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `verified_education_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-18  0:14:50
