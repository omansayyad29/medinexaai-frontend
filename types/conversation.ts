export type ConversationChannel = "Website" | "WhatsApp" | "Email" | "SMS";
export type ConversationStatus = "Active" | "Resolved" | "Human Handoff";
export type ConversationHandler = "AI" | "Human";

export interface Conversation {
  id: string;
  patientName: string;
  clinicName: string;
  channel: ConversationChannel;
  status: ConversationStatus;
  handler: ConversationHandler;
  createdAt: string;
  lastMessageAt: string;
}
