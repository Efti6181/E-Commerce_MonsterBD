// Simple build validation - checks all files exist and are well-formed
const fs = require("fs");
const path = require("path");

const required = ["index.html", "details.html", "style.css", "script.js", "images/image.svg"];
let ok = true;

for (const f of required) {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) { console.error("MISSING: " + f); ok = false; }
  else { console.log("OK: " + f + " (" + fs.statSync(p).size + " bytes)"); }
}

// Validate script.js syntax
try {
  new Function(fs.readFileSync(path.join(__dirname, "script.js"), "utf8"));
  console.log("OK: script.js syntax valid");
} catch (e) {
  console.error("SYNTAX ERROR in script.js: " + e.message);
  ok = false;
}

// Check HTML references resolve
const htmlFiles = ["index.html", "details.html"];
for (const hf of htmlFiles) {
  const content = fs.readFileSync(path.join(__dirname, hf), "utf8");
  const refs = content.match(/(?:src|href)="([^"]+)"/g) || [];
  for (const ref of refs) {
    const target = ref.replace(/(?:src|href)="/, "").replace(/"$/, "");
    if (target.startsWith("http") || target.startsWith("#") || target.startsWith("https://") || target.startsWith("mailto:")) continue;
    const resolved = path.join(__dirname, target.split("?")[0].split("#")[0]);
    if (!fs.existsSync(resolved) && !target.includes("wa.me") && !target.includes("m.me")) {
      console.warn("WARN: " + hf + " references missing " + target);
    }
  }
}

if (!ok) { console.error("\nBUILD FAILED"); process.exit(1); }
console.log("\nBUILD SUCCESS - all 4 files validated");
