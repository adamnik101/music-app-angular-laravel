-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2022 at 08:07 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ng_music`
--

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` int(10) NOT NULL,
  `artist` varchar(100) NOT NULL,
  `cover` varchar(250) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `artist`, `cover`, `created_at`, `updated_at`) VALUES
(2, 'Travis Scott', 'travis.jpg', '2022-09-14 21:32:19', '2022-09-19 17:40:32'),
(3, 'Jala Brat', 'jala.jpg', '2022-09-14 21:32:00', '2022-09-19 17:40:32'),
(5, 'M83', 'm83.jpg', '2022-09-14 21:32:20', '2022-09-19 17:40:32'),
(6, 'Modjo', 'modjo.jpg', '2022-09-14 21:32:30', '2022-09-19 17:40:32'),
(7, 'Bonnie Tyler', 'bonnie.jpg', '2022-09-14 21:32:31', '2022-09-19 17:40:32'),
(10, 'George Michael', '1663701937_1663334252_gmichael.jpg', '2022-09-20 17:25:37', '2022-09-20 17:25:37'),
(11, 'Don Toliver', '1663706246_ab6761610000e5ebb99b82c644fb2a558dc28cd4.jpg', '2022-09-20 18:37:26', '2022-09-20 18:37:26'),
(12, 'Night Lovell', '1663707000_750x750.jpg', '2022-09-20 18:50:00', '2022-09-20 18:50:00'),
(13, 'Makar', '1663709775_makar.jpg', '2022-09-20 19:36:15', '2022-09-20 19:36:15'),
(15, 'SDM', '1663734635_sdm.jpg', '2022-09-21 02:30:35', '2022-09-21 02:30:35'),
(16, 'Sting', '1663737199_sting.jpg', '2022-09-21 03:13:19', '2022-09-21 03:13:19'),
(17, 'Kylie Minogue', '1663737407_Fever_US_Edition.jpg', '2022-09-21 03:16:47', '2022-09-21 03:16:47'),
(18, 'Dxrk', '1663746344_7948e0ed-4e0b-463a-b688-5d98cadb32a3.jpg', '2022-09-21 05:45:44', '2022-09-21 05:45:44');

-- --------------------------------------------------------

--
-- Table structure for table `playlist`
--

CREATE TABLE `playlist` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `cover` varchar(250) NOT NULL DEFAULT 'no_image.jpg',
  `user_id` int(10) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `playlist`
--

INSERT INTO `playlist` (`id`, `name`, `cover`, `user_id`, `updated_at`, `created_at`) VALUES
(1, 'Late Night Drive', 'latend.jpg', 1, '2022-09-16 00:11:04', '2022-09-16 00:11:26'),
(20, 'Classic Oldies', '1663408761_oldies.jpg', 1, '2022-09-17 21:39:13', '2022-09-17 07:59:21'),
(21, 'Top Trap', '1663410829_trap.jpg', 1, '2022-09-17 08:33:49', '2022-09-17 08:33:49'),
(22, 'Gaming Music', '1663411097_gaming.jpg', 1, '2022-09-17 21:41:08', '2022-09-17 08:38:17'),
(49, 'Top French Rap', '1663459243_french.jpg', 1, '2022-09-17 22:02:01', '2022-09-17 22:00:43'),
(56, 'Chill Hits', '1663534702_chill.jpg', 1, '2022-09-18 18:58:22', '2022-09-18 18:58:22');

-- --------------------------------------------------------

--
-- Table structure for table `playlist_track`
--

CREATE TABLE `playlist_track` (
  `id` int(10) NOT NULL,
  `playlist_id` int(10) NOT NULL,
  `track_id` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `playlist_track`
--

INSERT INTO `playlist_track` (`id`, `playlist_id`, `track_id`, `created_at`) VALUES
(1, 1, 5, '2022-09-14 20:42:57'),
(9, 1, 6, '2022-09-17 12:24:06'),
(58, 20, 23, '2022-09-21 05:18:55'),
(59, 20, 22, '2022-09-21 05:19:10'),
(60, 20, 19, '2022-09-21 05:19:24'),
(61, 20, 20, '2022-09-21 05:19:36'),
(62, 1, 18, '2022-09-21 06:29:59'),
(63, 56, 18, '2022-09-21 07:33:31'),
(64, 56, 6, '2022-09-21 07:33:43'),
(65, 21, 4, '2022-09-21 07:34:10'),
(66, 21, 5, '2022-09-21 07:34:16'),
(67, 21, 25, '2022-09-21 07:34:28'),
(68, 22, 21, '2022-09-21 07:37:11'),
(69, 22, 6, '2022-09-21 07:37:23'),
(70, 49, 13, '2022-09-21 07:37:32'),
(71, 21, 27, '2022-09-21 07:47:31');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE `tracks` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `src` varchar(200) NOT NULL,
  `explicit` tinyint(1) NOT NULL DEFAULT 0,
  `plays` int(250) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tracks`
--

INSERT INTO `tracks` (`id`, `name`, `src`, `explicit`, `plays`, `created_at`, `updated_at`) VALUES
(4, 'Can\'t say', '1663746382_Travis Scott - CAN\'T SAY.mp3', 1, 51351673, '2022-09-14 21:31:45', '2022-09-21 15:42:27'),
(5, 'Wake up', 'Travis Scott - WAKE UP (Audio).mp3', 0, 17, '2022-09-14 21:31:45', '2022-09-21 16:06:57'),
(6, 'Midnight City', 'Midnight City m83 (Audio).mp3', 0, 12, '2022-09-14 21:31:45', '2022-09-21 15:40:30'),
(13, 'Passat', '1663734675_Passat.mp3', 0, 14, '2022-09-21 04:31:15', '2022-09-21 15:42:29'),
(18, 'Mood', '1663737047_Makar - Mood (Prod. Ryder&Seno X KNGZ) (1).mp3', 0, 10, '2022-09-21 05:10:47', '2022-09-21 15:39:22'),
(19, 'Careless Whisper', '1663737080_George Michael - Careless Whisper (Official Video).mp3', 0, 9, '2022-09-21 05:11:20', '2022-09-21 15:42:39'),
(20, 'Total Eclipse of the Heart', '1663737109_Bonnie Tyler - Total Eclipse of the Heart (Video).mp3', 0, 4, '2022-09-21 05:11:50', '2022-09-21 15:40:19'),
(21, 'Lady', '1663737136_Modjo - Lady (Hear Me Tonight) (Official Video).mp3', 0, 7, '2022-09-21 05:12:16', '2022-09-21 15:14:41'),
(22, 'Shape of my Heart', '1663737242_Sting - Shape of My Heart (Leon).mp3', 0, 21, '2022-09-21 05:14:02', '2022-09-21 15:44:16'),
(23, 'Can\'t Get You Out Of My Head', '1663737453_Kylie Minogue - Can\'t Get You Out Of My Head (Official Video).mp3', 0, 34, '2022-09-21 05:17:33', '2022-09-21 15:44:14'),
(24, 'No Idea', '1663743985_Don Toliver - No Idea [Official Music Video].mp3', 0, 0, '2022-09-21 07:06:25', '2022-09-21 07:06:25'),
(25, 'Still Cold', '1663744002_Night Lovell - Still Cold _ Liberty Walk GTR Performance.mp3', 0, 2, '2022-09-21 07:06:42', '2022-09-21 15:39:18'),
(27, 'Rave', '1663746365_RAVE.mp3', 0, 23, '2022-09-21 07:46:05', '2022-09-21 15:44:09');

-- --------------------------------------------------------

--
-- Table structure for table `track_artist`
--

CREATE TABLE `track_artist` (
  `id` int(10) NOT NULL,
  `track_id` int(10) NOT NULL,
  `artist_id` int(10) NOT NULL,
  `artist_owner` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `track_artist`
--

INSERT INTO `track_artist` (`id`, `track_id`, `artist_id`, `artist_owner`) VALUES
(5, 5, 2, 1),
(6, 6, 5, 1),
(15, 13, 15, 1),
(24, 18, 13, 1),
(25, 19, 10, 1),
(26, 20, 7, 1),
(27, 21, 6, 1),
(28, 22, 16, 1),
(29, 23, 17, 1),
(42, 24, 11, 1),
(43, 25, 12, 1),
(46, 27, 18, 1),
(47, 4, 2, 1),
(48, 4, 11, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(19) NOT NULL,
  `name` varchar(250) NOT NULL,
  `mail` varchar(250) NOT NULL,
  `pw` varchar(250) NOT NULL,
  `active` int(10) NOT NULL,
  `role_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mail`, `pw`, `active`, `role_id`) VALUES
(1, 'Adam Nikolic', 'admin@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 1, 1),
(2, 'Adam Nikolic', 'user@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `playlist_track`
--
ALTER TABLE `playlist_track`
  ADD PRIMARY KEY (`id`),
  ADD KEY `playlist_id` (`playlist_id`),
  ADD KEY `track_id` (`track_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `track_artist`
--
ALTER TABLE `track_artist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artist_id` (`artist_id`),
  ADD KEY `track_id` (`track_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `playlist`
--
ALTER TABLE `playlist`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `playlist_track`
--
ALTER TABLE `playlist_track`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `track_artist`
--
ALTER TABLE `track_artist`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `playlist_track`
--
ALTER TABLE `playlist_track`
  ADD CONSTRAINT `playlist_track_ibfk_1` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`id`),
  ADD CONSTRAINT `playlist_track_ibfk_2` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`id`);

--
-- Constraints for table `track_artist`
--
ALTER TABLE `track_artist`
  ADD CONSTRAINT `track_artist_ibfk_1` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`id`),
  ADD CONSTRAINT `track_artist_ibfk_2` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
