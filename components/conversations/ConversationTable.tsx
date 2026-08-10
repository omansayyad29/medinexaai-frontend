import { Eye, Mail, MessageSquare, Phone, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Conversation } from "@/types/conversation";

interface ConversationTableProps {
  conversations: Conversation[];
}

export function ConversationTable({ conversations }: ConversationTableProps) {
  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "Website":
        return <MessageSquare size={14} className="mr-1.5" />;
      case "WhatsApp":
        return <Phone size={14} className="mr-1.5" />; // Replace with WhatsApp icon if available
      case "Email":
        return <Mail size={14} className="mr-1.5" />;
      case "SMS":
        return <Smartphone size={14} className="mr-1.5" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-md border bg-card">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Patient / User
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Clinic
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Channel
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Status
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Handler
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Started At
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {conversations.map((conv) => (
              <tr
                key={conv.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle font-medium">
                  <div className="flex flex-col">
                    <span>{conv.patientName}</span>
                    <span className="text-xs text-muted-foreground">
                      ID: {conv.id}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle">{conv.clinicName}</td>
                <td className="p-4 align-middle">
                  <div className="flex items-center text-muted-foreground">
                    {getChannelIcon(conv.channel)}
                    <span>{conv.channel}</span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                      {
                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
                          conv.status === "Resolved",
                        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400":
                          conv.status === "Active",
                        "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400":
                          conv.status === "Human Handoff",
                      },
                    )}
                  >
                    {conv.status}
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
                      conv.handler === "AI"
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                        : "bg-secondary text-secondary-foreground",
                    )}
                  >
                    {conv.handler}
                  </span>
                </td>
                <td className="p-4 align-middle text-muted-foreground">
                  {new Date(conv.createdAt).toLocaleString([], {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </td>
                <td className="p-4 align-middle text-right">
                  <button
                    type="button"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  >
                    <Eye size={16} />
                    <span className="sr-only">View Conversation</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
