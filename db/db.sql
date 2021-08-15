-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: nft
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Collection`
--

DROP TABLE IF EXISTS `Collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Collection` (
  `UserId` varchar(100) DEFAULT NULL,
  `CollectionId` varchar(100) NOT NULL,
  `CollectionName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `Logo` varchar(200) NOT NULL,
  PRIMARY KEY (`CollectionId`),
  KEY `Collection_FK` (`UserId`),
  CONSTRAINT `Collection_FK` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Collection`
--

LOCK TABLES `Collection` WRITE;
/*!40000 ALTER TABLE `Collection` DISABLE KEYS */;
INSERT INTO `Collection` VALUES ('0xda5C8ee681981487d2cCB097A058d706fe34566E','070f2070-c4a2-11eb-aed3-07e28495d11f','Animals','This collection has animal portraits','070a3e70-c4a2-11eb-aed3-07e28495d11f.jpeg'),('0xda5C8ee681981487d2cCB097A058d706fe34566E','07269350-c492-11eb-bcf3-6d26016d413e','Animals','This collection has animal portraits',''),('0xda5C8ee681981487d2cCB097A058d706fe34566E','3f801730-c4a1-11eb-9c00-8b0dc77ba17f','Animals','This collection has animal portraits',''),('0xda5C8ee681981487d2cCB097A058d706fe34566E','8ecf2150-c4a1-11eb-aed3-07e28495d11f','Animals','This collection has animal portraits',''),('0xda5C8ee681981487d2cCB097A058d706fe34566E','f0013890-c4a2-11eb-af09-7f072c0aa3fc','Animals','This collection has animal portraits','efe04310-c4a2-11eb-af09-7f072c0aa3fc.jpeg');
/*!40000 ALTER TABLE `Collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Currency`
--

DROP TABLE IF EXISTS `Currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Currency` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `DisplayName` varchar(100) NOT NULL,
  `Type` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Currency`
--

LOCK TABLES `Currency` WRITE;
/*!40000 ALTER TABLE `Currency` DISABLE KEYS */;
INSERT INTO `Currency` VALUES (1,'BXMI','BXMI'),(2,'USDT','USDT');
/*!40000 ALTER TABLE `Currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Favorite`
--

DROP TABLE IF EXISTS `Favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Favorite` (
  `UserId` varchar(100) NOT NULL,
  `ItemId` varchar(100) NOT NULL,
  PRIMARY KEY (`UserId`,`ItemId`),
  KEY `Favorite_FK` (`ItemId`),
  CONSTRAINT `Favorite_FK` FOREIGN KEY (`ItemId`) REFERENCES `Item` (`ItemId`),
  CONSTRAINT `Favorite_FK_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Favorite`
--

LOCK TABLES `Favorite` WRITE;
/*!40000 ALTER TABLE `Favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `Favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Item`
--

DROP TABLE IF EXISTS `Item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Item` (
  `ItemId` varchar(100) NOT NULL,
  `Image` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Name` varchar(100) NOT NULL,
  `ExternalLink` varchar(2048) DEFAULT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `CollectionId` varchar(100) NOT NULL,
  `SensitiveContent` tinyint(1) NOT NULL DEFAULT '0',
  `Address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ItemId`),
  KEY `Item_FK` (`CollectionId`),
  CONSTRAINT `Item_FK` FOREIGN KEY (`CollectionId`) REFERENCES `Collection` (`CollectionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Item`
--

LOCK TABLES `Item` WRITE;
/*!40000 ALTER TABLE `Item` DISABLE KEYS */;
INSERT INTO `Item` VALUES ('302ae940-c492-11eb-bcf3-6d26016d413e','https://ipfs.io/ipfs/QmTwuWoWuWv99vJFq3AmxqbnoQ33EmGRbng7UGGUwuhYfF','Robot 4','https://nft.bitxmi.com/','Description for Robot 4','07269350-c492-11eb-bcf3-6d26016d413e',1,NULL),('cbeb0ae0-c492-11eb-bac8-fb5a97ce1db1','https://ipfs.io/ipfs/QmTwuWoWuWv99vJFq3AmxqbnoQ33EmGRbng7UGGUwuhYfF','Robot 5','https://nft.bitxmi.com/','Description for Robot 5','07269350-c492-11eb-bcf3-6d26016d413e',1,NULL);
/*!40000 ALTER TABLE `Item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Level`
--

DROP TABLE IF EXISTS `Level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Level` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Value1` int NOT NULL,
  `Value2` int NOT NULL,
  `ItemId` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Level_FK` (`ItemId`),
  CONSTRAINT `Level_FK` FOREIGN KEY (`ItemId`) REFERENCES `Item` (`ItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Level`
--

LOCK TABLES `Level` WRITE;
/*!40000 ALTER TABLE `Level` DISABLE KEYS */;
INSERT INTO `Level` VALUES (1,'Power',8,10,'302ae940-c492-11eb-bcf3-6d26016d413e'),(2,'Speed',3,6,'cbeb0ae0-c492-11eb-bac8-fb5a97ce1db1');
/*!40000 ALTER TABLE `Level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Properties`
--

DROP TABLE IF EXISTS `Properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Properties` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Value` varchar(100) NOT NULL,
  `ItemId` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Properties_FK` (`ItemId`),
  CONSTRAINT `Properties_FK` FOREIGN KEY (`ItemId`) REFERENCES `Item` (`ItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Properties`
--

LOCK TABLES `Properties` WRITE;
/*!40000 ALTER TABLE `Properties` DISABLE KEYS */;
INSERT INTO `Properties` VALUES (1,'Made','Iron','cbeb0ae0-c492-11eb-bac8-fb5a97ce1db1'),(2,'Shape','Human Like','cbeb0ae0-c492-11eb-bac8-fb5a97ce1db1');
/*!40000 ALTER TABLE `Properties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sale`
--

DROP TABLE IF EXISTS `Sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sale` (
  `ItemId` varchar(100) NOT NULL,
  `Price` decimal(10,3) NOT NULL,
  `EndingPrice` decimal(10,3) DEFAULT NULL,
  `CurrencyId` int NOT NULL,
  `Type` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ItemId`),
  KEY `Sale_FK_1` (`CurrencyId`),
  CONSTRAINT `Sale_FK` FOREIGN KEY (`ItemId`) REFERENCES `Item` (`ItemId`),
  CONSTRAINT `Sale_FK_1` FOREIGN KEY (`CurrencyId`) REFERENCES `Currency` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sale`
--

LOCK TABLES `Sale` WRITE;
/*!40000 ALTER TABLE `Sale` DISABLE KEYS */;
INSERT INTO `Sale` VALUES ('302ae940-c492-11eb-bcf3-6d26016d413e',100.530,1.410,1,'Sale'),('cbeb0ae0-c492-11eb-bac8-fb5a97ce1db1',1.530,1.410,2,'Sale');
/*!40000 ALTER TABLE `Sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Stats`
--

DROP TABLE IF EXISTS `Stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Stats` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Value1` int NOT NULL,
  `Value2` int NOT NULL,
  `ItemId` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Stats_FK` (`ItemId`),
  CONSTRAINT `Stats_FK` FOREIGN KEY (`ItemId`) REFERENCES `Item` (`ItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stats`
--

LOCK TABLES `Stats` WRITE;
/*!40000 ALTER TABLE `Stats` DISABLE KEYS */;
INSERT INTO `Stats` VALUES (1,'Quantity',3,4,'302ae940-c492-11eb-bcf3-6d26016d413e'),(2,'Quality',4,5,'cbeb0ae0-c492-11eb-bac8-fb5a97ce1db1');
/*!40000 ALTER TABLE `Stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `UserId` varchar(100) NOT NULL,
  `UserName` varchar(100) DEFAULT NULL,
  `EmailAddress` varchar(100) DEFAULT NULL,
  `Bio` varchar(100) DEFAULT NULL,
  `CreatedDateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('0x6325498d782087790A7f85d3f7457E1C5bCad8f6','Shahid','shahid@gmail.com','I am Shahid','2021-05-25 04:44:50'),('0xda5C8ee681981487d2cCB097A058d706fe34566E','Sheraz','m.sherazleo79@gmail.com','I am Leo','2021-05-25 04:44:50');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `View`
--

DROP TABLE IF EXISTS `View`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `View` (
  `UserId` varchar(100) NOT NULL,
  `ItemId` varchar(100) NOT NULL,
  PRIMARY KEY (`UserId`,`ItemId`),
  KEY `View_FK` (`ItemId`),
  CONSTRAINT `View_FK_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `View`
--

LOCK TABLES `View` WRITE;
/*!40000 ALTER TABLE `View` DISABLE KEYS */;
INSERT INTO `View` VALUES ('0xda5C8ee681981487d2cCB097A058d706fe34566E','1');
/*!40000 ALTER TABLE `View` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'nft'
--
/*!50003 DROP PROCEDURE IF EXISTS `GetAllItemsForMarket` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetAllItemsForMarket`()
BEGIN
		SELECT i.ItemId,i.Name, s.Price,c.`Type` as Currency,i.Image, i.Description,i.ExternalLink,i.SensitiveContent 
	FROM Item i
	INNER JOIN Sale s ON i.ItemId =s.ItemId 
	INNER JOIN Currency c ON s.CurrencyId = c.Id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetItemById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetItemById`(ItemId VARCHAR(100))
BEGIN
	SELECT i.ItemId,i.Name, s.Price,c.`Type` as Currency,i.Image, i.Description,i.ExternalLink,i.SensitiveContent 
	FROM Item i
	INNER JOIN Sale s ON i.ItemId =s.ItemId 
	INNER JOIN Currency c ON s.CurrencyId = c.Id 
	WHERE i.ItemId=ItemId;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetItemsFromCollection` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetItemsFromCollection`(UserId VARCHAR(100),CollectionId VARCHAR(100))
BEGIN
	SELECT i.ItemId,i.Name, s.Price,c.`Type` as Currency,i.Image, i.Description,i.ExternalLink,i.SensitiveContent 
	FROM Item i
	LEFT OUTER JOIN Sale s ON i.ItemId =s.ItemId 
	LEFT OUTER JOIN Currency c ON s.CurrencyId = c.Id 
	INNER JOIN Collection co ON co.CollectionId=i.CollectionId
	WHERE i.CollectionId=CollectionId AND co.UserId=UserId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUnMintedItems` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetUnMintedItems`()
BEGIN
	SELECT i.ItemId,i.Name, s.Price,c.`Type` as Currency,i.Image, i.Description,i.ExternalLink,i.SensitiveContent 
	FROM Item i
INNER JOIN Sale s ON i.ItemId =s.ItemId 
INNER JOIN Currency c ON s.CurrencyId = c.Id 
WHERE i.Address IS NULL;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-06 13:43:21
