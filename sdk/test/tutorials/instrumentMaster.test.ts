// Require the LUSID SDK and libraries
import {
  InstrumentDefinition,
  UpsertInstrumentsResponse,
  PropertyDefinition,
  CreatePropertyDefinitionRequest,
  GetInstrumentsResponse,
  InstrumentProperty,
  UpsertInstrumentPropertiesResponse,
  UpsertInstrumentPropertyRequest,
  ResourceId} from "../../api";

import { Client } from './apiClientInitialisation'

const clientAuthentication = require('./apiClientAuthentication.js')
const uuid4 = require('uuid/v4')
const csv = require('csvtojson')

var client = new Client()
var clientBuilder = clientAuthentication.lusidApiClientBuilder;
var instrumentsFile = './paper-instruments.json'

/**
 * Function to take an instrument object and convert it into a LUSID model
 * Inputs
 * instrument (dictionary) - Object with key-value attribute pairs describing the instrument
 * Returns
 * InstrumentDefinition (lusid.InstrumentDefinition) LUSID model for an instrument definition
 */
function buildUpsertInstrumentRequest(instrument: any): InstrumentDefinition {
  let definition: InstrumentDefinition = new InstrumentDefinition()
  definition.name = instrument.instrument_name
  definition.identifiers = {
    "Figi": instrument.figi,
    "ClientInternal": instrument.client_internal
  }
  return definition
}

// Import your instruments from a CSV file
function loadFromCsv(filePath: string): Promise<any[]> {
  // Returns a promise
  return new Promise((resolve, reject) => {
    // Use the csvtojson module to import a CSV file
    return csv()
    .fromFile(filePath)
    // Produces an array of objects, one for each row (instrument) of the CSV
    .then((instruments: any[]) => resolve(instruments))
    .catch((err) => reject(err))
  })
}

// Import your instruments from a JSON file
function loadFromJson(filePath: string): Promise<any[]> {
  // Returns a promise
  return new Promise((resolve, reject) => {
    // Use the csvtojson module to import a CSV file
    let instruments = require(filePath)
    return resolve(instruments)
  })
}

enum FileType {
    Json = "Json",
    Csv = "Csv",
}

function upsertInstrumentsFromFile(
  filePath: string,
  fileType: FileType
  ): Promise<UpsertInstrumentsResponse> {

    if (fileType == FileType.Json) {
      var loadFunction = loadFromJson(filePath)
    } else {
      var loadFunction = loadFromCsv(filePath)
    }

    return new Promise((resolve, reject) => {
      loadFunction.then((instruments: any[]) => {
        console.log(instruments)
        // Use a reduce function to convert each instrument object into a LUSID model
        return instruments.reduce((map: {[key: string]: InstrumentDefinition}, instrument: any) => {
          // Call your conversion function defined earlier to convert each instrument
          map[instrument.instrument_name] = buildUpsertInstrumentRequest(instrument)
          return map
        }, {})
      })
      .then((instrumentDefinitions: {[key: string]: InstrumentDefinition}) => {
        // Use your client to call upsert instruments
        return clientBuilder(client).then((client: Client) => {
          return client.api.instruments.upsertInstruments(instrumentDefinitions)
        })
      })
      .then((res: any) => resolve(res.body))
      .catch((err: any) => reject(err))
    })
  }


// Use your client to call LUSID and create a new property
function createProperty(
  propertyDefintion: CreatePropertyDefinitionRequest):
  Promise<PropertyDefinition> {
    // Return a promise
    return new Promise((resolve, reject) => {
      // Use your client to call create property definition
      return clientBuilder(client).then((client: Client) => {
        return client.api.propertyDefinitions.createPropertyDefinition(propertyDefintion)
      })
      .then((res: any) => resolve(res.body))
      .catch((err: any) => reject(err))
    })
  }

// Gets tne Lusid Instrument Id for a list of instruments
function getLuidForInstruments(
  identifierType: string,
  identifierValues: string):
  Promise<{[key: string]: string}> {
    // Return a promise
    return new Promise((resolve, reject) => {
      // Using your client call LUSID to get the instrument definitions
      return clientBuilder(client)
      .then((client: Client) => {
        return client.api.instruments.getInstruments(identifierType, identifierValues)
        .then((res: any) => res.body)
      })
      .then((res: GetInstrumentsResponse) => {
        // Pick off the Lusid Instrument ID for each definition and discard the rest
        return Object.keys(res.values).reduce((map: {[key: string]: string}, instrumentIdentifier: string) => {
          map[instrumentIdentifier] = res.values[instrumentIdentifier].lusidInstrumentId
          return map
        }, {})
      })
      .then((lusidInstrumentIdMapping: {[key: string]: string}) => {
        resolve(lusidInstrumentIdMapping)
      })
      .catch((err: any) => reject(err))
    })
  }

// Get the Lusid Instrument Id for our instruments
function addLusidInstrumentIdsFromFile(
  filePath: string,
  fileType: FileType
  ): Promise<any[]> {

    if (fileType == FileType.Json) {
      var loadFunction = loadFromJson(filePath)
    } else {
      var loadFunction = loadFromCsv(filePath)
    }

    return new Promise((resolve, reject) => {
      // Get your instruments from a CSV file
      return loadFunction
      .then((instruments: any[]) => {
        // Get the figi for each instrument
        return [
          instruments,
          instruments.reduce((figis: string[], instrument: any) => {
            figis.push(instrument.figi)
            return figis
          }, [])
        ]
      })
      .then(([instruments, figis]) => {
        // Using the Figi retrieve each instruments LusidInstrumentId
        return getLuidForInstruments('Figi', figis)
        .then((lusidInstrumentIdMapping) => {
          return [
            instruments,
            lusidInstrumentIdMapping
          ]
        })
      })
      .then(([instruments, lusidInstrumentIdMapping]) => {
        return instruments.map((instrument: any) => {
          instrument.lusidinstrumentid = lusidInstrumentIdMapping[instrument.figi]
          return instrument
        })
      })
      .then((instruments: any[]) => resolve(instruments))
      .catch((err: any) => reject(err))
    })
}

function buildInstrumentProperty(key: string, value: string): InstrumentProperty {
  let instrumentProperty = new InstrumentProperty()
  instrumentProperty.key = key
  instrumentProperty.value = {
    labelValue: value,
  }
  return instrumentProperty
}

function buildUpsertInstrumentPropertiesRequest(
  key: string,
  property: string,
  instruments: any[]):
  UpsertInstrumentPropertyRequest {
    return instruments.reduce((list: UpsertInstrumentPropertyRequest[], instrument: any) => {
      let instrumentPropertyRequest = new UpsertInstrumentPropertyRequest()
      instrumentPropertyRequest.lusidInstrumentId = instrument.lusidinstrumentid
      instrumentPropertyRequest.properties = [
        buildInstrumentProperty(
          key,
          instrument[property]
        )
      ]
      list.push(instrumentPropertyRequest)
      return list
    }, [])
  }

function upsertInstrumentProperties(
  key: string,
  property: string,
  instruments: any[]):
  Promise<UpsertInstrumentPropertiesResponse> {
    return new Promise((resolve, reject) => {
      return clientBuilder(client).then((client: Client) => {
        return client.api.instruments.upsertInstrumentsProperties(
          buildUpsertInstrumentPropertiesRequest(
            key,
            property,
            instruments
          )
        )
    })
    .then((res: any) => resolve(res.body))
    .catch((err: any) => reject(err))
  })
  }

// Create a custom property using the LUSID model
var dataTypeId = new ResourceId()
dataTypeId.scope = "default"
dataTypeId.code= "currency"

// Create a property definition request to define a new property
var securityCurrencyCode = new CreatePropertyDefinitionRequest()
securityCurrencyCode.domain = CreatePropertyDefinitionRequest.DomainEnum.Instrument
securityCurrencyCode.scope = 'Performance' + uuid4()
securityCurrencyCode.code = 'SECURITY_CURRENCY_CODE'
securityCurrencyCode.valueRequired = true
securityCurrencyCode.displayName = 'SECURITY_CURRENCY_CODE'
securityCurrencyCode.code = 'SECURITY_CURRENCY_CODE'
securityCurrencyCode.dataTypeId = dataTypeId
securityCurrencyCode.lifeTime = CreatePropertyDefinitionRequest.LifeTimeEnum.TimeVariant
securityCurrencyCode.type = CreatePropertyDefinitionRequest.TypeEnum.Label

// Once the instruments have been upserted and property definition created you
// can add your own properties
Promise.all([
  upsertInstrumentsFromFile(instrumentsFile, FileType.Json),
  createProperty(securityCurrencyCode)
])
  .then((res) => {
    return {
      property: res[1],
      instruments: addLusidInstrumentIdsFromFile(instrumentsFile, FileType.Json)
      }
    })
  .then((response) => {
    return response.instruments.then((instruments) => {
      return upsertInstrumentProperties(
        response.property['key'],
        'currency',
        instruments)
    })
  })
  .then((res: UpsertInstrumentPropertiesResponse) => console.log(res))
  .catch((err) => console.log(err))

export {}
