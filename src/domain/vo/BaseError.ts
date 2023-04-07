// References: https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991

export type BaseErrorType =
	| 'NOT_FOUND'
	| 'UNAUTHORIZED'
	| 'UNKNOWN'
	| 'BAD_REQUEST'
	| 'FORBIDDEN'
	| 'INTERNAL_SERVER_ERROR'
	| 'LOCKED'
	| 'PRECONDITION_FAILED'
	| 'INVALID_ARGUMENT'
	| 'CONFLICT';

// ts-prune-ignore-next
export type BaseErrorConstructor<T extends string = string> = {
	type: BaseErrorType | T;
	message: string;
	title: string;
	cause?: unknown;
};

export class BaseError<T extends string = string> extends Error {
	type: BaseErrorType | T;
	message: string;
	title: string;
	cause?: unknown;

	constructor({type, message, cause, title}: BaseErrorConstructor<T>) {
		super();
		this.type = type;
		this.message = message;
		this.cause = cause;
		this.title = title;
	}

	isNotFound() {
		return this.type === 'NOT_FOUND';
	}

	isUnauthorized() {
		return this.type === 'UNAUTHORIZED';
	}

	isUnknown() {
		return this.type === 'UNKNOWN';
	}

	isBadRequest() {
		return this.type === 'BAD_REQUEST';
	}

	isForbidden() {
		return this.type === 'FORBIDDEN';
	}

	isInternalServerError() {
		return this.type === 'INTERNAL_SERVER_ERROR';
	}
}
