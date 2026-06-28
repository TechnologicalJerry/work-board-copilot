-- BoardPilot AI — PostgreSQL Initialization
-- Each service gets its own database

CREATE DATABASE boardpilot_identity;
CREATE DATABASE boardpilot_users;
CREATE DATABASE boardpilot_organizations;
CREATE DATABASE boardpilot_workspaces;
CREATE DATABASE boardpilot_teams;
CREATE DATABASE boardpilot_projects;
CREATE DATABASE boardpilot_sprints;
CREATE DATABASE boardpilot_boards;
CREATE DATABASE boardpilot_tasks;
CREATE DATABASE boardpilot_files;
CREATE DATABASE boardpilot_reports;
CREATE DATABASE boardpilot_time_tracking;
CREATE DATABASE boardpilot_billing;
CREATE DATABASE boardpilot_notifications;

-- Grant all privileges to the boardpilot user
GRANT ALL PRIVILEGES ON DATABASE boardpilot_identity TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_users TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_organizations TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_workspaces TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_teams TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_projects TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_sprints TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_boards TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_tasks TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_files TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_reports TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_time_tracking TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_billing TO boardpilot;
GRANT ALL PRIVILEGES ON DATABASE boardpilot_notifications TO boardpilot;
