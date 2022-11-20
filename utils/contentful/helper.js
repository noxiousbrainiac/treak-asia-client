import get from 'lodash/get';

export const getDocumentFields = (document, fields = []) => {
	if (fields.length) {
		return fields.reduce((acc, field) => {
			if (!field) return acc;

			acc[field] =
				field.indexOf('sys.') === 0
					? get(document, field, null)
					: get(document, `fields.${field}`, null);

			return acc;
		}, {});
	}

	return get(document, 'fields', null);
};
