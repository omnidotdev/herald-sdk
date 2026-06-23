# @omnidotdev/herald

Official TypeScript SDK for [Herald](https://send.omni.dev), the Omni
transactional and marketing email API.

## Install

```sh
bun add @omnidotdev/herald
```

## Usage

```ts
import { createHerald } from "@omnidotdev/herald";

const herald = createHerald({ apiKey: process.env.HERALD_API_KEY! });

// Send a transactional email
await herald.emails.send({
  from: "you@yourdomain.com",
  to: "customer@example.com",
  subject: "Welcome, {{name}}",
  html: "<p>Hello {{name}} 👋</p>",
  variables: { name: "Ada" },
});

// List recent messages and inspect one
const { messages } = await herald.emails.list({ first: 20 });
const detail = await herald.emails.get(messages.nodes[0].rowId);

// Manage sending domains, API keys, suppressions, and webhooks
await herald.domains.create({ domain: "mail.yourdomain.com" });
await herald.suppressions.add({ address: "bounced@example.com" });
await herald.webhooks.create({
  url: "https://yourapp.com/herald",
  eventTypes: ["delivered", "bounced", "opened", "clicked"],
});
```

Every method is a typed wrapper over the generated GraphQL client. For any
operation not surfaced on the facade, use the escape hatch:

```ts
herald.raw.sendEmail({ input: { /* ... */ } });
```

## Codegen

The client in `src/generated` is produced from herald-api's committed schema and
operation documents via [ODK](https://github.com/omnidotdev/odk). Regenerate
with `bun run generate` (requires the `odk` CLI on `PATH` or `ODK=/path/to/odk`).
