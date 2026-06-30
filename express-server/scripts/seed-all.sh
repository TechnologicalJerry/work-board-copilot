#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
SERVICES_DIR="$ROOT_DIR/services"

# Services with seed files
SEED_SERVICES=(
  "identity-service"
  "organization-service"
  "project-service"
  "billing-service"
)

SUCCESS=()
FAILED=()
SKIPPED=()

echo "======================================"
echo " BoardPilot AI - Run All Seeds"
echo "======================================"
echo ""

for service in "${SEED_SERVICES[@]}"; do
  service_dir="$SERVICES_DIR/$service"

  if [[ ! -d "$service_dir" ]]; then
    echo "⚠️  Skipping $service — directory not found"
    SKIPPED+=("$service")
    continue
  fi

  seed_file=""
  if [[ -f "$service_dir/prisma/seed.ts" ]]; then
    seed_file="$service_dir/prisma/seed.ts"
  elif [[ -f "$service_dir/prisma/seed.js" ]]; then
    seed_file="$service_dir/prisma/seed.js"
  fi

  if [[ -z "$seed_file" ]]; then
    echo "⚠️  Skipping $service — no prisma/seed.ts found"
    SKIPPED+=("$service")
    continue
  fi

  echo "──────────────────────────────────────"
  echo "🌱  Seeding: $service"
  echo ""

  if (cd "$service_dir" && npx ts-node "$seed_file" 2>&1); then
    echo "✅  $service — seed complete"
    SUCCESS+=("$service")
  else
    echo "❌  $service — seed FAILED"
    FAILED+=("$service")
  fi
  echo ""
done

echo "======================================"
echo " Seed Summary"
echo "======================================"
echo "✅  Success (${#SUCCESS[@]}): ${SUCCESS[*]:-none}"
echo "⏭️  Skipped (${#SKIPPED[@]}): ${SKIPPED[*]:-none}"
echo "❌  Failed  (${#FAILED[@]}): ${FAILED[*]:-none}"

if [[ ${#FAILED[@]} -gt 0 ]]; then
  exit 1
fi
