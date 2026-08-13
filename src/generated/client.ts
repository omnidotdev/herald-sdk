import { graphql, type ResultOf, type VariablesOf } from "gql.tada";
import { GraphQLClient } from "graphql-request";

export const ListApiKeysDocument = graphql(`
  query ListApiKeys {
    apiKeys {
      nodes {
        rowId
        name
        keyPrefix
        permission
        lastUsedAt
        expiresAt
        createdAt
      }
    }
  }
`);

export const CreateApiKeyDocument = graphql(`
  mutation CreateApiKey($input: CreateApiKeyInput!) {
    createApiKey(input: $input) {
      apiKeyId
      secret
      createdAt
    }
  }
`);

export const RevokeApiKeyDocument = graphql(`
  mutation RevokeApiKey($apiKeyId: UUID!) {
    revokeApiKey(apiKeyId: $apiKeyId) {
      apiKeyId
    }
  }
`);

export const ListDomainsDocument = graphql(`
  query ListDomains {
    sendingDomains {
      nodes {
        rowId
        domain
        dkimSelector
        dkimPublicKey
        verified
        trackingSubdomain
      }
    }
  }
`);

export const CreateDomainDocument = graphql(`
  mutation CreateDomain($input: CreateSendingDomainInput!) {
    createSendingDomain(input: $input) {
      domainId
      dkimSelector
      dkimPublicKey
      verified
    }
  }
`);

export const VerifyDomainDocument = graphql(`
  mutation VerifyDomain($id: UUID!) {
    verifySendingDomain(id: $id) {
      domainId
      verified
    }
  }
`);

export const SendEmailDocument = graphql(`
  mutation SendEmail($input: SendMessageInput!) {
    sendMessage(input: $input) {
      messageId
      status
      to
      subject
    }
  }
`);

export const SendEmailBatchDocument = graphql(`
  mutation SendEmailBatch($input: SendMessagesInput!) {
    sendMessages(input: $input) {
      results {
        index
        ok
        messageId
        status
        code
        error
      }
    }
  }
`);

export const ResendEmailDocument = graphql(`
  mutation ResendEmail($id: UUID!) {
    resendMessage(id: $id) {
      messageId
      status
    }
  }
`);

export const ListMessagesDocument = graphql(`
  query ListMessages($filter: MessageFilter, $first: Int, $after: Cursor) {
    messages(filter: $filter, first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        rowId
        toAddress
        fromAddress
        subject
        status
        createdAt
      }
    }
  }
`);

export const GetMessageDocument = graphql(`
  query GetMessage($rowId: UUID!) {
    message(rowId: $rowId) {
      rowId
      toAddress
      fromAddress
      subject
      status
      createdAt
      messageEvents {
        nodes {
          type
          occurredAt
        }
      }
    }
  }
`);

export const ListSuppressionsDocument = graphql(`
  query ListSuppressions($first: Int, $after: Cursor) {
    suppressions(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        rowId
        address
        reason
        createdAt
      }
    }
  }
`);

export const AddSuppressionDocument = graphql(`
  mutation AddSuppression($input: AddSuppressionInput!) {
    addSuppression(input: $input) {
      suppressionId
      address
      reason
    }
  }
`);

export const RemoveSuppressionDocument = graphql(`
  mutation RemoveSuppression($address: String!) {
    removeSuppression(address: $address) {
      address
    }
  }
`);

export const ListWebhooksDocument = graphql(`
  query ListWebhooks {
    webhookEndpoints {
      nodes {
        rowId
        url
        eventTypes
        createdAt
      }
    }
  }
`);

export const CreateWebhookDocument = graphql(`
  mutation CreateWebhook($input: CreateWebhookInput!) {
    createWebhook(input: $input) {
      webhookId
      url
      secret
    }
  }
`);

export const DeleteWebhookDocument = graphql(`
  mutation DeleteWebhook($id: UUID!) {
    deleteWebhook(id: $id) {
      webhookId
    }
  }
`);

export type ListApiKeysResult = ResultOf<typeof ListApiKeysDocument>;
export type CreateApiKeyResult = ResultOf<typeof CreateApiKeyDocument>;
export type CreateApiKeyVariables = VariablesOf<typeof CreateApiKeyDocument>;
export type RevokeApiKeyResult = ResultOf<typeof RevokeApiKeyDocument>;
export type RevokeApiKeyVariables = VariablesOf<typeof RevokeApiKeyDocument>;
export type ListDomainsResult = ResultOf<typeof ListDomainsDocument>;
export type CreateDomainResult = ResultOf<typeof CreateDomainDocument>;
export type CreateDomainVariables = VariablesOf<typeof CreateDomainDocument>;
export type VerifyDomainResult = ResultOf<typeof VerifyDomainDocument>;
export type VerifyDomainVariables = VariablesOf<typeof VerifyDomainDocument>;
export type SendEmailResult = ResultOf<typeof SendEmailDocument>;
export type SendEmailVariables = VariablesOf<typeof SendEmailDocument>;
export type SendEmailBatchResult = ResultOf<typeof SendEmailBatchDocument>;
export type SendEmailBatchVariables = VariablesOf<typeof SendEmailBatchDocument>;
export type ResendEmailResult = ResultOf<typeof ResendEmailDocument>;
export type ResendEmailVariables = VariablesOf<typeof ResendEmailDocument>;
export type ListMessagesResult = ResultOf<typeof ListMessagesDocument>;
export type ListMessagesVariables = VariablesOf<typeof ListMessagesDocument>;
export type GetMessageResult = ResultOf<typeof GetMessageDocument>;
export type GetMessageVariables = VariablesOf<typeof GetMessageDocument>;
export type ListSuppressionsResult = ResultOf<typeof ListSuppressionsDocument>;
export type ListSuppressionsVariables = VariablesOf<typeof ListSuppressionsDocument>;
export type AddSuppressionResult = ResultOf<typeof AddSuppressionDocument>;
export type AddSuppressionVariables = VariablesOf<typeof AddSuppressionDocument>;
export type RemoveSuppressionResult = ResultOf<typeof RemoveSuppressionDocument>;
export type RemoveSuppressionVariables = VariablesOf<typeof RemoveSuppressionDocument>;
export type ListWebhooksResult = ResultOf<typeof ListWebhooksDocument>;
export type CreateWebhookResult = ResultOf<typeof CreateWebhookDocument>;
export type CreateWebhookVariables = VariablesOf<typeof CreateWebhookDocument>;
export type DeleteWebhookResult = ResultOf<typeof DeleteWebhookDocument>;
export type DeleteWebhookVariables = VariablesOf<typeof DeleteWebhookDocument>;

export const createClient = (url: string, options?: ConstructorParameters<typeof GraphQLClient>[1]) => {
  const gql = new GraphQLClient(url, options);
  return {
    listApiKeys: () => gql.request(ListApiKeysDocument),
    createApiKey: (variables: CreateApiKeyVariables) => gql.request(CreateApiKeyDocument, variables),
    revokeApiKey: (variables: RevokeApiKeyVariables) => gql.request(RevokeApiKeyDocument, variables),
    listDomains: () => gql.request(ListDomainsDocument),
    createDomain: (variables: CreateDomainVariables) => gql.request(CreateDomainDocument, variables),
    verifyDomain: (variables: VerifyDomainVariables) => gql.request(VerifyDomainDocument, variables),
    sendEmail: (variables: SendEmailVariables) => gql.request(SendEmailDocument, variables),
    sendEmailBatch: (variables: SendEmailBatchVariables) => gql.request(SendEmailBatchDocument, variables),
    resendEmail: (variables: ResendEmailVariables) => gql.request(ResendEmailDocument, variables),
    listMessages: (variables: ListMessagesVariables) => gql.request(ListMessagesDocument, variables),
    getMessage: (variables: GetMessageVariables) => gql.request(GetMessageDocument, variables),
    listSuppressions: (variables: ListSuppressionsVariables) => gql.request(ListSuppressionsDocument, variables),
    addSuppression: (variables: AddSuppressionVariables) => gql.request(AddSuppressionDocument, variables),
    removeSuppression: (variables: RemoveSuppressionVariables) => gql.request(RemoveSuppressionDocument, variables),
    listWebhooks: () => gql.request(ListWebhooksDocument),
    createWebhook: (variables: CreateWebhookVariables) => gql.request(CreateWebhookDocument, variables),
    deleteWebhook: (variables: DeleteWebhookVariables) => gql.request(DeleteWebhookDocument, variables),
  };
};

export type Client = ReturnType<typeof createClient>;