-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07/10/2024 às 13:57
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cx`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `desafio`
--

CREATE TABLE `desafio` (
  `id_desafio` int(11) NOT NULL,
  `descricao_desafio` varchar(255) DEFAULT NULL,
  `solucao_desafio` longtext DEFAULT NULL,
  `resposta_desafio` longtext DEFAULT NULL,
  `status` enum('não iniciado','iniciado','concluido') DEFAULT NULL,
  `fase_id_fase` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `dica`
--

CREATE TABLE `dica` (
  `id_dicas` int(11) NOT NULL,
  `descricao_dica` longtext DEFAULT NULL,
  `desafio_id_desafio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `fase`
--

CREATE TABLE `fase` (
  `id_fase` int(11) NOT NULL,
  `descricao_fase` varchar(255) DEFAULT NULL,
  `jogo_id_jogo` int(11) DEFAULT NULL,
  `era_da_computacao` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `jogo`
--

CREATE TABLE `jogo` (
  `id_jogo` int(11) NOT NULL,
  `fases` int(2) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `tipo_jogo` enum('jogo linear','jogo livre') DEFAULT NULL,
  `era_da_computacao` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `email_usuario` varchar(100) DEFAULT NULL UNIQUE,
  `senha_usuario` varchar(45) DEFAULT NULL,
  `nome_usuario` varchar(255) DEFAULT NULL,
  `desafio_id_desafio` int(11) DEFAULT NULL,
  `jogo_id_jogo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `desafio`
--
ALTER TABLE `desafio`
  ADD PRIMARY KEY (`id_desafio`),
  ADD KEY `fase_id_fase` (`fase_id_fase`);

--
-- Índices de tabela `dica`
--
ALTER TABLE `dica`
  ADD PRIMARY KEY (`id_dicas`),
  ADD KEY `desafio_id_desafio` (`desafio_id_desafio`);

--
-- Índices de tabela `fase`
--
ALTER TABLE `fase`
  ADD PRIMARY KEY (`id_fase`),
  ADD KEY `jogo_id_jogo` (`jogo_id_jogo`);

--
-- Índices de tabela `jogo`
--
ALTER TABLE `jogo`
  ADD PRIMARY KEY (`id_jogo`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `desafio_id_desafio` (`desafio_id_desafio`),
  ADD KEY `jogo_id_jogo` (`jogo_id_jogo`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `desafio`
--
ALTER TABLE `desafio`
  MODIFY `id_desafio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `dica`
--
ALTER TABLE `dica`
  MODIFY `id_dicas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `fase`
--
ALTER TABLE `fase`
  MODIFY `id_fase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogo`
--
ALTER TABLE `jogo`
  MODIFY `id_jogo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `desafio`
--
ALTER TABLE `desafio`
  ADD CONSTRAINT `desafio_ibfk_1` FOREIGN KEY (`fase_id_fase`) REFERENCES `fase` (`id_fase`);

--
-- Restrições para tabelas `dica`
--
ALTER TABLE `dica`
  ADD CONSTRAINT `dica_ibfk_1` FOREIGN KEY (`desafio_id_desafio`) REFERENCES `desafio` (`id_desafio`);

--
-- Restrições para tabelas `fase`
--
ALTER TABLE `fase`
  ADD CONSTRAINT `fase_ibfk_1` FOREIGN KEY (`jogo_id_jogo`) REFERENCES `jogo` (`id_jogo`);

--
-- Restrições para tabelas `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`desafio_id_desafio`) REFERENCES `desafio` (`id_desafio`),
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`jogo_id_jogo`) REFERENCES `jogo` (`id_jogo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
