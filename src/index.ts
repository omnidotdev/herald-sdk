import type {
	AddSuppressionVariables,
	CreateApiKeyVariables,
	CreateDomainVariables,
	CreateWebhookVariables,
	ListMessagesVariables,
	ListSuppressionsVariables,
	SendEmailBatchVariables,
	SendEmailVariables,
} from "./generated/client";
import { createClient } from "./generated/client";

const DEFAULT_BASE_URL = "https://api.herald.omni.dev/graphql";

export interface HeraldOptions {
	/** A Herald API key (hk_...). Sent as a Bearer token. */
	apiKey: string;
	/** GraphQL endpoint; defaults to Herald's hosted API. */
	baseUrl?: string;
	/** Extra headers merged into every request. */
	headers?: Record<string, string>;
}

/**
 * Create a Herald client.
 *
 * ```ts
 * const herald = createHerald({ apiKey: process.env.HERALD_API_KEY! });
 * await herald.emails.send({ from: "you@example.com", to: "a@b.com",
 *   subject: "Hi", html: "<p>Hello</p>" });
 * ```
 *
 * Methods are thin, typed wrappers over the generated GraphQL client; reach for
 * `herald.raw` for any operation not surfaced here.
 */
export const createHerald = ({
	apiKey,
	baseUrl = DEFAULT_BASE_URL,
	headers,
}: HeraldOptions) => {
	const client = createClient(baseUrl, {
		headers: { ...headers, authorization: `Bearer ${apiKey}` },
	});

	return {
		emails: {
			/** Send a transactional message. */
			send: (input: SendEmailVariables["input"]) => client.sendEmail({ input }),
			/**
			 * Send up to 100 distinct messages in one call. Each message succeeds
			 * or fails independently; the payload carries a per-message result.
			 */
			sendBatch: (input: SendEmailBatchVariables["input"]) =>
				client.sendEmailBatch({ input }),
			/** Resend a previously sent message by id. */
			resend: (id: string) => client.resendEmail({ id }),
			/** List messages, newest first. */
			list: (variables?: ListMessagesVariables) =>
				client.listMessages(variables ?? {}),
			/** Fetch a single message with its delivery/engagement events. */
			get: (rowId: string) => client.getMessage({ rowId }),
		},
		domains: {
			list: () => client.listDomains(),
			create: (input: CreateDomainVariables["input"]) =>
				client.createDomain({ input }),
			verify: (id: string) => client.verifyDomain({ id }),
		},
		apiKeys: {
			list: () => client.listApiKeys(),
			create: (input: CreateApiKeyVariables["input"]) =>
				client.createApiKey({ input }),
			revoke: (apiKeyId: string) => client.revokeApiKey({ apiKeyId }),
		},
		suppressions: {
			list: (variables?: ListSuppressionsVariables) =>
				client.listSuppressions(variables ?? {}),
			add: (input: AddSuppressionVariables["input"]) =>
				client.addSuppression({ input }),
			remove: (address: string) => client.removeSuppression({ address }),
		},
		webhooks: {
			list: () => client.listWebhooks(),
			create: (input: CreateWebhookVariables["input"]) =>
				client.createWebhook({ input }),
			delete: (id: string) => client.deleteWebhook({ id }),
		},
		/** The underlying generated GraphQL client (escape hatch). */
		raw: client,
	};
};

export type Herald = ReturnType<typeof createHerald>;

export type { Client } from "./generated/client";
export { createClient } from "./generated/client";
