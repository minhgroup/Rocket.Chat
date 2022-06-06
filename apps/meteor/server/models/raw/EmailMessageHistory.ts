import { IndexSpecification } from 'mongodb';
import type { InsertOneWriteOpResult, WithId } from 'mongodb';
import { IEmailMessageHistory } from '@rocket.chat/core-typings';
import { IEmailMessageHistoryModel } from '@rocket.chat/model-typings';

import { BaseRaw } from './BaseRaw';

export class EmailMessageHistoryRaw extends BaseRaw<IEmailMessageHistory> implements IEmailMessageHistoryModel {
	protected modelIndexes(): IndexSpecification[] {
		return [{ key: { createdAt: 1 }, expireAfterSeconds: 60 * 60 * 24 }];
	}

	async create({ _id, email }: IEmailMessageHistory): Promise<InsertOneWriteOpResult<WithId<IEmailMessageHistory>>> {
		return this.insertOne({
			_id,
			email,
			createdAt: new Date(),
		});
	}
}