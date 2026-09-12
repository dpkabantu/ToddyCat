document.getElementById("copyBtn").addEventListener("click", async () => {
  const value = document.getElementById("contract").textContent.trim();
  if (value.includes("COMING SOON")) return;
  try {
    await navigator.clipboard.writeText(value);
    document.getElementById("copyBtn").textContent = "COPIED!";
    setTimeout(() => document.getElementById("copyBtn").textContent = "COPY", 1500);
  } catch(e) {}
});
