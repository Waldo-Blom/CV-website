/**
 * A class that extends the Map class to validate the keys and values of the map based on the initial object.
 * @class ValidateDataMap
 * @extends Map
 */
export class ValidateDataMap extends Map {
  objectKeySchema;

  constructor(iterable) {
    super(iterable);

    // Use the first object in the map as the "schema" for the rest of the objects
    const initialObject = this.get(1);
    if (!initialObject) throw new Error("No initial object with the key 1");
    this.objectKeySchema = new Set(Object.keys(initialObject));

    iterable.forEach(([key, value]) => {
      if (!this.validateKey(key)) throw new Error(`Invalid key ${key}, type must be number`);
      if (!this.validateValue(value))
        throw new Error(
          `Invalid value for key ${key}, must have the same keys as the initial object`
        );
    });

    return this;
  }

  validateValue(value) {
    const valueKeys = Object.keys(value);
    if (valueKeys.length !== this.objectKeySchema.size) return false;

    for (const key of valueKeys) {
      if (!this.objectKeySchema.has(key)) return false;
    }

    // Validate the languages array if it exists
    if (value.languages && !Array.isArray(value.languages)) return false;

    return true;
  }

  validateKey(key) {
    return typeof key === "number";
  }
}
