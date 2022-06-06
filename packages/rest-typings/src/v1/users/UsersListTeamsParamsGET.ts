import Ajv from 'ajv';
import type { IUser } from "@rocket.chat/core-typings";

const ajv = new Ajv({
	coerceTypes: true,
});


export type UsersListTeamsParamsGET = { userId: IUser['_id'] };

const UsersListTeamsParamsGetSchema = {
	type: 'object',
	properties: {
		userId: {
			type: 'string',
		},
	},
	required: ['userId'],
	additionalProperties: false,
};

export const isUsersListTeamsProps = ajv.compile<UsersListTeamsParamsGET>(UsersListTeamsParamsGetSchema);

