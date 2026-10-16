export async function readConsultationStream(response: Response, onText: (text: string) => void) {
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || data.error || "The consultation could not be created. Please try again later.");
  }
  if (!response.body) throw new Error("No consultation response was received.");
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "", text = "", completed = false;
  try {
    while (true) {
      const { value, done } = await reader.read();
      buffer += done ? decoder.decode() : decoder.decode(value, { stream: true });
      let end = buffer.indexOf("\n");
      while (end >= 0) {
        const line = buffer.slice(0, end).trim(); buffer = buffer.slice(end + 1);
        if (line.startsWith("data: ")) {
          const event = JSON.parse(line.slice(6));
          if (event.type === "text") { text += event.text; onText(text); }
          if (event.type === "error") throw new Error(event.message);
          if (event.type === "done") completed = true;
        }
        end = buffer.indexOf("\n");
      }
      if (done) break;
    }
    if (!completed || !text.trim()) throw new Error("The consultation was interrupted or returned no answer. Your description has been kept.");
    return text;
  } finally { reader.releaseLock(); }
}