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
-- Table structure for table `college`
--

DROP TABLE IF EXISTS `college`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `college` (
  `id` varchar(6) COLLATE utf8mb4_general_ci NOT NULL,
  `college_name` varchar(400) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college`
--

LOCK TABLES `college` WRITE;
/*!40000 ALTER TABLE `college` DISABLE KEYS */;
/*!40000 ALTER TABLE `college` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `profile_description` text COLLATE utf8mb4_general_ci,
  `establish_date` date DEFAULT NULL,
  `company_website_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `company_image` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education_detail`
--

DROP TABLE IF EXISTS `education_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `education_detail` (
  `roll_no` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `certificate_degree_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `major` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `institute_university_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `board` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `completion_date` date DEFAULT NULL,
  `percentage` decimal(2,2) DEFAULT NULL,
  `cgpa` decimal(1,1) DEFAULT NULL,
  `proof_document` blob,
  PRIMARY KEY (`roll_no`,`certificate_degree_name`,`major`),
  CONSTRAINT `education_detail_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profile` (`roll_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_detail`
--

LOCK TABLES `education_detail` WRITE;
/*!40000 ALTER TABLE `education_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `education_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience_detail`
--

DROP TABLE IF EXISTS `experience_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `experience_detail` (
  `roll_no` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `is_current_job` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `job_title` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `company_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `job_location_city` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `proof_document` blob,
  PRIMARY KEY (`roll_no`,`start_date`,`end_date`),
  CONSTRAINT `experience_detail_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profile` (`roll_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience_detail`
--

LOCK TABLES `experience_detail` WRITE;
/*!40000 ALTER TABLE `experience_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `experience_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_post`
--

DROP TABLE IF EXISTS `job_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_post` (
  `id` int(11) NOT NULL,
  `job_type` int(11) DEFAULT NULL,
  `job_profile` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `job_description` text COLLATE utf8mb4_general_ci,
  `job_location` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_active` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_date_for_application` date DEFAULT NULL,
  `salary_lpa` int(11) DEFAULT NULL,
  `related_document` blob,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `job_type` (`job_type`),
  CONSTRAINT `job_post_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `job_post_ibfk_2` FOREIGN KEY (`job_type`) REFERENCES `job_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_post`
--

LOCK TABLES `job_post` WRITE;
/*!40000 ALTER TABLE `job_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_post_activity`
--

DROP TABLE IF EXISTS `job_post_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_post_activity` (
  `roll_no` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `job_post_id` int(11) NOT NULL,
  `apply_date` date DEFAULT NULL,
  PRIMARY KEY (`roll_no`,`job_post_id`),
  KEY `job_post_id` (`job_post_id`),
  CONSTRAINT `job_post_activity_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profile` (`roll_no`),
  CONSTRAINT `job_post_activity_ibfk_2` FOREIGN KEY (`job_post_id`) REFERENCES `job_post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_post_activity`
--

LOCK TABLES `job_post_activity` WRITE;
/*!40000 ALTER TABLE `job_post_activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_post_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_process`
--

DROP TABLE IF EXISTS `job_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_process` (
  `id` int(11) NOT NULL,
  `job_post_id` int(11) DEFAULT NULL,
  `job_stage_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `job_post_id` (`job_post_id`),
  KEY `job_stage_id` (`job_stage_id`),
  CONSTRAINT `job_process_ibfk_1` FOREIGN KEY (`job_post_id`) REFERENCES `job_post` (`id`),
  CONSTRAINT `job_process_ibfk_2` FOREIGN KEY (`job_stage_id`) REFERENCES `job_stage` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_process`
--

LOCK TABLES `job_process` WRITE;
/*!40000 ALTER TABLE `job_process` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_stage`
--

DROP TABLE IF EXISTS `job_stage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_stage` (
  `id` int(11) NOT NULL,
  `stage_name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_stage`
--

LOCK TABLES `job_stage` WRITE;
/*!40000 ALTER TABLE `job_stage` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_stage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_type`
--

DROP TABLE IF EXISTS `job_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `job_type` (
  `id` int(11) NOT NULL,
  `job_type_name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_type`
--

LOCK TABLES `job_type` WRITE;
/*!40000 ALTER TABLE `job_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill_set`
--

DROP TABLE IF EXISTS `skill_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `skill_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_set_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_set`
--

LOCK TABLES `skill_set` WRITE;
/*!40000 ALTER TABLE `skill_set` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_job_application`
--

DROP TABLE IF EXISTS `student_job_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_job_application` (
  `roll_no` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `job_process_id` int(11) NOT NULL,
  `is_qualified` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`roll_no`,`job_process_id`),
  KEY `job_process_id` (`job_process_id`),
  CONSTRAINT `student_job_application_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profile` (`roll_no`),
  CONSTRAINT `student_job_application_ibfk_2` FOREIGN KEY (`job_process_id`) REFERENCES `job_process` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_job_application`
--

LOCK TABLES `student_job_application` WRITE;
/*!40000 ALTER TABLE `student_job_application` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_job_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_profile`
--

DROP TABLE IF EXISTS `student_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_profile` (
  `roll_no` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`roll_no`),
  CONSTRAINT `student_profile_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `user_account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_profile`
--

LOCK TABLES `student_profile` WRITE;
/*!40000 ALTER TABLE `student_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_skill_set`
--

DROP TABLE IF EXISTS `student_skill_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_skill_set` (
  `roll_no` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `skill_set_id` int(11) NOT NULL,
  `skill_level` int(11) DEFAULT NULL,
  PRIMARY KEY (`roll_no`,`skill_set_id`),
  KEY `skill_set_id` (`skill_set_id`),
  CONSTRAINT `student_skill_set_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student_profile` (`roll_no`),
  CONSTRAINT `student_skill_set_ibfk_2` FOREIGN KEY (`skill_set_id`) REFERENCES `skill_set` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_skill_set`
--

LOCK TABLES `student_skill_set` WRITE;
/*!40000 ALTER TABLE `student_skill_set` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_skill_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_account`
--

DROP TABLE IF EXISTS `user_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_account` (
  `id` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `user_type_id` varchar(6) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `college_id` varchar(6) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` text COLLATE utf8mb4_general_ci,
  `is_active` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_number` int(10) DEFAULT NULL,
  `sms_notification_active` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email_notification_active` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_image` blob,
  PRIMARY KEY (`id`),
  KEY `user_type_id` (`user_type_id`),
  KEY `college_id` (`college_id`),
  CONSTRAINT `user_account_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`),
  CONSTRAINT `user_account_ibfk_2` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_account`
--

LOCK TABLES `user_account` WRITE;
/*!40000 ALTER TABLE `user_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_type` (
  `id` varchar(6) COLLATE utf8mb4_general_ci NOT NULL,
  `user_type_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-28  9:36:32
