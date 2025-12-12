#!/bin/bash
#
# Publications → AI News Pipeline Runner
#
# Usage:
#   ./scripts/run-news-pipeline.sh              # Full pipeline
#   ./scripts/run-news-pipeline.sh --recent 3   # Only 3 most recent
#   ./scripts/run-news-pipeline.sh --dry-run    # Preview without API
#

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

echo "=========================================="
echo "  Publications → AI News Pipeline"
echo "=========================================="
echo ""

# Check for API key
if [ -z "$ANTHROPIC_API_KEY" ] && [[ ! " $* " =~ " --dry-run " ]]; then
    echo "Warning: ANTHROPIC_API_KEY not set"
    echo "Set it with: export ANTHROPIC_API_KEY=your-key-here"
    echo ""
    echo "Running in dry-run mode instead..."
    DRY_RUN="--dry-run"
else
    DRY_RUN=""
fi

# Check for pdf-parse
if ! node -e "require('pdf-parse')" 2>/dev/null; then
    echo "Installing pdf-parse..."
    cd "$PROJECT_DIR"
    npm install pdf-parse
fi

echo ""
echo "Step 1: Extracting PDF content..."
echo "----------------------------------"
node "$SCRIPT_DIR/extract-pdfs.cjs"

echo ""
echo "Step 2: Generating AI news articles..."
echo "---------------------------------------"
node "$SCRIPT_DIR/generate-ai-news.cjs" $DRY_RUN "$@"

echo ""
echo "=========================================="
echo "  Pipeline Complete!"
echo "=========================================="
echo ""
echo "Output files:"
echo "  - publications/publications_full.json (database)"
echo "  - src/data/posts.ts (news articles)"
echo ""
echo "To preview the site:"
echo "  npm run dev"
