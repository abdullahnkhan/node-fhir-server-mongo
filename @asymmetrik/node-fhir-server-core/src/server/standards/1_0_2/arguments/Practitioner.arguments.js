module.exports = {
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-address',
		documentation: 'An address in any kind of address/part.',
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-address-city',
		documentation: 'A city specified in an address.',
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-address-country',
		documentation: 'A country specified in an address.',
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-address-postalcode',
		documentation: 'A postalCode specified in an address.',
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-address-state',
		documentation: 'A state specified in an address.',
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-address-use',
		documentation: 'A use code specified in an address.',
	},
	COMMUNICATION: {
		name: 'communication',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-communication',
		documentation: 'One of the languages that the practitioner can communicate with.',
	},
	EMAIL: {
		name: 'email',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-email',
		documentation: 'A value in an email contact.',
	},
	FAMILY: {
		name: 'family',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-family',
		documentation: 'A portion of the family name.',
	},
	GENDER: {
		name: 'gender',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-gender',
		documentation: 'Gender of the practitioner.',
	},
	GIVEN: {
		name: 'given',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-given',
		documentation: 'A portion of the given name.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-identifier',
		documentation: "A practitioner's Identifier.",
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-location',
		documentation: 'One of the locations at which this practitioner provides care.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-name',
		documentation: 'A portion of either family or given name.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-organization',
		documentation: 'The identity of the organization the practitioner represents / acts on behalf of.',
	},
	PHONE: {
		name: 'phone',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-phone',
		documentation: 'A value in a phone contact.',
	},
	PHONETIC: {
		name: 'phonetic',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-phonetic',
		documentation: 'A portion of either family or given name using some kind of phonetic matching algorithm.',
	},
	ROLE: {
		name: 'role',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-role',
		documentation: 'The practitioner can perform this role at for the organization.',
	},
	SPECIALTY: {
		name: 'specialty',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-specialty',
		documentation: 'The practitioner has this specialty at an organization.',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-telecom',
		documentation: 'The value in any kind of contact.',
	},
};
