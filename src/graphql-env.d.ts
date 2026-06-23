/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
	AddContactInput: {
		kind: "INPUT_OBJECT";
		name: "AddContactInput";
		isOneOf: false;
		inputFields: [
			{
				name: "audienceId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "attributes";
				type: { kind: "SCALAR"; name: "JSON"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	AddSuppressionInput: {
		kind: "INPUT_OBJECT";
		name: "AddSuppressionInput";
		isOneOf: false;
		inputFields: [
			{
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "reason";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	ApiKey: {
		kind: "OBJECT";
		name: "ApiKey";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			expiresAt: {
				name: "expiresAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			keyPrefix: {
				name: "keyPrefix";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			lastUsedAt: {
				name: "lastUsedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			permission: {
				name: "permission";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	ApiKeyCondition: {
		kind: "INPUT_OBJECT";
		name: "ApiKeyCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lastUsedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "keyPrefix";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "permission";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "expiresAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	ApiKeyConnection: {
		kind: "OBJECT";
		name: "ApiKeyConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "ApiKeyEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "ApiKey"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	ApiKeyEdge: {
		kind: "OBJECT";
		name: "ApiKeyEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "ApiKey"; ofType: null };
				};
			};
		};
	};
	ApiKeyFilter: {
		kind: "INPUT_OBJECT";
		name: "ApiKeyFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lastUsedAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "keyPrefix";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "permission";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "expiresAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "ApiKeyFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "ApiKeyFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "ApiKeyFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	ApiKeyOrderBy: {
		name: "ApiKeyOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "HASHED_KEY_ASC"
			| "HASHED_KEY_DESC"
			| "LAST_USED_AT_ASC"
			| "LAST_USED_AT_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC"
			| "NAME_ASC"
			| "NAME_DESC"
			| "KEY_PREFIX_ASC"
			| "KEY_PREFIX_DESC"
			| "PERMISSION_ASC"
			| "PERMISSION_DESC"
			| "EXPIRES_AT_ASC"
			| "EXPIRES_AT_DESC";
	};
	AttachmentInput: {
		kind: "INPUT_OBJECT";
		name: "AttachmentInput";
		isOneOf: false;
		inputFields: [
			{
				name: "filename";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "contentType";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "content";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	Audience: {
		kind: "OBJECT";
		name: "Audience";
		fields: {
			broadcasts: {
				name: "broadcasts";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "BroadcastConnection"; ofType: null };
				};
			};
			contacts: {
				name: "contacts";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "ContactConnection"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
		};
	};
	AudienceCondition: {
		kind: "INPUT_OBJECT";
		name: "AudienceCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	AudienceConnection: {
		kind: "OBJECT";
		name: "AudienceConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "AudienceEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Audience"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	AudienceEdge: {
		kind: "OBJECT";
		name: "AudienceEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Audience"; ofType: null };
				};
			};
		};
	};
	AudienceFilter: {
		kind: "INPUT_OBJECT";
		name: "AudienceFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "broadcasts";
				type: {
					kind: "INPUT_OBJECT";
					name: "AudienceToManyBroadcastFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "broadcastsExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "contacts";
				type: {
					kind: "INPUT_OBJECT";
					name: "AudienceToManyContactFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "contactsExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "AudienceFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "AudienceFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "AudienceFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	AudienceMutationPayload: {
		kind: "OBJECT";
		name: "AudienceMutationPayload";
		fields: {
			audienceId: {
				name: "audienceId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	AudienceOrderBy: {
		name: "AudienceOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "NAME_ASC"
			| "NAME_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC"
			| "UPDATED_AT_ASC"
			| "UPDATED_AT_DESC";
	};
	AudienceToManyBroadcastFilter: {
		kind: "INPUT_OBJECT";
		name: "AudienceToManyBroadcastFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "BroadcastFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "BroadcastFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "BroadcastFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	AudienceToManyContactFilter: {
		kind: "INPUT_OBJECT";
		name: "AudienceToManyContactFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "ContactFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "ContactFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "ContactFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	Boolean: unknown;
	BooleanFilter: {
		kind: "INPUT_OBJECT";
		name: "BooleanFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "isNull";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "equalTo";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notEqualTo";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "distinctFrom";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notDistinctFrom";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "in";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "notIn";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "lessThan";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lessThanOrEqualTo";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThan";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThanOrEqualTo";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
		];
	};
	Broadcast: {
		kind: "OBJECT";
		name: "Broadcast";
		fields: {
			audience: {
				name: "audience";
				type: { kind: "OBJECT"; name: "Audience"; ofType: null };
			};
			audienceId: {
				name: "audienceId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			fromAddress: {
				name: "fromAddress";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			html: {
				name: "html";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			status: {
				name: "status";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			subject: {
				name: "subject";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			text: {
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
		};
	};
	BroadcastCondition: {
		kind: "INPUT_OBJECT";
		name: "BroadcastCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "audienceId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "fromAddress";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "subject";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "html";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "status";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	BroadcastConnection: {
		kind: "OBJECT";
		name: "BroadcastConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "BroadcastEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Broadcast"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	BroadcastEdge: {
		kind: "OBJECT";
		name: "BroadcastEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Broadcast"; ofType: null };
				};
			};
		};
	};
	BroadcastFilter: {
		kind: "INPUT_OBJECT";
		name: "BroadcastFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "audienceId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "fromAddress";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "subject";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "html";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "status";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "audience";
				type: { kind: "INPUT_OBJECT"; name: "AudienceFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "BroadcastFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "BroadcastFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "BroadcastFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	BroadcastMutationPayload: {
		kind: "OBJECT";
		name: "BroadcastMutationPayload";
		fields: {
			broadcastId: {
				name: "broadcastId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	BroadcastOrderBy: {
		name: "BroadcastOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "AUDIENCE_ID_ASC"
			| "AUDIENCE_ID_DESC"
			| "NAME_ASC"
			| "NAME_DESC"
			| "FROM_ADDRESS_ASC"
			| "FROM_ADDRESS_DESC"
			| "SUBJECT_ASC"
			| "SUBJECT_DESC"
			| "HTML_ASC"
			| "HTML_DESC"
			| "TEXT_ASC"
			| "TEXT_DESC"
			| "STATUS_ASC"
			| "STATUS_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC"
			| "UPDATED_AT_ASC"
			| "UPDATED_AT_DESC";
	};
	CancelScheduledMessagePayload: {
		kind: "OBJECT";
		name: "CancelScheduledMessagePayload";
		fields: {
			scheduledMessageId: {
				name: "scheduledMessageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	Contact: {
		kind: "OBJECT";
		name: "Contact";
		fields: {
			address: {
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			attributes: {
				name: "attributes";
				type: { kind: "SCALAR"; name: "JSON"; ofType: null };
			};
			audience: {
				name: "audience";
				type: { kind: "OBJECT"; name: "Audience"; ofType: null };
			};
			audienceId: {
				name: "audienceId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	ContactCondition: {
		kind: "INPUT_OBJECT";
		name: "ContactCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "audienceId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "address";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	ContactConnection: {
		kind: "OBJECT";
		name: "ContactConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "ContactEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Contact"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	ContactEdge: {
		kind: "OBJECT";
		name: "ContactEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Contact"; ofType: null };
				};
			};
		};
	};
	ContactFilter: {
		kind: "INPUT_OBJECT";
		name: "ContactFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "audienceId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "address";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "audience";
				type: { kind: "INPUT_OBJECT"; name: "AudienceFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "ContactFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "ContactFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "ContactFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	ContactMutationPayload: {
		kind: "OBJECT";
		name: "ContactMutationPayload";
		fields: {
			contactId: {
				name: "contactId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	ContactOrderBy: {
		name: "ContactOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "AUDIENCE_ID_ASC"
			| "AUDIENCE_ID_DESC"
			| "ADDRESS_ASC"
			| "ADDRESS_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC";
	};
	ContactPayload: {
		kind: "OBJECT";
		name: "ContactPayload";
		fields: {
			address: {
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			contactId: {
				name: "contactId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	CreateApiKeyInput: {
		kind: "INPUT_OBJECT";
		name: "CreateApiKeyInput";
		isOneOf: false;
		inputFields: [
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "permission";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "expiresAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	CreateApiKeyPayload: {
		kind: "OBJECT";
		name: "CreateApiKeyPayload";
		fields: {
			apiKeyId: {
				name: "apiKeyId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				};
			};
			secret: {
				name: "secret";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	CreateAudienceInput: {
		kind: "INPUT_OBJECT";
		name: "CreateAudienceInput";
		isOneOf: false;
		inputFields: [
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	CreateAudiencePayload: {
		kind: "OBJECT";
		name: "CreateAudiencePayload";
		fields: {
			audienceId: {
				name: "audienceId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	CreateBroadcastInput: {
		kind: "INPUT_OBJECT";
		name: "CreateBroadcastInput";
		isOneOf: false;
		inputFields: [
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "audienceId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "from";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "subject";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "html";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	CreateBroadcastPayload: {
		kind: "OBJECT";
		name: "CreateBroadcastPayload";
		fields: {
			broadcastId: {
				name: "broadcastId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			status: {
				name: "status";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	CreateMessageBodyInput: {
		kind: "INPUT_OBJECT";
		name: "CreateMessageBodyInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageBody";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "INPUT_OBJECT";
						name: "MessageBodyInput";
						ofType: null;
					};
				};
				defaultValue: null;
			},
		];
	};
	CreateMessageBodyPayload: {
		kind: "OBJECT";
		name: "CreateMessageBodyPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			messageBody: {
				name: "messageBody";
				type: { kind: "OBJECT"; name: "MessageBody"; ofType: null };
			};
			messageBodyEdge: {
				name: "messageBodyEdge";
				type: { kind: "OBJECT"; name: "MessageBodyEdge"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
		};
	};
	CreateMessageLinkInput: {
		kind: "INPUT_OBJECT";
		name: "CreateMessageLinkInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageLink";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "INPUT_OBJECT";
						name: "MessageLinkInput";
						ofType: null;
					};
				};
				defaultValue: null;
			},
		];
	};
	CreateMessageLinkPayload: {
		kind: "OBJECT";
		name: "CreateMessageLinkPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			messageLink: {
				name: "messageLink";
				type: { kind: "OBJECT"; name: "MessageLink"; ofType: null };
			};
			messageLinkEdge: {
				name: "messageLinkEdge";
				type: { kind: "OBJECT"; name: "MessageLinkEdge"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
		};
	};
	CreateSendingDomainInput: {
		kind: "INPUT_OBJECT";
		name: "CreateSendingDomainInput";
		isOneOf: false;
		inputFields: [
			{
				name: "domain";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	CreateSendingDomainPayload: {
		kind: "OBJECT";
		name: "CreateSendingDomainPayload";
		fields: {
			dkimPublicKey: {
				name: "dkimPublicKey";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			dkimSelector: {
				name: "dkimSelector";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			domain: {
				name: "domain";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			domainId: {
				name: "domainId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			verified: {
				name: "verified";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
		};
	};
	CreateTemplateInput: {
		kind: "INPUT_OBJECT";
		name: "CreateTemplateInput";
		isOneOf: false;
		inputFields: [
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "subject";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "html";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	CreateTemplatePayload: {
		kind: "OBJECT";
		name: "CreateTemplatePayload";
		fields: {
			createdAt: {
				name: "createdAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			templateId: {
				name: "templateId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	CreateWebhookDeliveryInput: {
		kind: "INPUT_OBJECT";
		name: "CreateWebhookDeliveryInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "webhookDelivery";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "INPUT_OBJECT";
						name: "WebhookDeliveryInput";
						ofType: null;
					};
				};
				defaultValue: null;
			},
		];
	};
	CreateWebhookDeliveryPayload: {
		kind: "OBJECT";
		name: "CreateWebhookDeliveryPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
			webhookDelivery: {
				name: "webhookDelivery";
				type: { kind: "OBJECT"; name: "WebhookDelivery"; ofType: null };
			};
			webhookDeliveryEdge: {
				name: "webhookDeliveryEdge";
				type: { kind: "OBJECT"; name: "WebhookDeliveryEdge"; ofType: null };
			};
		};
	};
	CreateWebhookInput: {
		kind: "INPUT_OBJECT";
		name: "CreateWebhookInput";
		isOneOf: false;
		inputFields: [
			{
				name: "url";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "eventTypes";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	CreateWebhookPayload: {
		kind: "OBJECT";
		name: "CreateWebhookPayload";
		fields: {
			createdAt: {
				name: "createdAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				};
			};
			secret: {
				name: "secret";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			url: {
				name: "url";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			webhookId: {
				name: "webhookId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	Cursor: unknown;
	Datetime: unknown;
	DatetimeFilter: {
		kind: "INPUT_OBJECT";
		name: "DatetimeFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "isNull";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "equalTo";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notEqualTo";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "distinctFrom";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notDistinctFrom";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "in";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "notIn";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "lessThan";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lessThanOrEqualTo";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThan";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThanOrEqualTo";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	DeleteMessageBodyInput: {
		kind: "INPUT_OBJECT";
		name: "DeleteMessageBodyInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	DeleteMessageBodyPayload: {
		kind: "OBJECT";
		name: "DeleteMessageBodyPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			messageBody: {
				name: "messageBody";
				type: { kind: "OBJECT"; name: "MessageBody"; ofType: null };
			};
			messageBodyEdge: {
				name: "messageBodyEdge";
				type: { kind: "OBJECT"; name: "MessageBodyEdge"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
		};
	};
	DeleteMessageLinkInput: {
		kind: "INPUT_OBJECT";
		name: "DeleteMessageLinkInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	DeleteMessageLinkPayload: {
		kind: "OBJECT";
		name: "DeleteMessageLinkPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			messageLink: {
				name: "messageLink";
				type: { kind: "OBJECT"; name: "MessageLink"; ofType: null };
			};
			messageLinkEdge: {
				name: "messageLinkEdge";
				type: { kind: "OBJECT"; name: "MessageLinkEdge"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
		};
	};
	DeleteWebhookDeliveryInput: {
		kind: "INPUT_OBJECT";
		name: "DeleteWebhookDeliveryInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	DeleteWebhookDeliveryPayload: {
		kind: "OBJECT";
		name: "DeleteWebhookDeliveryPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
			webhookDelivery: {
				name: "webhookDelivery";
				type: { kind: "OBJECT"; name: "WebhookDelivery"; ofType: null };
			};
			webhookDeliveryEdge: {
				name: "webhookDeliveryEdge";
				type: { kind: "OBJECT"; name: "WebhookDeliveryEdge"; ofType: null };
			};
		};
	};
	DeliverabilityRecommendation: {
		kind: "OBJECT";
		name: "DeliverabilityRecommendation";
		fields: {
			description: {
				name: "description";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			severity: {
				name: "severity";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			title: {
				name: "title";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	DeliverabilityStats: {
		kind: "OBJECT";
		name: "DeliverabilityStats";
		fields: {
			bounced: {
				name: "bounced";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			complained: {
				name: "complained";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			sent: {
				name: "sent";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	DomainDeliverabilityReport: {
		kind: "OBJECT";
		name: "DomainDeliverabilityReport";
		fields: {
			domain: {
				name: "domain";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			recommendations: {
				name: "recommendations";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "OBJECT";
								name: "DeliverabilityRecommendation";
								ofType: null;
							};
						};
					};
				};
			};
			stats: {
				name: "stats";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "DeliverabilityStats"; ofType: null };
				};
			};
			trackingSubdomain: {
				name: "trackingSubdomain";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			verified: {
				name: "verified";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
		};
	};
	Int: unknown;
	IntFilter: {
		kind: "INPUT_OBJECT";
		name: "IntFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "isNull";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "equalTo";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notEqualTo";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "distinctFrom";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notDistinctFrom";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "in";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "notIn";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "lessThan";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lessThanOrEqualTo";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThan";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThanOrEqualTo";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
		];
	};
	JSON: unknown;
	Message: {
		kind: "OBJECT";
		name: "Message";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			externalId: {
				name: "externalId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			fromAddress: {
				name: "fromAddress";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			idempotencyKey: {
				name: "idempotencyKey";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			messageBodies: {
				name: "messageBodies";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "MessageBodyConnection";
						ofType: null;
					};
				};
			};
			messageEvents: {
				name: "messageEvents";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "MessageEventConnection";
						ofType: null;
					};
				};
			};
			messageLinks: {
				name: "messageLinks";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "MessageLinkConnection";
						ofType: null;
					};
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			status: {
				name: "status";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			subject: {
				name: "subject";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			toAddress: {
				name: "toAddress";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	MessageBody: {
		kind: "OBJECT";
		name: "MessageBody";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			html: {
				name: "html";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			message: {
				name: "message";
				type: { kind: "OBJECT"; name: "Message"; ofType: null };
			};
			messageId: {
				name: "messageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			text: {
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	MessageBodyCondition: {
		kind: "INPUT_OBJECT";
		name: "MessageBodyCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "html";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageBodyConnection: {
		kind: "OBJECT";
		name: "MessageBodyConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "MessageBodyEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "MessageBody"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	MessageBodyEdge: {
		kind: "OBJECT";
		name: "MessageBodyEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "MessageBody"; ofType: null };
				};
			};
		};
	};
	MessageBodyFilter: {
		kind: "INPUT_OBJECT";
		name: "MessageBodyFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "html";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "message";
				type: { kind: "INPUT_OBJECT"; name: "MessageFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "MessageBodyFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "MessageBodyFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "MessageBodyFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageBodyInput: {
		kind: "INPUT_OBJECT";
		name: "MessageBodyInput";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "html";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageBodyOrderBy: {
		name: "MessageBodyOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "MESSAGE_ID_ASC"
			| "MESSAGE_ID_DESC"
			| "HTML_ASC"
			| "HTML_DESC"
			| "TEXT_ASC"
			| "TEXT_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC";
	};
	MessageBodyPatch: {
		kind: "INPUT_OBJECT";
		name: "MessageBodyPatch";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "html";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageCondition: {
		kind: "INPUT_OBJECT";
		name: "MessageCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "toAddress";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "fromAddress";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "subject";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "status";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "externalId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "idempotencyKey";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageConnection: {
		kind: "OBJECT";
		name: "MessageConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "MessageEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Message"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	MessageEdge: {
		kind: "OBJECT";
		name: "MessageEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Message"; ofType: null };
				};
			};
		};
	};
	MessageEvent: {
		kind: "OBJECT";
		name: "MessageEvent";
		fields: {
			message: {
				name: "message";
				type: { kind: "OBJECT"; name: "Message"; ofType: null };
			};
			messageId: {
				name: "messageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			occurredAt: {
				name: "occurredAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			payload: {
				name: "payload";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			type: {
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	MessageEventCondition: {
		kind: "INPUT_OBJECT";
		name: "MessageEventCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "type";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "occurredAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageEventConnection: {
		kind: "OBJECT";
		name: "MessageEventConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "OBJECT";
								name: "MessageEventEdge";
								ofType: null;
							};
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "MessageEvent"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	MessageEventEdge: {
		kind: "OBJECT";
		name: "MessageEventEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "MessageEvent"; ofType: null };
				};
			};
		};
	};
	MessageEventFilter: {
		kind: "INPUT_OBJECT";
		name: "MessageEventFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "type";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "occurredAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "message";
				type: { kind: "INPUT_OBJECT"; name: "MessageFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "MessageEventFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "MessageEventFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: {
					kind: "INPUT_OBJECT";
					name: "MessageEventFilter";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	MessageEventOrderBy: {
		name: "MessageEventOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "MESSAGE_ID_ASC"
			| "MESSAGE_ID_DESC"
			| "TYPE_ASC"
			| "TYPE_DESC"
			| "OCCURRED_AT_ASC"
			| "OCCURRED_AT_DESC";
	};
	MessageFilter: {
		kind: "INPUT_OBJECT";
		name: "MessageFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "toAddress";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "fromAddress";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "subject";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "status";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "externalId";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "idempotencyKey";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageEvents";
				type: {
					kind: "INPUT_OBJECT";
					name: "MessageToManyMessageEventFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "messageEventsExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageBodies";
				type: {
					kind: "INPUT_OBJECT";
					name: "MessageToManyMessageBodyFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "messageBodiesExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageLinks";
				type: {
					kind: "INPUT_OBJECT";
					name: "MessageToManyMessageLinkFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "messageLinksExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "MessageFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "MessageFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "MessageFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageLink: {
		kind: "OBJECT";
		name: "MessageLink";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			message: {
				name: "message";
				type: { kind: "OBJECT"; name: "Message"; ofType: null };
			};
			messageId: {
				name: "messageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			position: {
				name: "position";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			url: {
				name: "url";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	MessageLinkCondition: {
		kind: "INPUT_OBJECT";
		name: "MessageLinkCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "url";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "position";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageLinkConnection: {
		kind: "OBJECT";
		name: "MessageLinkConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "MessageLinkEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "MessageLink"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	MessageLinkEdge: {
		kind: "OBJECT";
		name: "MessageLinkEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "MessageLink"; ofType: null };
				};
			};
		};
	};
	MessageLinkFilter: {
		kind: "INPUT_OBJECT";
		name: "MessageLinkFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "url";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "position";
				type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "message";
				type: { kind: "INPUT_OBJECT"; name: "MessageFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "MessageLinkFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "MessageLinkFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "MessageLinkFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageLinkInput: {
		kind: "INPUT_OBJECT";
		name: "MessageLinkInput";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "url";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "position";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageLinkOrderBy: {
		name: "MessageLinkOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "MESSAGE_ID_ASC"
			| "MESSAGE_ID_DESC"
			| "URL_ASC"
			| "URL_DESC"
			| "POSITION_ASC"
			| "POSITION_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC";
	};
	MessageLinkPatch: {
		kind: "INPUT_OBJECT";
		name: "MessageLinkPatch";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messageId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "url";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "position";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageOrderBy: {
		name: "MessageOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "TO_ADDRESS_ASC"
			| "TO_ADDRESS_DESC"
			| "FROM_ADDRESS_ASC"
			| "FROM_ADDRESS_DESC"
			| "SUBJECT_ASC"
			| "SUBJECT_DESC"
			| "STATUS_ASC"
			| "STATUS_DESC"
			| "EXTERNAL_ID_ASC"
			| "EXTERNAL_ID_DESC"
			| "IDEMPOTENCY_KEY_ASC"
			| "IDEMPOTENCY_KEY_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC";
	};
	MessageToManyMessageBodyFilter: {
		kind: "INPUT_OBJECT";
		name: "MessageToManyMessageBodyFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "MessageBodyFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "MessageBodyFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "MessageBodyFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MessageToManyMessageEventFilter: {
		kind: "INPUT_OBJECT";
		name: "MessageToManyMessageEventFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: {
					kind: "INPUT_OBJECT";
					name: "MessageEventFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "some";
				type: {
					kind: "INPUT_OBJECT";
					name: "MessageEventFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "none";
				type: {
					kind: "INPUT_OBJECT";
					name: "MessageEventFilter";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	MessageToManyMessageLinkFilter: {
		kind: "INPUT_OBJECT";
		name: "MessageToManyMessageLinkFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "MessageLinkFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "MessageLinkFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "MessageLinkFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	Mutation: {
		kind: "OBJECT";
		name: "Mutation";
		fields: {
			addContact: {
				name: "addContact";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "ContactPayload"; ofType: null };
				};
			};
			addSuppression: {
				name: "addSuppression";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "SuppressionPayload"; ofType: null };
				};
			};
			cancelScheduledMessage: {
				name: "cancelScheduledMessage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "CancelScheduledMessagePayload";
						ofType: null;
					};
				};
			};
			createApiKey: {
				name: "createApiKey";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "CreateApiKeyPayload"; ofType: null };
				};
			};
			createAudience: {
				name: "createAudience";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "CreateAudiencePayload";
						ofType: null;
					};
				};
			};
			createBroadcast: {
				name: "createBroadcast";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "CreateBroadcastPayload";
						ofType: null;
					};
				};
			};
			createMessageBody: {
				name: "createMessageBody";
				type: {
					kind: "OBJECT";
					name: "CreateMessageBodyPayload";
					ofType: null;
				};
			};
			createMessageLink: {
				name: "createMessageLink";
				type: {
					kind: "OBJECT";
					name: "CreateMessageLinkPayload";
					ofType: null;
				};
			};
			createSendingDomain: {
				name: "createSendingDomain";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "CreateSendingDomainPayload";
						ofType: null;
					};
				};
			};
			createTemplate: {
				name: "createTemplate";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "CreateTemplatePayload";
						ofType: null;
					};
				};
			};
			createWebhook: {
				name: "createWebhook";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "CreateWebhookPayload";
						ofType: null;
					};
				};
			};
			createWebhookDelivery: {
				name: "createWebhookDelivery";
				type: {
					kind: "OBJECT";
					name: "CreateWebhookDeliveryPayload";
					ofType: null;
				};
			};
			deleteAudience: {
				name: "deleteAudience";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "AudienceMutationPayload";
						ofType: null;
					};
				};
			};
			deleteBroadcast: {
				name: "deleteBroadcast";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "BroadcastMutationPayload";
						ofType: null;
					};
				};
			};
			deleteMessageBody: {
				name: "deleteMessageBody";
				type: {
					kind: "OBJECT";
					name: "DeleteMessageBodyPayload";
					ofType: null;
				};
			};
			deleteMessageLink: {
				name: "deleteMessageLink";
				type: {
					kind: "OBJECT";
					name: "DeleteMessageLinkPayload";
					ofType: null;
				};
			};
			deleteSendingDomain: {
				name: "deleteSendingDomain";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "SendingDomainMutationPayload";
						ofType: null;
					};
				};
			};
			deleteTemplate: {
				name: "deleteTemplate";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "TemplateMutationPayload";
						ofType: null;
					};
				};
			};
			deleteWebhook: {
				name: "deleteWebhook";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "WebhookMutationPayload";
						ofType: null;
					};
				};
			};
			deleteWebhookDelivery: {
				name: "deleteWebhookDelivery";
				type: {
					kind: "OBJECT";
					name: "DeleteWebhookDeliveryPayload";
					ofType: null;
				};
			};
			removeContact: {
				name: "removeContact";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "ContactMutationPayload";
						ofType: null;
					};
				};
			};
			removeSuppression: {
				name: "removeSuppression";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "RemoveSuppressionPayload";
						ofType: null;
					};
				};
			};
			replayWebhookDelivery: {
				name: "replayWebhookDelivery";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "ReplayWebhookDeliveryPayload";
						ofType: null;
					};
				};
			};
			resendMessage: {
				name: "resendMessage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "ResendMessagePayload";
						ofType: null;
					};
				};
			};
			revokeApiKey: {
				name: "revokeApiKey";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "RevokeApiKeyPayload"; ofType: null };
				};
			};
			sendBroadcast: {
				name: "sendBroadcast";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "SendBroadcastPayload";
						ofType: null;
					};
				};
			};
			sendMessage: {
				name: "sendMessage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "SendMessagePayload"; ofType: null };
				};
			};
			updateMessageBody: {
				name: "updateMessageBody";
				type: {
					kind: "OBJECT";
					name: "UpdateMessageBodyPayload";
					ofType: null;
				};
			};
			updateMessageLink: {
				name: "updateMessageLink";
				type: {
					kind: "OBJECT";
					name: "UpdateMessageLinkPayload";
					ofType: null;
				};
			};
			updateTemplate: {
				name: "updateTemplate";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "TemplateMutationPayload";
						ofType: null;
					};
				};
			};
			updateWebhookDelivery: {
				name: "updateWebhookDelivery";
				type: {
					kind: "OBJECT";
					name: "UpdateWebhookDeliveryPayload";
					ofType: null;
				};
			};
			verifySendingDomain: {
				name: "verifySendingDomain";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "VerifySendingDomainPayload";
						ofType: null;
					};
				};
			};
		};
	};
	PageInfo: {
		kind: "OBJECT";
		name: "PageInfo";
		fields: {
			endCursor: {
				name: "endCursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			hasNextPage: {
				name: "hasNextPage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			hasPreviousPage: {
				name: "hasPreviousPage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			startCursor: {
				name: "startCursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
		};
	};
	Query: {
		kind: "OBJECT";
		name: "Query";
		fields: {
			apiKey: {
				name: "apiKey";
				type: { kind: "OBJECT"; name: "ApiKey"; ofType: null };
			};
			apiKeys: {
				name: "apiKeys";
				type: { kind: "OBJECT"; name: "ApiKeyConnection"; ofType: null };
			};
			audience: {
				name: "audience";
				type: { kind: "OBJECT"; name: "Audience"; ofType: null };
			};
			audiences: {
				name: "audiences";
				type: { kind: "OBJECT"; name: "AudienceConnection"; ofType: null };
			};
			broadcast: {
				name: "broadcast";
				type: { kind: "OBJECT"; name: "Broadcast"; ofType: null };
			};
			broadcasts: {
				name: "broadcasts";
				type: { kind: "OBJECT"; name: "BroadcastConnection"; ofType: null };
			};
			contact: {
				name: "contact";
				type: { kind: "OBJECT"; name: "Contact"; ofType: null };
			};
			contacts: {
				name: "contacts";
				type: { kind: "OBJECT"; name: "ContactConnection"; ofType: null };
			};
			deliverabilityRecommendations: {
				name: "deliverabilityRecommendations";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "OBJECT";
								name: "DomainDeliverabilityReport";
								ofType: null;
							};
						};
					};
				};
			};
			message: {
				name: "message";
				type: { kind: "OBJECT"; name: "Message"; ofType: null };
			};
			messageBodies: {
				name: "messageBodies";
				type: { kind: "OBJECT"; name: "MessageBodyConnection"; ofType: null };
			};
			messageBody: {
				name: "messageBody";
				type: { kind: "OBJECT"; name: "MessageBody"; ofType: null };
			};
			messageEvent: {
				name: "messageEvent";
				type: { kind: "OBJECT"; name: "MessageEvent"; ofType: null };
			};
			messageEvents: {
				name: "messageEvents";
				type: { kind: "OBJECT"; name: "MessageEventConnection"; ofType: null };
			};
			messageLink: {
				name: "messageLink";
				type: { kind: "OBJECT"; name: "MessageLink"; ofType: null };
			};
			messageLinks: {
				name: "messageLinks";
				type: { kind: "OBJECT"; name: "MessageLinkConnection"; ofType: null };
			};
			messages: {
				name: "messages";
				type: { kind: "OBJECT"; name: "MessageConnection"; ofType: null };
			};
			query: {
				name: "query";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Query"; ofType: null };
				};
			};
			scheduledMessages: {
				name: "scheduledMessages";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "OBJECT";
								name: "ScheduledMessage";
								ofType: null;
							};
						};
					};
				};
			};
			sendingDomain: {
				name: "sendingDomain";
				type: { kind: "OBJECT"; name: "SendingDomain"; ofType: null };
			};
			sendingDomains: {
				name: "sendingDomains";
				type: { kind: "OBJECT"; name: "SendingDomainConnection"; ofType: null };
			};
			suppression: {
				name: "suppression";
				type: { kind: "OBJECT"; name: "Suppression"; ofType: null };
			};
			suppressions: {
				name: "suppressions";
				type: { kind: "OBJECT"; name: "SuppressionConnection"; ofType: null };
			};
			template: {
				name: "template";
				type: { kind: "OBJECT"; name: "Template"; ofType: null };
			};
			templates: {
				name: "templates";
				type: { kind: "OBJECT"; name: "TemplateConnection"; ofType: null };
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenants: {
				name: "tenants";
				type: { kind: "OBJECT"; name: "TenantConnection"; ofType: null };
			};
			webhookDeliveries: {
				name: "webhookDeliveries";
				type: {
					kind: "OBJECT";
					name: "WebhookDeliveryConnection";
					ofType: null;
				};
			};
			webhookDelivery: {
				name: "webhookDelivery";
				type: { kind: "OBJECT"; name: "WebhookDelivery"; ofType: null };
			};
			webhookEndpoint: {
				name: "webhookEndpoint";
				type: { kind: "OBJECT"; name: "WebhookEndpoint"; ofType: null };
			};
			webhookEndpoints: {
				name: "webhookEndpoints";
				type: {
					kind: "OBJECT";
					name: "WebhookEndpointConnection";
					ofType: null;
				};
			};
		};
	};
	RemoveSuppressionPayload: {
		kind: "OBJECT";
		name: "RemoveSuppressionPayload";
		fields: {
			address: {
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	ReplayWebhookDeliveryPayload: {
		kind: "OBJECT";
		name: "ReplayWebhookDeliveryPayload";
		fields: {
			deliveryId: {
				name: "deliveryId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			status: {
				name: "status";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	ResendMessagePayload: {
		kind: "OBJECT";
		name: "ResendMessagePayload";
		fields: {
			messageId: {
				name: "messageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			status: {
				name: "status";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	RevokeApiKeyPayload: {
		kind: "OBJECT";
		name: "RevokeApiKeyPayload";
		fields: {
			apiKeyId: {
				name: "apiKeyId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	ScheduledMessage: {
		kind: "OBJECT";
		name: "ScheduledMessage";
		fields: {
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			sendAt: {
				name: "sendAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				};
			};
			status: {
				name: "status";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			subject: {
				name: "subject";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			to: {
				name: "to";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	SendBroadcastPayload: {
		kind: "OBJECT";
		name: "SendBroadcastPayload";
		fields: {
			broadcastId: {
				name: "broadcastId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			queued: {
				name: "queued";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	SendMessageInput: {
		kind: "INPUT_OBJECT";
		name: "SendMessageInput";
		isOneOf: false;
		inputFields: [
			{
				name: "to";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "from";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "subject";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "html";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "cc";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "bcc";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "replyTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "AttachmentInput";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "sendAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "variables";
				type: { kind: "SCALAR"; name: "JSON"; ofType: null };
				defaultValue: null;
			},
			{
				name: "trackOpens";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "trackClicks";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
		];
	};
	SendMessagePayload: {
		kind: "OBJECT";
		name: "SendMessagePayload";
		fields: {
			messageId: {
				name: "messageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			status: {
				name: "status";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			subject: {
				name: "subject";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			to: {
				name: "to";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	SendingDomain: {
		kind: "OBJECT";
		name: "SendingDomain";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			dkimPublicKey: {
				name: "dkimPublicKey";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			dkimSelector: {
				name: "dkimSelector";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			domain: {
				name: "domain";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			trackingSubdomain: {
				name: "trackingSubdomain";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			verified: {
				name: "verified";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
		};
	};
	SendingDomainCondition: {
		kind: "INPUT_OBJECT";
		name: "SendingDomainCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "domain";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "dkimSelector";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "verified";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "trackingSubdomain";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "dkimPublicKey";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	SendingDomainConnection: {
		kind: "OBJECT";
		name: "SendingDomainConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "OBJECT";
								name: "SendingDomainEdge";
								ofType: null;
							};
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "SendingDomain"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	SendingDomainEdge: {
		kind: "OBJECT";
		name: "SendingDomainEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "SendingDomain"; ofType: null };
				};
			};
		};
	};
	SendingDomainFilter: {
		kind: "INPUT_OBJECT";
		name: "SendingDomainFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "domain";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "dkimSelector";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "verified";
				type: { kind: "INPUT_OBJECT"; name: "BooleanFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "trackingSubdomain";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "dkimPublicKey";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "SendingDomainFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "SendingDomainFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: {
					kind: "INPUT_OBJECT";
					name: "SendingDomainFilter";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	SendingDomainMutationPayload: {
		kind: "OBJECT";
		name: "SendingDomainMutationPayload";
		fields: {
			domainId: {
				name: "domainId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	SendingDomainOrderBy: {
		name: "SendingDomainOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "DOMAIN_ASC"
			| "DOMAIN_DESC"
			| "DKIM_SELECTOR_ASC"
			| "DKIM_SELECTOR_DESC"
			| "VERIFIED_ASC"
			| "VERIFIED_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC"
			| "TRACKING_SUBDOMAIN_ASC"
			| "TRACKING_SUBDOMAIN_DESC"
			| "DKIM_PUBLIC_KEY_ASC"
			| "DKIM_PUBLIC_KEY_DESC"
			| "DKIM_PRIVATE_KEY_ASC"
			| "DKIM_PRIVATE_KEY_DESC";
	};
	String: unknown;
	StringFilter: {
		kind: "INPUT_OBJECT";
		name: "StringFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "isNull";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "equalTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notEqualTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "distinctFrom";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notDistinctFrom";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "in";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "notIn";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "lessThan";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lessThanOrEqualTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThan";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThanOrEqualTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "includes";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notIncludes";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "includesInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notIncludesInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "startsWith";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notStartsWith";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "startsWithInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notStartsWithInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endsWith";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notEndsWith";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endsWithInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notEndsWithInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "like";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notLike";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "likeInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notLikeInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "equalToInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notEqualToInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "distinctFromInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notDistinctFromInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "inInsensitive";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "notInInsensitive";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "lessThanInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lessThanOrEqualToInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThanInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThanOrEqualToInsensitive";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	StringListFilter: {
		kind: "INPUT_OBJECT";
		name: "StringListFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "isNull";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "equalTo";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "notEqualTo";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "distinctFrom";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "notDistinctFrom";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "lessThan";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "lessThanOrEqualTo";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "greaterThan";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "greaterThanOrEqualTo";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "contains";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "containedBy";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "overlaps";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "anyEqualTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "anyNotEqualTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "anyLessThan";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "anyLessThanOrEqualTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "anyGreaterThan";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "anyGreaterThanOrEqualTo";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	Suppression: {
		kind: "OBJECT";
		name: "Suppression";
		fields: {
			address: {
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			reason: {
				name: "reason";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	SuppressionCondition: {
		kind: "INPUT_OBJECT";
		name: "SuppressionCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "address";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "reason";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	SuppressionConnection: {
		kind: "OBJECT";
		name: "SuppressionConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "SuppressionEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Suppression"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	SuppressionEdge: {
		kind: "OBJECT";
		name: "SuppressionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Suppression"; ofType: null };
				};
			};
		};
	};
	SuppressionFilter: {
		kind: "INPUT_OBJECT";
		name: "SuppressionFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "address";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "reason";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "SuppressionFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "SuppressionFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "SuppressionFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	SuppressionOrderBy: {
		name: "SuppressionOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "ADDRESS_ASC"
			| "ADDRESS_DESC"
			| "REASON_ASC"
			| "REASON_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC";
	};
	SuppressionPayload: {
		kind: "OBJECT";
		name: "SuppressionPayload";
		fields: {
			address: {
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				};
			};
			reason: {
				name: "reason";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			suppressionId: {
				name: "suppressionId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	Template: {
		kind: "OBJECT";
		name: "Template";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			html: {
				name: "html";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			subject: {
				name: "subject";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			text: {
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
		};
	};
	TemplateCondition: {
		kind: "INPUT_OBJECT";
		name: "TemplateCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "subject";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "html";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TemplateConnection: {
		kind: "OBJECT";
		name: "TemplateConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "TemplateEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Template"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	TemplateEdge: {
		kind: "OBJECT";
		name: "TemplateEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Template"; ofType: null };
				};
			};
		};
	};
	TemplateFilter: {
		kind: "INPUT_OBJECT";
		name: "TemplateFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "subject";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "html";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "TemplateFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "TemplateFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "TemplateFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TemplateMutationPayload: {
		kind: "OBJECT";
		name: "TemplateMutationPayload";
		fields: {
			templateId: {
				name: "templateId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
	TemplateOrderBy: {
		name: "TemplateOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "NAME_ASC"
			| "NAME_DESC"
			| "SUBJECT_ASC"
			| "SUBJECT_DESC"
			| "HTML_ASC"
			| "HTML_DESC"
			| "TEXT_ASC"
			| "TEXT_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC"
			| "UPDATED_AT_ASC"
			| "UPDATED_AT_DESC";
	};
	Tenant: {
		kind: "OBJECT";
		name: "Tenant";
		fields: {
			apiKeys: {
				name: "apiKeys";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "ApiKeyConnection"; ofType: null };
				};
			};
			audiences: {
				name: "audiences";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "AudienceConnection"; ofType: null };
				};
			};
			broadcasts: {
				name: "broadcasts";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "BroadcastConnection"; ofType: null };
				};
			};
			contacts: {
				name: "contacts";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "ContactConnection"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			messages: {
				name: "messages";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "MessageConnection"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			organizationId: {
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			sendingDomains: {
				name: "sendingDomains";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "SendingDomainConnection";
						ofType: null;
					};
				};
			};
			suppressions: {
				name: "suppressions";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "SuppressionConnection";
						ofType: null;
					};
				};
			};
			templates: {
				name: "templates";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "TemplateConnection"; ofType: null };
				};
			};
			trustTier: {
				name: "trustTier";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			webhookEndpoints: {
				name: "webhookEndpoints";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "WebhookEndpointConnection";
						ofType: null;
					};
				};
			};
		};
	};
	TenantCondition: {
		kind: "INPUT_OBJECT";
		name: "TenantCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "trustTier";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantConnection: {
		kind: "OBJECT";
		name: "TenantConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "TenantEdge"; ofType: null };
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Tenant"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	TenantEdge: {
		kind: "OBJECT";
		name: "TenantEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Tenant"; ofType: null };
				};
			};
		};
	};
	TenantFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "trustTier";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "apiKeys";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManyApiKeyFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "apiKeysExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "messages";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManyMessageFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "messagesExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "sendingDomains";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManySendingDomainFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "sendingDomainsExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "suppressions";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManySuppressionFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "suppressionsExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "templates";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManyTemplateFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "templatesExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "audiences";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManyAudienceFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "audiencesExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "broadcasts";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManyBroadcastFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "broadcastsExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "contacts";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManyContactFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "contactsExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "webhookEndpoints";
				type: {
					kind: "INPUT_OBJECT";
					name: "TenantToManyWebhookEndpointFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "webhookEndpointsExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "TenantFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "TenantFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantOrderBy: {
		name: "TenantOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "ORGANIZATION_ID_ASC"
			| "ORGANIZATION_ID_DESC"
			| "NAME_ASC"
			| "NAME_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC"
			| "TRUST_TIER_ASC"
			| "TRUST_TIER_DESC";
	};
	TenantToManyApiKeyFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManyApiKeyFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "ApiKeyFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "ApiKeyFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "ApiKeyFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantToManyAudienceFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManyAudienceFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "AudienceFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "AudienceFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "AudienceFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantToManyBroadcastFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManyBroadcastFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "BroadcastFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "BroadcastFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "BroadcastFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantToManyContactFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManyContactFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "ContactFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "ContactFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "ContactFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantToManyMessageFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManyMessageFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "MessageFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "MessageFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "MessageFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantToManySendingDomainFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManySendingDomainFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: {
					kind: "INPUT_OBJECT";
					name: "SendingDomainFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "some";
				type: {
					kind: "INPUT_OBJECT";
					name: "SendingDomainFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "none";
				type: {
					kind: "INPUT_OBJECT";
					name: "SendingDomainFilter";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	TenantToManySuppressionFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManySuppressionFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "SuppressionFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "SuppressionFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "SuppressionFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantToManyTemplateFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManyTemplateFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: { kind: "INPUT_OBJECT"; name: "TemplateFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "some";
				type: { kind: "INPUT_OBJECT"; name: "TemplateFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "none";
				type: { kind: "INPUT_OBJECT"; name: "TemplateFilter"; ofType: null };
				defaultValue: null;
			},
		];
	};
	TenantToManyWebhookEndpointFilter: {
		kind: "INPUT_OBJECT";
		name: "TenantToManyWebhookEndpointFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookEndpointFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "some";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookEndpointFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "none";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookEndpointFilter";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	UUID: unknown;
	UUIDFilter: {
		kind: "INPUT_OBJECT";
		name: "UUIDFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "isNull";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "equalTo";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notEqualTo";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "distinctFrom";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "notDistinctFrom";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "in";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "notIn";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "lessThan";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lessThanOrEqualTo";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThan";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "greaterThanOrEqualTo";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	UpdateMessageBodyInput: {
		kind: "INPUT_OBJECT";
		name: "UpdateMessageBodyInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "patch";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "INPUT_OBJECT";
						name: "MessageBodyPatch";
						ofType: null;
					};
				};
				defaultValue: null;
			},
		];
	};
	UpdateMessageBodyPayload: {
		kind: "OBJECT";
		name: "UpdateMessageBodyPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			messageBody: {
				name: "messageBody";
				type: { kind: "OBJECT"; name: "MessageBody"; ofType: null };
			};
			messageBodyEdge: {
				name: "messageBodyEdge";
				type: { kind: "OBJECT"; name: "MessageBodyEdge"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
		};
	};
	UpdateMessageLinkInput: {
		kind: "INPUT_OBJECT";
		name: "UpdateMessageLinkInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "patch";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "INPUT_OBJECT";
						name: "MessageLinkPatch";
						ofType: null;
					};
				};
				defaultValue: null;
			},
		];
	};
	UpdateMessageLinkPayload: {
		kind: "OBJECT";
		name: "UpdateMessageLinkPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			messageLink: {
				name: "messageLink";
				type: { kind: "OBJECT"; name: "MessageLink"; ofType: null };
			};
			messageLinkEdge: {
				name: "messageLinkEdge";
				type: { kind: "OBJECT"; name: "MessageLinkEdge"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
		};
	};
	UpdateTemplateInput: {
		kind: "INPUT_OBJECT";
		name: "UpdateTemplateInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "subject";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "html";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "text";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	UpdateWebhookDeliveryInput: {
		kind: "INPUT_OBJECT";
		name: "UpdateWebhookDeliveryInput";
		isOneOf: false;
		inputFields: [
			{
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "patch";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "INPUT_OBJECT";
						name: "WebhookDeliveryPatch";
						ofType: null;
					};
				};
				defaultValue: null;
			},
		];
	};
	UpdateWebhookDeliveryPayload: {
		kind: "OBJECT";
		name: "UpdateWebhookDeliveryPayload";
		fields: {
			clientMutationId: {
				name: "clientMutationId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			query: {
				name: "query";
				type: { kind: "OBJECT"; name: "Query"; ofType: null };
			};
			webhookDelivery: {
				name: "webhookDelivery";
				type: { kind: "OBJECT"; name: "WebhookDelivery"; ofType: null };
			};
			webhookDeliveryEdge: {
				name: "webhookDeliveryEdge";
				type: { kind: "OBJECT"; name: "WebhookDeliveryEdge"; ofType: null };
			};
		};
	};
	VerifySendingDomainPayload: {
		kind: "OBJECT";
		name: "VerifySendingDomainPayload";
		fields: {
			domainId: {
				name: "domainId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			verified: {
				name: "verified";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
		};
	};
	WebhookDelivery: {
		kind: "OBJECT";
		name: "WebhookDelivery";
		fields: {
			attempts: {
				name: "attempts";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			endpoint: {
				name: "endpoint";
				type: { kind: "OBJECT"; name: "WebhookEndpoint"; ofType: null };
			};
			endpointId: {
				name: "endpointId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			eventType: {
				name: "eventType";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			lastError: {
				name: "lastError";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			nextAttemptAt: {
				name: "nextAttemptAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			payload: {
				name: "payload";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			status: {
				name: "status";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
		};
	};
	WebhookDeliveryCondition: {
		kind: "INPUT_OBJECT";
		name: "WebhookDeliveryCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endpointId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "eventType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "status";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "attempts";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "nextAttemptAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lastError";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	WebhookDeliveryConnection: {
		kind: "OBJECT";
		name: "WebhookDeliveryConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "OBJECT";
								name: "WebhookDeliveryEdge";
								ofType: null;
							};
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "WebhookDelivery"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	WebhookDeliveryEdge: {
		kind: "OBJECT";
		name: "WebhookDeliveryEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "WebhookDelivery"; ofType: null };
				};
			};
		};
	};
	WebhookDeliveryFilter: {
		kind: "INPUT_OBJECT";
		name: "WebhookDeliveryFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endpointId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "eventType";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "status";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "attempts";
				type: { kind: "INPUT_OBJECT"; name: "IntFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "nextAttemptAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lastError";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endpoint";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookEndpointFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "WebhookDeliveryFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "WebhookDeliveryFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookDeliveryFilter";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	WebhookDeliveryInput: {
		kind: "INPUT_OBJECT";
		name: "WebhookDeliveryInput";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endpointId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "eventType";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "payload";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "JSON"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "status";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "attempts";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "nextAttemptAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lastError";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	WebhookDeliveryOrderBy: {
		name: "WebhookDeliveryOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "ENDPOINT_ID_ASC"
			| "ENDPOINT_ID_DESC"
			| "EVENT_TYPE_ASC"
			| "EVENT_TYPE_DESC"
			| "STATUS_ASC"
			| "STATUS_DESC"
			| "ATTEMPTS_ASC"
			| "ATTEMPTS_DESC"
			| "NEXT_ATTEMPT_AT_ASC"
			| "NEXT_ATTEMPT_AT_DESC"
			| "LAST_ERROR_ASC"
			| "LAST_ERROR_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC"
			| "UPDATED_AT_ASC"
			| "UPDATED_AT_DESC";
	};
	WebhookDeliveryPatch: {
		kind: "INPUT_OBJECT";
		name: "WebhookDeliveryPatch";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endpointId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "eventType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "payload";
				type: { kind: "SCALAR"; name: "JSON"; ofType: null };
				defaultValue: null;
			},
			{
				name: "status";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "attempts";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "nextAttemptAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "lastError";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	WebhookEndpoint: {
		kind: "OBJECT";
		name: "WebhookEndpoint";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
			};
			eventTypes: {
				name: "eventTypes";
				type: {
					kind: "LIST";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rowId: {
				name: "rowId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			secret: {
				name: "secret";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			tenant: {
				name: "tenant";
				type: { kind: "OBJECT"; name: "Tenant"; ofType: null };
			};
			tenantId: {
				name: "tenantId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
			url: {
				name: "url";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			webhookDeliveriesByEndpointId: {
				name: "webhookDeliveriesByEndpointId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "WebhookDeliveryConnection";
						ofType: null;
					};
				};
			};
		};
	};
	WebhookEndpointCondition: {
		kind: "INPUT_OBJECT";
		name: "WebhookEndpointCondition";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "SCALAR"; name: "UUID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "url";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "secret";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "SCALAR"; name: "Datetime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	WebhookEndpointConnection: {
		kind: "OBJECT";
		name: "WebhookEndpointConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "OBJECT";
								name: "WebhookEndpointEdge";
								ofType: null;
							};
						};
					};
				};
			};
			nodes: {
				name: "nodes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "WebhookEndpoint"; ofType: null };
						};
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
			totalCount: {
				name: "totalCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	WebhookEndpointEdge: {
		kind: "OBJECT";
		name: "WebhookEndpointEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: { kind: "SCALAR"; name: "Cursor"; ofType: null };
			};
			node: {
				name: "node";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "WebhookEndpoint"; ofType: null };
				};
			};
		};
	};
	WebhookEndpointFilter: {
		kind: "INPUT_OBJECT";
		name: "WebhookEndpointFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "rowId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenantId";
				type: { kind: "INPUT_OBJECT"; name: "UUIDFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "url";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "secret";
				type: { kind: "INPUT_OBJECT"; name: "StringFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "createdAt";
				type: { kind: "INPUT_OBJECT"; name: "DatetimeFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "eventTypes";
				type: { kind: "INPUT_OBJECT"; name: "StringListFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "webhookDeliveriesByEndpointId";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookEndpointToManyWebhookDeliveryFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "webhookDeliveriesByEndpointIdExist";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "tenant";
				type: { kind: "INPUT_OBJECT"; name: "TenantFilter"; ofType: null };
				defaultValue: null;
			},
			{
				name: "and";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "WebhookEndpointFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "or";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "WebhookEndpointFilter";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "not";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookEndpointFilter";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	WebhookEndpointOrderBy: {
		name: "WebhookEndpointOrderBy";
		enumValues:
			| "NATURAL"
			| "PRIMARY_KEY_ASC"
			| "PRIMARY_KEY_DESC"
			| "ROW_ID_ASC"
			| "ROW_ID_DESC"
			| "TENANT_ID_ASC"
			| "TENANT_ID_DESC"
			| "URL_ASC"
			| "URL_DESC"
			| "SECRET_ASC"
			| "SECRET_DESC"
			| "CREATED_AT_ASC"
			| "CREATED_AT_DESC";
	};
	WebhookEndpointToManyWebhookDeliveryFilter: {
		kind: "INPUT_OBJECT";
		name: "WebhookEndpointToManyWebhookDeliveryFilter";
		isOneOf: false;
		inputFields: [
			{
				name: "every";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookDeliveryFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "some";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookDeliveryFilter";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "none";
				type: {
					kind: "INPUT_OBJECT";
					name: "WebhookDeliveryFilter";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	WebhookMutationPayload: {
		kind: "OBJECT";
		name: "WebhookMutationPayload";
		fields: {
			webhookId: {
				name: "webhookId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "UUID"; ofType: null };
				};
			};
		};
	};
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
	name: never;
	query: "Query";
	mutation: "Mutation";
	subscription: never;
	types: introspection_types;
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
	interface setupSchema {
		introspection: introspection;
	}
}
