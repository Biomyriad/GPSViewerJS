
// Here’s you compress a string:
const str = "foo".repeat(1000);
const compressedBytes = await compress(str);
console.log(compressedBytes);
// => Uint8Array(61) [31, 139, 8, 0, ...]

// And here’s how you decompress one:
const decompressed = await decompress(compressedBytes);
console.log(decompressed);
// => "foofoofoofoofoo ..."

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/**
 * Convert a string to its UTF-8 bytes and compress it.
 *
 * @param {string} str
 * @returns {Promise<Uint8Array>}
 */
async function compress(str) {
  // Convert the string to a byte stream.
  const stream = new Blob([str]).stream();

  // Create a compressed stream.
  const compressedStream = stream.pipeThrough(
    new CompressionStream("gzip")
  );

  // Read all the bytes from this stream.
  const chunks = [];
  for await (const chunk of compressedStream) {
    chunks.push(chunk);
  }
  return await concatUint8Arrays(chunks);
}

/**
 * Decompress bytes into a UTF-8 string.
 *
 * @param {Uint8Array} compressedBytes
 * @returns {Promise<string>}
 */
async function decompress(compressedBytes) {
  // Convert the bytes to a stream.
  const stream = new Blob([compressedBytes]).stream();

  // Create a decompressed stream.
  const decompressedStream = stream.pipeThrough(
    new DecompressionStream("gzip")
  );

  // Read all the bytes from this stream.
  const chunks = [];
  for await (const chunk of decompressedStream) {
    chunks.push(chunk);
  }
  const stringBytes = await concatUint8Arrays(chunks);

  // Convert the bytes to a string.
  return new TextDecoder().decode(stringBytes);
}

/**
 * Combine multiple Uint8Arrays into one.
 *
 * @param {ReadonlyArray<Uint8Array>} uint8arrays
 * @returns {Promise<Uint8Array>}
 */
async function concatUint8Arrays(uint8arrays) {
  const blob = new Blob(uint8arrays);
  const buffer = await blob.arrayBuffer();
  return new Uint8Array(buffer);
}