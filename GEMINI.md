# Slate PACS: DCM4CHEE & OHIF Viewer Setup

This project provides a containerized medical imaging platform (PACS) integrating **DCM4CHEE Arc Light**, **OHIF Viewer**, and **Keycloak** for secure, web-based DICOM management and visualization.

## Project Overview

The architecture is built on Docker and consists of the following primary components:

- **DCM4CHEE Arc Light (PSQL):** The central DICOM archive.
  - **Services:** LDAP (for configuration), Postgres (for metadata), and Wildfly (the application server).
- **OHIF Viewer:** A modern, web-based DICOM viewer.
  - **Image:** `mceazy2700/slate-ohif-webapp`
  - **Integration:** Configured with Nginx and OAuth2-Proxy to provide secure OIDC-based authentication via Keycloak.
- **Keycloak:** Identity and Access Management (IAM).
  - Handles user authentication for both the OHIF Viewer and the DCM4CHEE administration console.
  - Includes a custom theme (`config/custom-theme`) and pre-configured realm (`config/ohif-keycloak-realm.json`).
- **Disk Monitor:** A small Node.js microservice located in `./disk-monitor/` that provides a web interface (defaulting to port 3000, configurable via `DISK_MONITOR_PORT`) for monitoring host disk usage.

## Architecture & Routing

Nginx acts as the primary reverse proxy and entry point, handling SSL and routing to internal services:

| Path | Description | Backend Service |
| :--- | :--- | :--- |
| `/ohif-viewer/` | OHIF Viewer Web Application | Nginx / Local Files |
| `/disk-usage/` | Host Disk Usage Monitor | `disk-monitor:3000` |
| `/pacs/` | DICOMweb API (QIDO-RS, WADO-RS, STOW-RS) | `arc:8080` (DCM4CHEE) |
| `/pacs-admin/` | DCM4CHEE Administration UI | `arc:8080` (DCM4CHEE) |
| `/keycloak/` | Keycloak Authentication Server | `keycloak:8080` |
| `/oauth2/` | OAuth2 Proxy endpoints | `localhost:4180` (within `ohif_viewer`) |

## Key Configuration Files

- `docker-compose.yml`: Defines the core services and their interdependencies.
- `.env`: Contains environment-specific variables (domains, ports, credentials).
- `config/app-config.js`: OHIF Viewer frontend configuration (DICOMweb data sources).
- `config/nginx.conf`: Nginx routing, SSL configuration, and security headers.
- `config/oauth2-proxy.cfg`: Configuration for OIDC integration between Nginx and Keycloak.
- `config/ohif-keycloak-realm.json`: Initial realm export for Keycloak.

## Getting Started

### Prerequisites
- Docker and Docker Compose
- SSL certificates (Expected at `config/ssl/nginx.crt` and `config/ssl/nginx.key`)
- Valid `.env` file (based on existing environment variables in `docker-compose.yml`)

### Running the Platform
To start the main PACS stack:
```bash
docker-compose up -d
```

To start the Disk Monitor utility:
```bash
cd disk-monitor
docker-compose up -d
```

## Development Conventions

- **Security:** Authentication is enforced via `auth_request` in Nginx using `oauth2-proxy`.
- **DICOMweb:** The system uses the `dicomweb` datasource. DICOM uploads are enabled.
- **Storage:** DCM4CHEE storage is mapped to `~/dcm4chee-arc/storage` and external mounts like `/mnt/dcmimages`.
- **Identity:** Keycloak admin credentials default to `admin`/`admin` unless overridden in `.env`.
