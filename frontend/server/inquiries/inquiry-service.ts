export type Inquiry = {
  name: string;
  phone: string;
  license: string;
  area: string;
  notes?: string;
};

export function validateInquiry(value: unknown): Inquiry | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const phone = typeof input.phone === "string" ? input.phone.trim() : "";
  const license = typeof input.license === "string" ? input.license.trim() : "";
  const area = typeof input.area === "string" ? input.area.trim() : "";
  const notes = typeof input.notes === "string" ? input.notes.trim() : "";
  if (name.length < 2 || name.length > 100) return null;
  if (!/^(?:\+?84|0)[0-9 .-]{8,14}$/.test(phone)) return null;
  if (!license || license.length > 100 || !area || area.length > 120 || notes.length > 1000) return null;
  return { name, phone, license, area, notes };
}

export async function deliverInquiry(inquiry: Inquiry): Promise<boolean> {
  const endpoint = process.env.LEAD_WEBHOOK_URL;
  if (!endpoint) return false;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...inquiry, source: "lo-trinh-website" }),
    signal: AbortSignal.timeout(8000),
  });
  return response.ok;
}
