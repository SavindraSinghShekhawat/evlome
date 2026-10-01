const fs = require('fs');
const html = fs.readFileSync('/Users/savi/.gemini/antigravity-ide/brain/332097c6-de6b-40ff-8a76-88528539dc4d/.system_generated/steps/403/content.md', 'utf8');

// The field definitions are usually in a JS array inside a <script> block, e.g. WIZ_global_data
const match = html.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(.*?);/);
if (match) {
    const data = JSON.parse(match[1]);
    const fields = data[1][1];
    fields.forEach(f => {
        const title = f[1];
        const entryId = f[4][0][0];
        console.log(`${title}: entry.${entryId}`);
    });
} else {
    console.log("Regex didn't match FB_PUBLIC_LOAD_DATA_");
    // Try regexing the HTML for aria-label or data-params
    const re = /data-params="[^"]*\[\d+,"([^"]+)"[^"]*\[\[(\d+)/g;
    let m;
    while ((m = re.exec(html)) !== null) {
        console.log(`${m[1]}: entry.${m[2]}`);
    }
}
