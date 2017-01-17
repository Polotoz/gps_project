-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 10, 2017 at 09:58 PM
-- Server version: 5.7.13-0ubuntu0.16.04.2
-- PHP Version: 7.0.8-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `markers`
--
DROP DATABASE `markers`;
CREATE DATABASE IF NOT EXISTS `markers` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `markers`;

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `type_id` int(15) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`id`, `lat`, `lng`, `type_id`, `active`, `created_at`) VALUES
(17, '48.7', '2.3333', 1, 0, '2017-01-10 20:38:10'),
(18, '48.8667', '2.3333', 3, 0, '2017-01-10 20:38:10'),
(19, '43.583395416611', '1.4482628822327', 1, 0, '2017-01-10 20:38:10'),
(20, '43.581600135214', '1.4489280700684', 3, 0, '2017-01-10 20:38:10'),
(21, '43.581856607262', '1.4488315105439', 4, 0, '2017-01-10 20:38:10'),
(22, '43.581771116701', '1.448863697052', 1, 0, '2017-01-10 20:38:10'),
(23, '48.8628', '2.3292', 4, 0, '2017-01-10 20:38:10'),
(24, '48.8628', '2.3292', 5, 0, '2017-01-10 20:38:10'),
(25, '48.8628', '2.3292', 3, 0, '2017-01-10 20:38:10'),
(26, '48.8628', '2.3292', 3, 0, '2017-01-10 20:38:10'),
(27, '48.8628', '2.3292', 2, 0, '2017-01-10 20:38:10'),
(28, '48.8628', '2.3292', 4, 0, '2017-01-10 20:38:10'),
(29, '48.8628', '2.3292', 3, 0, '2017-01-10 20:38:10'),
(30, '43.581747801072', '1.4489495277405', 3, 0, '2017-01-10 20:38:10'),
(31, '43.581592363316', '1.4490139007569', 2, 0, '2017-01-10 20:38:10'),
(32, '43.58149910047', '1.449035358429', 3, 0, '2017-01-10 20:38:10'),
(33, '43.579711534665', '1.4497112751008', 2, 0, '2017-01-10 20:38:10'),
(34, '43.578973176779', '1.4500438690186', 4, 0, '2017-01-10 20:38:10'),
(35, '48.8582', '2.3387', 4, 0, '2017-01-10 20:38:10'),
(36, '43.6043', '1.4437', 5, 0, '2017-01-10 20:38:10'),
(37, '43.6043', '1.4437', 3, 0, '2017-01-10 20:38:10'),
(38, '43.6043', '1.4437', 4, 0, '2017-01-10 20:38:10'),
(39, '43.578685603363', '1.4502048015595', 2, 0, '2017-01-10 20:38:10'),
(40, '43.578522385407', '1.4501296997071', 3, 0, '2017-01-10 20:38:10'),
(41, '43.578522385407', '1.4501296997071', 0, 0, '2017-01-10 20:38:10'),
(42, '43.578545702285', '1.4501726150513', 0, 0, '2017-01-10 20:38:10'),
(43, '43.578545702285', '1.4501726150513', 0, 0, '2017-01-10 20:38:10'),
(44, '43.578584563728', '1.4501404285431', 0, 0, '2017-01-10 20:38:10'),
(45, '43.6043', '1.4437', 0, 0, '2017-01-10 20:38:10'),
(46, '43.6043', '1.4437', 1, 0, '2017-01-10 20:38:10'),
(47, '43.6043', '1.4437', 0, 0, '2017-01-10 20:38:10'),
(48, '43.6043', '1.4437', 0, 0, '2017-01-10 20:38:10'),
(49, '43.6043', '1.4437', 0, 0, '2017-01-10 20:38:10'),
(50, '43.6043', '1.4437', 0, 0, '2017-01-10 20:38:10'),
(51, '43.6043', '1.4437', 1, 0, '2017-01-10 20:38:10'),
(52, '43.6043', '1.4437', 1, 0, '2017-01-10 20:38:10'),
(53, '43.6043', '1.4437', 1, 0, '2017-01-10 20:38:10'),
(54, '43.6043', '1.4437', 1, 0, '2017-01-10 20:38:10'),
(55, '43.6043', '1.4437', 1, 0, '2017-01-10 20:38:10'),
(56, '43.6043', '1.4437', 1, 0, '2017-01-10 20:38:10'),
(57, '43.6043', '1.4437', 0, 0, '2017-01-10 20:38:10'),
(58, '43.6043', '1.4437', 0, 0, '2017-01-10 20:38:10'),
(59, '43.6043', '1.4437', 3, 0, '2017-01-10 20:38:10'),
(60, '43.6043', '1.4437', 4, 0, '2017-01-10 20:38:10'),
(61, '43.6043', '1.4437', 4, 0, '2017-01-10 20:38:10'),
(62, '43.6043', '1.4437', 3, 0, '2017-01-10 20:38:10'),
(63, '43.6043', '1.4437', 4, 0, '2017-01-10 20:38:10'),
(64, '43.6043', '1.4437', 3, 0, '2017-01-10 20:38:10'),
(65, '43.6043', '1.4437', 3, 0, '2017-01-10 20:38:10'),
(66, '43.6043', '1.4437', 3, 0, '2017-01-10 20:38:10'),
(67, '43.6043', '1.4437', 5, 0, '2017-01-10 20:38:10'),
(68, '43.6043', '1.4437', 5, 0, '2017-01-10 20:38:10'),
(69, '43.6043', '1.4437', 3, 0, '2017-01-10 20:38:33'),
(70, '43.6043', '1.4437', 3, 0, '2017-01-10 20:38:55'),
(71, '43.6043', '1.4437', 4, 0, '2017-01-10 20:42:02');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id_type` int(11) NOT NULL,
  `nom_type` varchar(255) NOT NULL,
  `icone_type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`id_type`, `nom_type`, `icone_type`) VALUES
(1, 'accident', 'http://localhost/icon/accident.png'),
(2, 'bouchon', 'http://localhost/icon/bouchon.png'),
(3, 'radar', 'http://localhost/icon/radar.png'),
(4, 'police', 'http://localhost/icon/police.png'),
(5, 'danger', 'http://localhost/icon/danger.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id_type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
DELIMITER $$
--
-- Events
--
DROP EVENT `disable_markers`$$
CREATE DEFINER=`root`@`localhost` EVENT `disable_markers` ON SCHEDULE EVERY 5 MINUTE STARTS '2017-01-10 21:39:56' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE list SET active = 0 WHERE created_at < (NOW() - INTERVAL 120 MINUTE)$$

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
