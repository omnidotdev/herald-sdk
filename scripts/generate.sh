#!/usr/bin/env bash
#
# Regenerate the Herald SDK client from herald-api's schema + operations.
#
# Run from the herald-sdk package root. Requires the odk CLI: either on PATH or
# pass its location via ODK=/path/to/odk. Run from here (not herald-api) so odk
# does not auto-load herald-api/odk.config.ts, whose TS loader needs a `bun
# eval` that newer Bun replaced with `bun -e`.
set -euo pipefail

ODK="${ODK:-odk}"
API="../herald-api"

"$ODK" generate "$API/src/generated/graphql/schema.graphql" \
  --out src/generated \
  --targets sdk \
  --operations "$API/src/operations/**/*.graphql"

# Fixup: graphql-request's GraphQLClient takes RequestConfig, but odk emits the
# narrower RequestInit for the options param. Use the constructor's own type.
sed -i 's/options?: RequestInit/options?: ConstructorParameters<typeof GraphQLClient>[1]/' \
  src/generated/client.ts

# Refresh the gql.tada schema env so the generated documents are typed.
bunx gql.tada generate-output
