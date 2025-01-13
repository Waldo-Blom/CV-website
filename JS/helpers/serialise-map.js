export function serialiseMap(map) {
  return JSON.stringify(map, replacer);
}

export function deserialiseMap(json) {
  return JSON.parse(json, reviver);
}

function replacer(key, value) {
  if (value instanceof Map) {
    const entries = Array.from(value.entries());
    const serialisedEntries = entries.map((entry) => serialiseEntry(entry));
    return {
      dataType: "Map",
      value: serialisedEntries,
    };
  } else {
    return value;
  }
}

function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      const map = new Map();
      for (const [k, v] of Object.entries(value.value)) {
        const deserialisedEntry = deserialiseEntry([k, v]);
        // Parse the key if it's a number
        const entryKey = deserialisedEntry[1][0];
        const entryValue = deserialisedEntry[1][1];
        const parsedKey = isNaN(entryKey) ? entryKey : Number(entryKey);
        // console.log("parsedKey", parsedKey, deserializedEntry[1][0]);
        map.set(parsedKey, entryValue);
      }

      return map;
    }
    if (value.dataType === "Set") {
      return new Set(value.value);
    }
  }
  return value;
}

function serialiseEntry(entry) {
  const [key, value] = entry;
  if (value instanceof Set) return [key, { dataType: "Set", value: Array.from(value) }];
  // if (typeof value === "object")
  //   return Object.fromEntries(Object.entries(entry).map((subEntry) => serialiseEntry(subEntry)));
  // if (Array.isArray(value)) return value.map((subEntry) => serialiseEntry(subEntry));
  if (Array.isArray(value)) {
    return [
      key,
      value.map((item) =>
        typeof item === "object" && item !== null ? Object.fromEntries(Object.entries(item).map(serialiseEntry)) : item
      ),
    ];
  }

  if (typeof value === "object" && value !== null)
    return [key, Object.fromEntries(Object.entries(value).map(serialiseEntry))];
  return entry;
}

function deserialiseEntry(entry) {
  const [key, value] = entry;
  if (value && (value.dataType === "Set" || value instanceof Set)) return entry;
  if (Array.isArray(value)) {
    return [
      key,
      value.map((item) =>
        typeof item === "object" && item !== null
          ? Object.fromEntries(Object.entries(item).map(deserialiseEntry))
          : item
      ),
    ];
  }

  if (typeof value === "object" && value !== null)
    return [key, Object.fromEntries(Object.entries(value).map(deserialiseEntry))];
  return entry;
}
