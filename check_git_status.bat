@echo off
title Git Sync - Chittortech-Website
powershell -ExecutionPolicy Bypass -File "%~dp0check_git_status.ps1"
pause