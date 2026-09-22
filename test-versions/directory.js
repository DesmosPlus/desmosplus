const search = document.querySelector("#search");
const results = document.querySelector("#results");
const count = document.querySelector("#count");
// Only the example text changes; never overwrite the user's search.
fetch("/api/region", { cache: "no-store", signal: AbortSignal.timeout(3000) })
  .then(response => response.ok ? response.json() : null)
  .then(data => {
    if (typeof data?.region === "string" && data.region.trim()) {
      search.placeholder = `Search SAT, ${data.region.trim()}, ACT`;
    }
  })
  .catch(() => {});
const labels = { graphing: "Graphing", scientific: "Scientific", fourfunction: "Four function" };
let catalog = [];
const params = new URLSearchParams(location.search);
search.value = params.get("q") || "";
for (const radio of document.querySelectorAll('[name="type"]')) {
  if (radio.value === params.get("type")) radio.checked = true;
}
function render() {
  const query = search.value.trim().toLowerCase();
  const type = document.querySelector('[name="type"]:checked').value;
  const next = new URLSearchParams();
  if (query) next.set("q", search.value.trim());
  if (type !== "all") next.set("type", type);
  history.replaceState(null, "", location.pathname + (next.size ? "?" + next : ""));
  results.replaceChildren();
  let total = 0;
  for (const entry of catalog) {
    if (!query.split(/\s+/).every(word => `${entry.name} ${entry.test}`.toLowerCase().includes(word))) continue;
    const versions = entry.versions.filter(v => type === "all" || v.type === type);
    if (!versions.length) continue;
    const row = document.createElement("section");
    row.className = "test-row";
    const info = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = entry.name;
    const description = document.createElement("p");
    description.textContent = entry.test;
    info.append(title, description);
    const links = document.createElement("nav");
    links.className = "test-links";
    links.setAttribute("aria-label", entry.name + " calculators");
    for (const version of versions) {
      const link = document.createElement("a");
      link.href = version.href;
      link.textContent = labels[version.type] + (version.lang ? (version.lang === "en" ? " (English)" : " (French)") : "");
      links.append(link);
    }
    row.append(info, links);
    results.append(row);
    total += 1;
  }
  count.textContent = total ? `${total} tests and states` : "No matching versions. Try another test or state.";
}
document.querySelector("form").addEventListener("submit", event => event.preventDefault());
search.addEventListener("input", render);
document.querySelector("fieldset").addEventListener("change", render);
fetch("catalog.json").then(response => {
  if (!response.ok) throw new Error("Catalog unavailable");
  return response.json();
}).then(data => { catalog = data; render(); }).catch(() => {
  count.textContent = "The directory could not load. Reload to try again.";
});
