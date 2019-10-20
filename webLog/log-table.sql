/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50529
Source Host           : 127.0.0.1:3306
Source Database       : weblog

Target Server Type    : MYSQL
Target Server Version : 50529
File Encoding         : 65001

Date: 2019-10-20 17:31:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for log
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `method` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'GET',
  `ip` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` int(11) NOT NULL,
  `referrer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `url` (`url`),
  KEY `method` (`method`),
  KEY `ip` (`ip`),
  KEY `time` (`time`),
  KEY `referrer` (`referrer`(191))
) ENGINE=InnoDB AUTO_INCREMENT=83136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
