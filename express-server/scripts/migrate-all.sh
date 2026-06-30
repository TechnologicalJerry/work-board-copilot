#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
SERVICES_DIR="$ROOT_DIR/services"

# Services that use Prisma (PostgreSQL)
PRISMA_SERVICES=(
  "identity-service"
  "user-service"
  "organization-service"
  "workspace-service"
  "team-service"
  "project-service"
  "sprint-service"
  "board-service"
  "task-service"
  "file-service"
  "report-service"
  "time-tracking-service"
  "billing-service"
  "automation-service"
)

SUCCESS=()
FAILED=()

echo "======================================"
echo " BoardPilot AI - Run All Migrations"
echo "======================================"
echo ""

for service in "${PRISMA_SERVICES[@]}"; do
  service_dir="$SERVICES_DIR/$service"

  if [[ ! -d "$service_dir" ]]; then
    echo "⚠️  Skipping $service — directory not found"
    continue
  fi

  if [[ ! -f "$service_dir/prisma/schema.prisma" ]]; then
    echo "⚠️  Skipping $service — no prisma/schema.prisma"
    continue
  fi

  echo "──────────────────────────────────────"
  echo "🔄  Migrating: $service"
  echo ""

  if (cd "$service_dir" && npx prisma migrate deploy 2>&1); then
    echo "✅  $service — migration complete"
    SUCCESS+=("$service")
  else
    echo "❌  $service — migration FAILED"
    FAILED+=("$service")
  fi
  echo ""
done

echo "======================================"
echo " Migration Summary"
echo "======================================"
echo "✅  Success (${#SUCCESS[@]}): ${SUCCESS[*]:-none}"
echo "❌  Failed  (${#FAILED[@]}): ${FAILED[*]:-none}"

if [[ ${#FAILED[@]} -gt 0 ]]; then
  exit 1
fi
