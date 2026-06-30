#!/usr/bin/env bash
set -euo pipefail

# Service name → port mapping
declare -A SERVICES=(
  ["api-gateway"]="3000"
  ["identity-service"]="3001"
  ["user-service"]="3002"
  ["organization-service"]="3003"
  ["workspace-service"]="3004"
  ["team-service"]="3005"
  ["project-service"]="3006"
  ["sprint-service"]="3007"
  ["board-service"]="3008"
  ["task-service"]="3009"
  ["notification-service"]="3010"
  ["comment-service"]="3011"
  ["document-service"]="3012"
  ["search-service"]="3013"
  ["file-service"]="3014"
  ["report-service"]="3015"
  ["time-tracking-service"]="3016"
  ["automation-service"]="3017"
  ["ai-service"]="3018"
  ["audit-service"]="3019"
  ["billing-service"]="3020"
)

HOST="${HEALTH_CHECK_HOST:-localhost}"
TIMEOUT="${HEALTH_CHECK_TIMEOUT:-5}"

HEALTHY=()
UNHEALTHY=()

echo "======================================"
echo " BoardPilot AI - Health Check All"
echo " Host: $HOST"
echo "======================================"
echo ""

for service in $(echo "${!SERVICES[@]}" | tr ' ' '\n' | sort); do
  port="${SERVICES[$service]}"
  url="http://$HOST:$port/health"

  printf "%-30s %s  " "$service" "(port $port)"

  response=$(curl -sf --max-time "$TIMEOUT" "$url" 2>/dev/null || true)

  if [[ -n "$response" ]]; then
    status=$(echo "$response" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('status','unknown'))" 2>/dev/null || echo "ok")
    echo "✅ $status"
    HEALTHY+=("$service")
  else
    echo "❌ unreachable"
    UNHEALTHY+=("$service")
  fi
done

echo ""
echo "======================================"
echo " Health Check Summary"
echo "======================================"
echo "✅  Healthy   (${#HEALTHY[@]}): ${HEALTHY[*]:-none}"
echo "❌  Unhealthy (${#UNHEALTHY[@]}): ${UNHEALTHY[*]:-none}"

if [[ ${#UNHEALTHY[@]} -gt 0 ]]; then
  exit 1
fi
