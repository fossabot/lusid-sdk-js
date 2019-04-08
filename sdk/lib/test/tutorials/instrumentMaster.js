"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID SDK and libraries
var api_1 = require("../../api");
var apiClientInitialisation_1 = require("./apiClientInitialisation");
var clientAuthentication = require('./apiClientAuthentication.js');
var uuid4 = require('uuid/v4');
var csv = require('csvtojson');
var client = new apiClientInitialisation_1.Client();
var clientBuilder = clientAuthentication.lusidApiClientBuilder;
var instrumentsFile = './data/paper-instruments.csv';
/**
 * Function to take an instrument object and convert it into a LUSID model
 * Inputs
 * instrument (dictionary) - Object with key-value attribute pairs describing the instrument
 * Returns
 * InstrumentDefinition (lusid.InstrumentDefinition) LUSID model for an instrument definition
 */
function buildUpsertInstrumentRequest(instrument) {
    var definition = new api_1.InstrumentDefinition();
    definition.name = instrument.instrument_name;
    definition.identifiers = {
        "Figi": instrument.figi,
        "ClientInternal": instrument.client_internal
    };
    return definition;
}
// Import your instruments from a CSV file and upsert them
function upsertFromCsv(filePath) {
    // Returns a promise
    return new Promise(function (resolve, reject) {
        // Use the csvtojson module to import a CSV file
        return csv()
            .fromFile(filePath)
            // Produces an array of objects, one for each row (instrument) of the CSV
            .then(function (instruments) {
            // Use a reduce function to convert each instrument object into a LUSID model
            return instruments.reduce(function (map, instrument) {
                // Call your conversion function defined earlier to convert each instrument
                map[instrument.instrument_name] = buildUpsertInstrumentRequest(instrument);
                return map;
            }, {});
        })
            .then(function (instrumentDefinitions) {
            // Use your client to call upsert instruments
            return clientBuilder(client).then(function (client) {
                return client.api.instruments.upsertInstruments(instrumentDefinitions);
            });
        })
            .then(function (res) { return resolve(res.body); })
            .catch(function (err) { return reject(err); });
    });
}
// Use your client to call LUSID and create a new property
function createProperty(propertyDefintion) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Use your client to call create property definition
        return clientBuilder(client).then(function (client) {
            return client.api.propertyDefinitions.createPropertyDefinition(propertyDefintion);
        })
            .then(function (res) { return resolve(res.body); })
            .catch(function (err) { return reject(err); });
    });
}
// Gets tne Lusid Instrument Id for a list of instruments
function getLuidForInstruments(identifierType, identifierValues) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Using your client call LUSID to get the instrument definitions
        return clientBuilder(client)
            .then(function (client) {
            return client.api.instruments.getInstruments(identifierType, identifierValues)
                .then(function (res) { return res.body; });
        })
            .then(function (res) {
            // Pick off the Lusid Instrument ID for each definition and discard the rest
            return Object.keys(res.values).reduce(function (map, instrumentIdentifier) {
                map[instrumentIdentifier] = res.values[instrumentIdentifier].lusidInstrumentId;
                return map;
            }, {});
        })
            .then(function (lusidInstrumentIdMapping) {
            resolve(lusidInstrumentIdMapping);
        })
            .catch(function (err) { return reject(err); });
    });
}
// Get the Lusid Instrument Id for our instruments
function addLusidInstrumentIdsFromFile(fileName) {
    return new Promise(function (resolve, reject) {
        // Get your instruments from a CSV file
        return csv()
            .fromFile(fileName)
            .then(function (instruments) {
            // Get the figi for each instrument
            return [
                instruments,
                instruments.reduce(function (figis, instrument) {
                    figis.push(instrument.figi);
                    return figis;
                }, [])
            ];
        })
            .then(function (_a) {
            var instruments = _a[0], figis = _a[1];
            // Using the Figi retrieve each instruments LusidInstrumentId
            return getLuidForInstruments('Figi', figis)
                .then(function (lusidInstrumentIdMapping) {
                return [
                    instruments,
                    lusidInstrumentIdMapping
                ];
            });
        })
            .then(function (_a) {
            var instruments = _a[0], lusidInstrumentIdMapping = _a[1];
            return instruments.map(function (instrument) {
                instrument.lusidinstrumentid = lusidInstrumentIdMapping[instrument.figi];
                return instrument;
            });
        })
            .then(function (instruments) { return resolve(instruments); })
            .catch(function (err) { return reject(err); });
    });
}
function buildInstrumentProperty(key, value) {
    var instrumentProperty = new api_1.InstrumentProperty();
    instrumentProperty.key = key;
    instrumentProperty.value = {
        labelValue: value,
    };
    return instrumentProperty;
}
function buildUpsertInstrumentPropertiesRequest(key, property, instruments) {
    return instruments.reduce(function (list, instrument) {
        var instrumentPropertyRequest = new api_1.UpsertInstrumentPropertyRequest();
        instrumentPropertyRequest.lusidInstrumentId = instrument.lusidinstrumentid;
        instrumentPropertyRequest.properties = [
            buildInstrumentProperty(key, instrument[property])
        ];
        list.push(instrumentPropertyRequest);
        return list;
    }, []);
}
function upsertInstrumentProperties(key, property, instruments) {
    return new Promise(function (resolve, reject) {
        return clientBuilder(client).then(function (client) {
            return client.api.instruments.upsertInstrumentsProperties(buildUpsertInstrumentPropertiesRequest(key, property, instruments));
        })
            .then(function (res) { return resolve(res.body); })
            .catch(function (err) { return reject(err); });
    });
}
// Create a custom property using the LUSID model
var dataTypeId = new api_1.ResourceId();
dataTypeId.scope = "default";
dataTypeId.code = "currency";
// Create a property definition request to define a new property
var securityCurrencyCode = new api_1.CreatePropertyDefinitionRequest();
securityCurrencyCode.domain = api_1.CreatePropertyDefinitionRequest.DomainEnum.Instrument;
securityCurrencyCode.scope = 'Performance' + uuid4();
securityCurrencyCode.code = 'SECURITY_CURRENCY_CODE';
securityCurrencyCode.valueRequired = true;
securityCurrencyCode.displayName = 'SECURITY_CURRENCY_CODE';
securityCurrencyCode.code = 'SECURITY_CURRENCY_CODE';
securityCurrencyCode.dataTypeId = dataTypeId;
securityCurrencyCode.lifeTime = api_1.CreatePropertyDefinitionRequest.LifeTimeEnum.TimeVariant;
securityCurrencyCode.type = api_1.CreatePropertyDefinitionRequest.TypeEnum.Label;
// Once the instruments have been upserted and property definition created you
// can add your own properties
Promise.all([
    upsertFromCsv(instrumentsFile),
    createProperty(securityCurrencyCode)
])
    .then(function (res) {
    return {
        property: res[1],
        instruments: addLusidInstrumentIdsFromFile(instrumentsFile)
    };
})
    .then(function (response) {
    return response.instruments.then(function (instruments) {
        return upsertInstrumentProperties(response.property['key'], 'currency', instruments);
    });
})
    .then(function (res) { return console.log(res); })
    .catch(function (err) { return console.log(err); });
