/**
 * @name exports
 * @static
 * @summary Arguments for the terminologycapabilities query
 */
module.exports = {
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TerminologyCapabilities.useContext.valueCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-context',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement  * [CodeSystem](codesystem.html): A use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A use context assigned to the message definition  * [NamingSystem](namingsystem.html): A use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition  * [StructureMap](structuremap.html): A use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A use context assigned to the value set  ',
	},
	'context-quantity': {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'TerminologyCapabilities.useContext.valueQuantity',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-context-quantity',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement  * [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition  * [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition  * [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set  ',
	},
	'context-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TerminologyCapabilities.useContext.code',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-context-type',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement  * [CodeSystem](codesystem.html): A type of use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A type of use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition  * [NamingSystem](namingsystem.html): A type of use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition  * [StructureMap](structuremap.html): A type of use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A type of use context assigned to the value set  ',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'TerminologyCapabilities.date',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-date',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The capability statement publication date  * [CodeSystem](codesystem.html): The code system publication date  * [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date  * [ConceptMap](conceptmap.html): The concept map publication date  * [GraphDefinition](graphdefinition.html): The graph definition publication date  * [ImplementationGuide](implementationguide.html): The implementation guide publication date  * [MessageDefinition](messagedefinition.html): The message definition publication date  * [NamingSystem](namingsystem.html): The naming system publication date  * [OperationDefinition](operationdefinition.html): The operation definition publication date  * [SearchParameter](searchparameter.html): The search parameter publication date  * [StructureDefinition](structuredefinition.html): The structure definition publication date  * [StructureMap](structuremap.html): The structure map publication date  * [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date  * [ValueSet](valueset.html): The value set publication date  ',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TerminologyCapabilities.description',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-description',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The description of the capability statement  * [CodeSystem](codesystem.html): The description of the code system  * [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition  * [ConceptMap](conceptmap.html): The description of the concept map  * [GraphDefinition](graphdefinition.html): The description of the graph definition  * [ImplementationGuide](implementationguide.html): The description of the implementation guide  * [MessageDefinition](messagedefinition.html): The description of the message definition  * [NamingSystem](namingsystem.html): The description of the naming system  * [OperationDefinition](operationdefinition.html): The description of the operation definition  * [SearchParameter](searchparameter.html): The description of the search parameter  * [StructureDefinition](structuredefinition.html): The description of the structure definition  * [StructureMap](structuremap.html): The description of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities  * [ValueSet](valueset.html): The description of the value set  ',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TerminologyCapabilities.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-jurisdiction',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement  * [CodeSystem](codesystem.html): Intended jurisdiction for the code system  * [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map  * [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition  * [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide  * [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition  * [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system  * [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition  * [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter  * [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition  * [StructureMap](structuremap.html): Intended jurisdiction for the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities  * [ValueSet](valueset.html): Intended jurisdiction for the value set  ',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TerminologyCapabilities.name',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-name',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement  * [CodeSystem](codesystem.html): Computationally friendly name of the code system  * [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition  * [ConceptMap](conceptmap.html): Computationally friendly name of the concept map  * [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition  * [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide  * [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition  * [NamingSystem](namingsystem.html): Computationally friendly name of the naming system  * [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition  * [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter  * [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition  * [StructureMap](structuremap.html): Computationally friendly name of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities  * [ValueSet](valueset.html): Computationally friendly name of the value set  ',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TerminologyCapabilities.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-publisher',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement  * [CodeSystem](codesystem.html): Name of the publisher of the code system  * [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition  * [ConceptMap](conceptmap.html): Name of the publisher of the concept map  * [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition  * [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide  * [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition  * [NamingSystem](namingsystem.html): Name of the publisher of the naming system  * [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition  * [SearchParameter](searchparameter.html): Name of the publisher of the search parameter  * [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition  * [StructureMap](structuremap.html): Name of the publisher of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities  * [ValueSet](valueset.html): Name of the publisher of the value set  ',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TerminologyCapabilities.status',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-status',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The current status of the capability statement  * [CodeSystem](codesystem.html): The current status of the code system  * [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition  * [ConceptMap](conceptmap.html): The current status of the concept map  * [GraphDefinition](graphdefinition.html): The current status of the graph definition  * [ImplementationGuide](implementationguide.html): The current status of the implementation guide  * [MessageDefinition](messagedefinition.html): The current status of the message definition  * [NamingSystem](namingsystem.html): The current status of the naming system  * [OperationDefinition](operationdefinition.html): The current status of the operation definition  * [SearchParameter](searchparameter.html): The current status of the search parameter  * [StructureDefinition](structuredefinition.html): The current status of the structure definition  * [StructureMap](structuremap.html): The current status of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities  * [ValueSet](valueset.html): The current status of the value set  ',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TerminologyCapabilities.title',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-title',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The human-friendly name of the capability statement  * [CodeSystem](codesystem.html): The human-friendly name of the code system  * [ConceptMap](conceptmap.html): The human-friendly name of the concept map  * [ImplementationGuide](implementationguide.html): The human-friendly name of the implementation guide  * [MessageDefinition](messagedefinition.html): The human-friendly name of the message definition  * [OperationDefinition](operationdefinition.html): The human-friendly name of the operation definition  * [StructureDefinition](structuredefinition.html): The human-friendly name of the structure definition  * [StructureMap](structuremap.html): The human-friendly name of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The human-friendly name of the terminology capabilities  * [ValueSet](valueset.html): The human-friendly name of the value set  ',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'TerminologyCapabilities.url',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-url',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement  * [CodeSystem](codesystem.html): The uri that identifies the code system  * [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition  * [ConceptMap](conceptmap.html): The uri that identifies the concept map  * [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition  * [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide  * [MessageDefinition](messagedefinition.html): The uri that identifies the message definition  * [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition  * [SearchParameter](searchparameter.html): The uri that identifies the search parameter  * [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition  * [StructureMap](structuremap.html): The uri that identifies the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities  * [ValueSet](valueset.html): The uri that identifies the value set  ',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TerminologyCapabilities.version',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-version',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The business version of the capability statement  * [CodeSystem](codesystem.html): The business version of the code system  * [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition  * [ConceptMap](conceptmap.html): The business version of the concept map  * [GraphDefinition](graphdefinition.html): The business version of the graph definition  * [ImplementationGuide](implementationguide.html): The business version of the implementation guide  * [MessageDefinition](messagedefinition.html): The business version of the message definition  * [OperationDefinition](operationdefinition.html): The business version of the operation definition  * [SearchParameter](searchparameter.html): The business version of the search parameter  * [StructureDefinition](structuredefinition.html): The business version of the structure definition  * [StructureMap](structuremap.html): The business version of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities  * [ValueSet](valueset.html): The business version of the value set  ',
	},
	'context-type-quantity': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement  * [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition  * [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map  * [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition  * [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system  * [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition  * [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition  * [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities  * [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set  ',
	},
	'context-type-value': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/conformance-context-type-value',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement  * [CodeSystem](codesystem.html): A use context type and value assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition  * [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map  * [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition  * [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system  * [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition  * [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition  * [StructureMap](structuremap.html): A use context type and value assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities  * [ValueSet](valueset.html): A use context type and value assigned to the value set  ',
	},
};
