
// license.js - License Validator for Shroomtop420® Prompts
async function validateLicense(promptText, expectedHash, meta) {
  const hash = await sha256(promptText);
  if (hash !== expectedHash) {
    alert("License validation failed: SHA256 mismatch.");
    return false;
  }
  if (!meta.uuid || !meta.license || !meta.promptHash) {
    alert("License validation failed: Incomplete metadata.");
    return false;
  }
  console.log("License validation passed for UUID:", meta.uuid);
  return true;
}
async function sha256(text) {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
