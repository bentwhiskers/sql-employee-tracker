-- create database
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
-- use database
USE company_db;


-- add table for department
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(30),

);
-- add table for role
CREATE TABLE roles (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);
-- add table for employee
CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
)