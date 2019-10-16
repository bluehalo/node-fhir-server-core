## Overview

Metadata are usefull to know which search parameters are available for a resource. For example when searching patients you know that the server allows you to find by "identifier" and "birthdate". These information are returned in the `/metadata` route.

## Customizing the search parameters available for a resource

### Creating patient metadata

Let's start by adding patient metadata. Create a `patient.metadata.js` file in the root.

Add the following code to the previously created file.

```javascript
module.exports = {
    makeResource: (args, logger) => {
        const identifier = {
            name: "identifier",
            type: 'token',
            fhirtype: 'token',
            xpath: 'Patient.identifier',
            definition: 'http://hl7.org/fhir/SearchParameter/Patient-identifier',
            description: 'A patient identifier',
        }

        const birthdate = {
            name: "birthdate",
            type: 'date',
            fhirtype: 'date',
            xpath: 'Patient.birthDate',
            definition: 'http://hl7.org/fhir/SearchParameter/individual-birthdate',
            description:
                "Multiple Resources:     * [Patient](patient.html): The patient's date of birth  * [Person](person.html): The person's date of birth  * [RelatedPerson](relatedperson.html): The Related Person's date of birth  ",
        }

        return {
            type: "Patient",
            profile: {
                reference: "http://hl7.org/fhir/patient.html"
            },
            searchParam: [
                identifier,
                birthdate
            ]
        };
    }
};
```
With this code we say that only "identifier" and "birthdate" are implemented as search parameters for patients.
Each search parameter must be defined and added to the searchParam list.

All available parameters for the variable can be found at the following place `node_modules/@asymmetrik/node-fhir-server-core/src/server/resources/4_0_0/parameters/patient.parameters.js`

### Updating profiles

Now, update the profiles in your `index.js` file.

```javascript
let config = {
	profiles: {
		patient: {
			service: './patient.service.js',
			versions: [
				'4_0_0'
			],
			metadata: './patient.metadata.js'
		}
	}
};
```
You just have to add the metadata parameter. The value of the metadata parameter is the path to your `patient.metadata.js` file.

Thats it! Now when you open [http://localhost:3000/4_0_0/metadata](http://localhost:3000/4_0_0/metadata) in your browser, you find for the patient resource only the defined search parameters.