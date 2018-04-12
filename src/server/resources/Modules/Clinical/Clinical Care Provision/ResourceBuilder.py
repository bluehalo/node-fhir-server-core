# Name:           ResourceBuilder
# Date Made:      1/23
# Date updated:   1/26
# Description:    Builds a resource for the FHIR server api.
# What to add:
#   Error handling
#   Use a Stringbuilder instead of str += '' if python has one

# Last bit of notes for the FHIR team
# ElementDefinition?
# 	Extension updates?
# 	Missing related in DSTU2 Observation

import re, sys

# Global variable containing all resource types from our resource/types folder
# New backbone elements are added to it
# Currently set up for STU3
types = ['Address', 'Animal', 'Annotation', 'Attachment', 'Code', 'CodeableConcept', 'Coding', 'Component',
         'ContactDetail', 'ContactPoint', 'Contributor', 'DataRequirement', 'DataRequirementCodeFilter',
         'DataRequirementDateFilter', 'Dosage', 'DomainResource', 'Element', 'Extension', 'HumanName', 'Identifier',
         'Issue', 'Meta', 'Narrative', 'OID', 'ParameterDefinition', 'Period', 'Quantity',
         'Range', 'Ratio', 'Reference', 'ReferenceRange', 'Related', 'RelatedArtifact', 'Resource', 'SampledData',
         'Signature', 'Timing', 'TimingRepeat', 'TriggerDefinition', 'UsageContext']

# Const list of javascript keywords
KEYWORDS = ['abstract', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'debugger',
            'decimal', 'default', 'delete', 'do', 'double', 'else', 'enum', 'export', 'extends', 'false',
            'final', 'finally', 'float', 'for', 'function', 'if', 'get', 'implements', 'import', 'in', 'instanceof',
            'int', 'interface', 'internal', 'long', 'new', 'null', 'package', 'private', 'protected',
            'public', 'return', 'sbyte', 'set', 'short', 'static', 'super', 'switch', 'this', 'throw', 'true', 'try',
            'typeof', 'unit', 'ulong', 'ushort', 'var', 'void', 'while', 'with']

# [name] [flags] [card] [type] [description]
RE1 = re.compile('[\w | \[ | \]]+\t.{0,7}\t[[0,1]\.\.[1,*]]?\t[\w]*.*')

# [name]   [type]
RE2 = re.compile('[\w]+\t{3}[\w]+')


# contains method for lists so to avoid using the any method
def contains(list, item):
    for index in list:
        if index == item:
            return True

    return False


# Writes constructor and set/get for resourceType for the main class
def setMainClass(name):
    # write constructor
    str = 'class ' + name + ' extends DomainResource {\n\tconstructor(obj) {\n'
    str += '\t\tsuper();\n\t\tthis._resourceType = \'' + name + '\';\n'
    str += '\t\tObject.assign(this, obj);\n\t}\n\n'

    # write set and get for resourceType
    str += '\tset resourceType(resourceType) {\n\t\tthis._resourceType = resourceType;\n\t}\n\n'
    str += '\tget resourceType() {\n\t\treturn this._resourceType;\n\t}\n\n'
    return str


# Writes constructor for a backbone class
def setBackboneClass(name):
    # write constructor
    str = 'class ' + name + ' {\n\tconstructor(obj) {\n'
    str += '\t\tObject.assign(this, obj);\n\t}\n\n'
    return str


# Set/get for a variable that is a type and has card 0..1 or 1..1
def writeSingleSetGetWithType(name, type):
    str = '\tset '+name+'('+name+') {\n\t\tthis._'+name+' = new '+type+'('+name+');\n\t}\n\n'
    str += '\tget '+name+'() {\n\t\treturn this._'+name+';\n\t}\n\n'
    return str


# Set/get for a variable that is not a type and has card 0..1 or 1..1
def writeSingleSetGetNoType(name):
    str = '\tset ' + name + '(' + name + ') {\n\t\tthis._' + name + ' = ' + name + ';\n\t}\n\n'
    str += '\tget ' + name + '() {\n\t\treturn this._' + name + ';\n\t}\n\n'
    return str


# Set/get for a variable that is a type and has card 0..* or 1..*
def writeMultiSetGetWithType(name, type):
    str = '\tset ' + name + '(' + name + ') {\n'
    str += '\t\tif (Array.isArray(' + name + ')) {\n'
    str += '\t\t\tthis._' + name + ' = ' + name + '.map((i) => new ' + type + '(i));\n'
    str += '\t\t} else {\n'
    str += '\t\t\tthis._' + name + ' = [new ' + type + '(' + name + ')];\n\t\t}\n\t}\n\n'
    str += '\tget '+name+'() {\n\t\treturn this._'+name+';\n\t}\n\n'
    return str


# Set/get for a variable that is a not type and has card 0..* or 1..*
def writeMultiSetGetNoType(name):
    str = '\tset ' + name + '(' + name + ') {\n\t\tthis._' + name + ' = [].concat(' + name + ');\n\t}\n\n'
    str += '\tget ' + name + '() {\n\t\treturn this._' + name + ';\n\t}\n\n'
    return str


# writes the toJson function for all given variables in the main class
def writeToJSONMain(vars):
    str = '\ttoJSON() {\n'

    str += '\t\tconst json = {\n'
    for index in range(len(vars)):
        str += '\t\t\t' + vars[index] + ': this._' + vars[index] + ',\n'
    str += '\t\t};\n\n'

    str += '\t\treturn Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);\n\t}\n}\n'
    return str


# writes the toJson function for all given variables in a backbone class
def writeToJSONBackbone(vars):
    str = '\ttoJSON() {\n'

    str += '\t\treturn {\n'
    for index in range(len(vars)):
        str += '\t\t\t' + vars[index] + ': this._' + vars[index] + ',\n'
    str += '\t\t};\n\t}\n}\n\n'
    return str


# closes the last bracket and writes all the exports for the classes
def writeExports(classes):
    str = '\n'

    for index in range(len(classes)):
        str += 'module.exports.' + classes[index] + ' = ' + classes[index] + ';\n'
    return str


# Builds the main class as a single string and returns it
def buildMain(fileHandlerCom, name, classes, usedTypes):
    str = setMainClass(name)
    hold = buildSetGets(fileHandlerCom, classes, usedTypes)
    vars = hold[0]
    str += hold[1]
    str += writeToJSONMain(vars)
    return str


# Builds a backbone class as a single string and returns it
def buildBackbone(fileHandlerCom, name, classes, usedTypes):
    str = setBackboneClass(name)
    hold = buildSetGets(fileHandlerCom, classes, usedTypes)
    vars = hold[0]
    str += hold[1]
    str += writeToJSONBackbone(vars)
    return str


# Builds resource paths for all used types as a single string and returns it
def buildPaths(usedTypes):
    str = 'const DomainResource = require(\'./types/DomainResource\');\n'
    for index in usedTypes:
        str += 'const ' + index + ' = require(\'./types/' + index + '\');\n'
    str += '\n'
    return str


# Builds sets and gets for variables
#   If it runs into a list variable, it hands it off to buildListSetGets
# Returns all created variables for the toJson builder and all methods as a single string
def buildSetGets(fileHandlerCom, classes, usedTypes):
    # vars: list of all variables in a specific class
    # line: used to read the comments file 1 line at a time
    # useRE2: bool set to true if the current var is a list (value[x] for example)
        # makes the function use a different regex till the next var
    # builder: builds the sets and gets as a string to be later inserted into the buffer
    vars = []
    line = fileHandlerCom.readline()
    builder = ''
    backbones = []

    while line != '\n' and line is not None:
        line = line[0:len(line) - 1]
        badName = False

        comment = RE1.match(line).group()

        str = comment.split('\t')
        name = str[0]
        card = str[2]
        type = str[3]
        type = type.split('(')[0]

        # Check if there are additional lines to the comment
        line = fileHandlerCom.readline()
        while line != '\n':
            line = line[0:len(line) - 1]
            comment += '\n\t// ' + line
            line = fileHandlerCom.readline()
        builder += ('\t// ' + comment + '\n')

        # if it is a list variable like value[x], use a different builder till back to normal variable
        if name[-1] == ']':
            hold = buildListSetGets(fileHandlerCom, vars, card, usedTypes)
            line = hold[0]
            builder += hold[1]
            continue

        # If a class name is a JS keyword, tag the current class name on it
        if contains(KEYWORDS, name):
            badName = True

        # Check special cases for type
        if type == 'BackboneElement':
            type = "%s%s" % (str[0][0].capitalize(), str[0][1:])
            if badName:
                type = classes[-1] + type
            types.append(type)
            backbones.append(type)
        elif type == 'code':
            type = str[3].capitalize()

        # Checks if type is in types, not used, and not a backbone element
        # If true, insert into usedTypes in order to build resource paths later
        if contains(types, type) and not contains(usedTypes, type) and not contains(backbones, type):
            usedTypes.append(type)

        # Fixes name and type by sticking the current class name to the front of them
        if badName:
            name = classes[-1][0].lower() + classes[-1][1:] + name.capitalize()
            if not contains(types, type):
                type = classes[-1].capitalize() + name.capitalize()

        # Saves the name in vars and then builds the appropriet set and get based on the variable's cardinality
        vars.append(name)
        if (contains(types, type) | contains(classes, type)) and (card[3] == '*'):
            builder += writeMultiSetGetWithType(name, type)
        elif (contains(types, type) | contains(classes, type)) and (card[3] == '1'):
            builder += writeSingleSetGetWithType(name, type)
        elif card[3] == '*':
            builder += writeMultiSetGetNoType(name)
        else:
            builder += writeSingleSetGetNoType(name)

        line = fileHandlerCom.readline()

    return vars, builder


# Builds sets and gets for variables in a list variable like value[x]
#   Uses regex RE2 instead of RE1
# vars: the list of vars from the current class being built
# card: the cardinality of the list variable
# Returns current line and all methods as a single string
def buildListSetGets(fileHandlerCom, vars, card, usedTypes):
    builder = ''
    line = fileHandlerCom.readline()

    while line != '\n':
        line = line[0:len(line) - 1]

        # Check if the current element is no longer part of value[x]
        if contains(line, '0') or contains(line, '1'):
            line += '\n'
            return line, builder

        comment = RE2.match(line).group()

        str = comment.split('\t')
        name = str[0]
        type = str[3]

        # Check if there are additional lines to the comment
        line = fileHandlerCom.readline()
        while line != '\n':
            line = line[0:len(line) - 1]
            comment += '\n\t// ' + line
            line = fileHandlerCom.readline()
        builder += ('\t// ' + comment + '\n')

        # Check special cases for type
        if type == 'code':
            type = str[3].capitalize()

        # Checks if type is in types and not used
        # If true, insert into usedTypes in order to build resource paths later
        if contains(types, type) and not contains(usedTypes, type):
            usedTypes.append(type)

        vars.append(name)
        if contains(types, type) and (card[3] == '*'):
            builder += writeMultiSetGetWithType(name, type)
        elif contains(types, type) and (card[3] == '1'):
            builder += writeSingleSetGetWithType(name, type)
        elif card[3] == '*':
            builder += writeMultiSetGetNoType(name)
        else:
            builder += writeSingleSetGetNoType(name)

        line = fileHandlerCom.readline()

    return line, builder


# Parsing is separated from main so it can be tested without dealing with command line args
# Takes in the file handler connected to the comments file
# Returns a fully built resource in a buffer
def parse(fileHandlerCom):
    # buffer: used to build out the resource before writing to a file to allow reordering of classes, paths, and exports
    #   Each cell will contain either the paths, exports, a full backbone class, or the full main class
    #   Its originally built backwards from what a JS file requires because the main class name is needed if a backbone
    #   element ever takes the name of a JS keyword
    # classes: list of all classes made. [0] will always be the main class
    # usedTypes: list of all types used including backbone elements
    #
    # Notes:
    #   Maybe return all 3 instead of just buffer. classes and usedTypes will be very useful if we need a script to
    #       create the unit test.
    #   Import the os package in order to create and rename files in code. This will let the user only enter the comment
    #       file and the corresponding js file will be generated completely rather than having to input the name
    buffer = []
    classes = []
    usedTypes = []

    line = fileHandlerCom.readline()
    while line != 'eof\n':
        line = line[0:len(line) - 1]
        if line == 'Backbone':
            line = fileHandlerCom.readline()
            line = line[0:len(line) - 1]
            line = line[0].capitalize() + line[1:]

            # If a class name is a JS keyword, tag the main class name on it
            temp = list(map((lambda x: x.capitalize()), KEYWORDS))
            # if any(line in s for s in temp):
            if contains(temp, line):
                line = classes[0] + line

            classes.append(line)
            buffer.append(buildBackbone(fileHandlerCom, line, classes, usedTypes))
        else:
            line = fileHandlerCom.readline()
            line = line[0:len(line) - 1]
            line = line[0].capitalize() + line[1:]
            classes.reverse()
            classes.append(line)
            classes.reverse()
            buffer.append(buildMain(fileHandlerCom, line, classes, usedTypes))
        line = fileHandlerCom.readline()

    buffer.append(buildPaths(usedTypes))
    buffer.reverse()
    buffer.append(writeExports(classes))

    return buffer


# DSTU2DiagnosticReport: Test to build a small resource with list variables
# DSTU2Medication: Test to build a small resource with a subclass with a name as a keyword
# DSTU2Encounter: Test to build a large resource with a keyword name
# STU3Dosage: Test to build a type
#   Need to manually remove and edit several lines after completion
# Only handles taking command line args and opening and writing files
def main():
    # fileHandlerCom = open('Examples/DSTU2EncounterComments.txt', 'r')
    # fileHandlerRes = open('Examples/DSTU2EncounterResource.txt', 'w')
    fileHandlerCom = open(sys.argv[1], 'r')
    fileHandlerRes = open(sys.argv[2], 'w')

    fileHandlerRes.write(''.join(parse(fileHandlerCom)))

    fileHandlerRes.close()
    fileHandlerCom.close()

if __name__ == '__main__':
    main()
